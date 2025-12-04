import { useEffect, useMemo, useRef, useState } from 'react';
import { Text, View, TouchableOpacity, ScrollView } from 'react-native';
import { useRoute, RouteProp, useNavigation, NavigationProp } from '@react-navigation/native';
import { style } from './style';
import { temas } from '../../global/temas';
import { Workout } from '../../types';
import { getExerciseById } from '../../data/exercises';
import { Cronometro } from '../../hooks/Cronometro';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Ionicons } from '@expo/vector-icons';

type Params = { WorkoutRunner: { workoutId: string } };

export default function WorkoutRunner() {
    const navigation = useNavigation<NavigationProp<any>>();
    const route = useRoute<RouteProp<Params, 'WorkoutRunner'>>();
    const { workoutId } = route.params || { workoutId: '' };
    const [workout, setWorkout] = useState<Workout | null>(null);
    const [exerciseIndex, setExerciseIndex] = useState(0);
    const [setIndex, setSetIndex] = useState(0);
    const [isResting, setIsResting] = useState(false);
    const [restRemaining, setRestRemaining] = useState(0);
    const restIntervalRef = useRef<any>(null);
    const { tempo, isRunning, iniciarPausar, resetar, formatarTempo } = Cronometro();
    const [startedAt, setStartedAt] = useState<string>(new Date().toISOString());


    const key = 'musclink.workouts';
    useEffect(() => {
        async function loadWorkout() {
            try {
                const raw = await AsyncStorage.getItem(key);
                const arr: Workout[] = raw ? JSON.parse(raw) : [];
                const w = arr.find(x => x.id === workoutId) || null;
                setWorkout(w);
            } catch (err) {
                console.log('Erro ao carregar workout:', err);
            }
        }

        loadWorkout();
    }, [workoutId]);

    useEffect(() => {
        if (!isResting) return;
        if (restIntervalRef.current) clearInterval(restIntervalRef.current);

        restIntervalRef.current = setInterval(() => {
            setRestRemaining(prev => {
                const next = prev - 1;
                if (next <= 0) {
                    clearInterval(restIntervalRef.current);
                    restIntervalRef.current = null;
                    setIsResting(false);
                }
                return next;
            });
        }, 1000);

        return () => {
            if (restIntervalRef.current) clearInterval(restIntervalRef.current);
        };
    }, [isResting]);

    const currentExercise = useMemo(() => {
        if (!workout) return null;
        const wx = workout.exercises[exerciseIndex];
        if (!wx) return null;
        const ex = getExerciseById(wx.exerciseId);
        return { wx, ex };
    }, [workout, exerciseIndex]);

    const salvarLog = async () => {
        try {
            const keyLogs = 'musclink.workoutLogs';

            if (!workout) return;

            const raw = await AsyncStorage.getItem(keyLogs);
            const logs = raw ? JSON.parse(raw) : [];

            const logItem = {
                id: `log_${Date.now()}`,
                workoutId: workout.id,
                workoutName: workout.name,
                startedAt,
                completedAt: new Date().toISOString(),
                duration: tempo
            };

            await AsyncStorage.setItem(keyLogs, JSON.stringify([logItem, ...logs]));

        } catch (err) {
            console.log('Erro ao salvar log:', err);
        }
    };


    const completeSet = () => {
        if (!workout || !currentExercise) return;
        const wx = currentExercise.wx;
        const currentSet = wx.sets[setIndex];
        const rest = currentSet?.restTime || 0;
        const nextSet = setIndex + 1;
        if (nextSet < wx.sets.length) {
            setIsResting(true);
            setRestRemaining(rest);
            setSetIndex(nextSet);
        } else {
            const nextExercise = exerciseIndex + 1;
            if (nextExercise < workout.exercises.length) {
                setExerciseIndex(nextExercise);
                setSetIndex(0);
                setIsResting(rest > 0);
                setRestRemaining(rest);
            } else {
                setIsResting(false);
                iniciarPausar();
                salvarLog();
                navigation.navigate('Historico' as never);
            }
        }
    };

    const handleStartPause = () => {
        if (!isRunning && tempo === 0) {
            setStartedAt(new Date().toISOString());
        }
        iniciarPausar();
    };

    if (!workout) {
        return (
            <View style={style.container}>
                <Text style={style.errorText}>Treino não encontrado</Text>
            </View>
        );
    }

    const totalSets = workout.exercises.reduce((acc, e) => acc + e.sets.length, 0);
    const completedSets = workout.exercises.slice(0, exerciseIndex).reduce((acc, e) => acc + e.sets.length, 0) + setIndex;

    return (
        <View style={style.container}>
            <TouchableOpacity>
                <Ionicons name="arrow-back"
                    size={50}
                    color={temas.colors.laranja}
                    onPress={navigation.goBack}
                    style={{marginTop:50}} />
            </TouchableOpacity>
            <ScrollView contentContainerStyle={style.scrollContent}>
                <Text style={style.title}>Executando<Text style={{ color: temas.colors.laranja }}> {workout.name}</Text></Text>

                <View style={style.timerBox}>
                    <Text style={style.timerText}>{formatarTempo(tempo)}</Text>
                </View>

                <View style={style.controlsRow}>
                    <TouchableOpacity onPress={handleStartPause} style={style.primaryButton}>
                        <Text style={style.primaryButtonText}>{isRunning ? 'Pausar' : tempo > 0 ? 'Continuar' : 'Iniciar'}</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={resetar} style={style.secondaryButton}>
                        <Text style={style.secondaryButtonText}>Zerar</Text>
                    </TouchableOpacity>
                </View>

                {currentExercise && (
                    <View style={style.exerciseBox}>
                        <Text style={style.exerciseName}>{currentExercise.ex?.name}</Text>
                        <Text style={style.exerciseMeta}>Série {setIndex + 1} de {currentExercise.wx.sets.length}</Text>
                        {isResting ? (
                            <View style={style.restBox}>
                                <Text style={style.restText}>Descanso: {String(restRemaining).padStart(2, '0')}s</Text>
                            </View>
                        ) : (
                            <TouchableOpacity style={style.completeSetButton} onPress={completeSet}>
                                <Text style={style.completeSetText}>Concluir Série</Text>
                            </TouchableOpacity>
                        )}
                    </View>
                )}

                <View style={style.progressBox}>
                    <Text style={style.progressText}>{completedSets} / {totalSets} séries</Text>
                </View>

                <View style={style.listBox}>
                    {workout.exercises.map((wx, idx) => {
                        const ex = getExerciseById(wx.exerciseId);
                        const active = idx === exerciseIndex;
                        return (
                            <View key={wx.id} style={[style.listItem, active ? style.listItemActive : null]}>
                                <Text style={style.listItemTitle}>{ex?.name}</Text>
                                <Text style={style.listItemMeta}>{wx.sets.length} séries</Text>
                            </View>
                        );
                    })}
                </View>
            </ScrollView>
        </View>
    );
}

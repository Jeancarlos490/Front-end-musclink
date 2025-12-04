import { Text, View, TouchableOpacity, TextInput, ScrollView } from 'react-native';
import { style } from './style';
import { temas } from '../../global/temas';
import { useNavigation, NavigationProp } from '@react-navigation/native';
import { exercisesData, muscleGroupLabels } from '../../data/exercises';
import { Exercise, Workout, WorkoutExercise } from '../../types';
import { useMemo, useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';


export default function TrainingSelection() {
    const navigation = useNavigation<NavigationProp<any>>();
    const [nomeTreino, setNomeTreino] = useState('');
    const [busca, setBusca] = useState('');
    const [grupoSelecionado, setGrupoSelecionado] = useState<string | null>(null);
    const [selecionados, setSelecionados] = useState<Exercise[]>([]);
    const grupos = useMemo(() => Object.keys(muscleGroupLabels), []);

    const exerciciosFiltrados = useMemo(() => {
        const texto = busca.trim().toLowerCase();
        return exercisesData.filter(ex => {
            const filtroGrupo = grupoSelecionado ? (ex.muscleGroup === grupoSelecionado || ex.secondaryMuscles?.includes(grupoSelecionado as any)) : true;
            const filtroTexto = texto ? ex.name.toLowerCase().includes(texto) : true;
            return filtroGrupo && filtroTexto;
        });
    }, [busca, grupoSelecionado]);

    const toggleSelecionado = (ex: Exercise) => {
        const existe = selecionados.find(e => e.id === ex.id);
        if (existe) {
            setSelecionados(selecionados.filter(e => e.id !== ex.id));
        } else {
            setSelecionados([...selecionados, ex]);
        }
    };

    const salvarTreino = async () => {
        const id = `wk_${Date.now()}`;
        const nome = nomeTreino.trim() || 'Meu Treino';
        const gruposTreino = Array.from(new Set(selecionados.map(e => e.muscleGroup)));

        const exercicios: WorkoutExercise[] = selecionados.map((e, idx) => ({
            id: `${id}_ex_${e.id}`,
            exerciseId: e.id,
            order: idx + 1,
            sets: [
                { id: `${id}_${e.id}_s1`, targetReps: 10, restTime: 60, completed: false },
                { id: `${id}_${e.id}_s2`, targetReps: 10, restTime: 60, completed: false },
                { id: `${id}_${e.id}_s3`, targetReps: 10, restTime: 60, completed: false }
            ]
        }));

        const estimatedDuration = exercicios.reduce((acc, we) =>
            acc + we.sets.reduce((s, set) => s + set.restTime, 0) + we.sets.length * 40
            , 0);

        const workout: Workout = {
            id,
            name: nome,
            description: undefined,
            muscleGroups: gruposTreino as any,
            exercises: exercicios,
            estimatedDuration,
            difficulty: 'intermediario',
            createdAt: new Date().toISOString(),
            updatedAt: new Date().toISOString(),
            isFavorite: false,
            isTemplate: true
        };

        const key = 'musclink.workouts';

        try {
            const raw = await AsyncStorage.getItem(key);
            const arr = raw ? JSON.parse(raw) : [];

            const novoArray = [...arr, workout];

            await AsyncStorage.setItem(key, JSON.stringify(novoArray));
        } catch (err) {
            console.log("Erro ao salvar treino:", err);
        }

        // limpa tudo
        setSelecionados([]);
        setBusca('');
        setNomeTreino('');
;
    };

    return (
        <View style={style.container}>
            <ScrollView contentContainerStyle={style.scrollContent}>
                <Text style={style.TitleText}>Selecione o<Text style={{ color: temas.colors.laranja }}> Treino</Text></Text>
                <View style={style.backbox}>
                    <TextInput
                        style={style.input}
                        placeholder="Nome do treino"
                        placeholderTextColor={temas.colors.cordotexto}
                        value={nomeTreino}
                        onChangeText={setNomeTreino}
                    />
                    <View style={style.chipsRow}>
                        <TouchableOpacity
                            style={[style.chip, !grupoSelecionado ? style.chipActive : null]}
                            onPress={() => setGrupoSelecionado(null)}
                        >
                            <Text style={style.chipText}>Todos</Text>
                        </TouchableOpacity>
                        {grupos.map(g => (
                            <TouchableOpacity
                                key={g}
                                style={[style.chip, grupoSelecionado === g ? style.chipActive : null]}
                                onPress={() => setGrupoSelecionado(g)}
                            >
                                <Text style={style.chipText}>{muscleGroupLabels[g]}</Text>
                            </TouchableOpacity>
                        ))}
                    </View>
                    <TextInput
                        style={style.input}
                        placeholder="Buscar exercício"
                        placeholderTextColor={temas.colors.cordotexto}
                        value={busca}
                        onChangeText={setBusca}
                    />
                    <View style={style.listContainer}>
                        {exerciciosFiltrados.map(ex => {
                            const ativo = !!selecionados.find(s => s.id === ex.id);
                            return (
                                <View key={ex.id} style={[style.exerciseItem, ativo ? style.exerciseItemActive : null]}>
                                    <View style={style.exerciseInfo}>
                                        <Text style={style.exerciseName}>{ex.name}</Text>
                                        <Text style={style.exerciseMeta}>{muscleGroupLabels[ex.muscleGroup]}</Text>
                                    </View>
                                    <TouchableOpacity style={style.addButton} onPress={() => toggleSelecionado(ex)}>
                                        <Text style={style.addButtonText}>{ativo ? 'Remover' : 'Adicionar'}</Text>
                                    </TouchableOpacity>
                                </View>
                            );
                        })}
                    </View>
                    {selecionados.length > 0 && (
                        <View style={style.selectedSection}>
                            <Text style={style.selectedTitle}>Selecionados</Text>
                            {selecionados.map((ex, i) => (
                                <Text key={ex.id} style={style.selectedItem}>{String(i + 1).padStart(2, '0')}. {ex.name}</Text>
                            ))}
                            <TouchableOpacity style={style.saveButton} onPress={salvarTreino}>
                                <Text style={style.ButtonText}>Salvar Treino</Text>
                            </TouchableOpacity>
                        </View>
                    )}
                </View>
            </ScrollView>
        </View>
    )
}

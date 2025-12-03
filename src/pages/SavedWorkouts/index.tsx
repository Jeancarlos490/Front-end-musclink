import { useEffect, useState } from 'react';
import { Text, View, TouchableOpacity, ScrollView } from 'react-native';
import { useNavigation, NavigationProp } from '@react-navigation/native';
import { style } from './style';
import { temas } from '../../global/temas';
import { Workout, WorkoutExercise, WorkoutSet } from '../../types';
import { muscleGroupLabels } from '../../data/exercises';

export default function SavedWorkouts() {
    const navigation = useNavigation<NavigationProp<any>>();
    const [workouts, setWorkouts] = useState<Workout[]>([]);
    const [editingId, setEditingId] = useState<string | null>(null);
    const [editingWorkout, setEditingWorkout] = useState<Workout | null>(null);

    const key = 'musclink.workouts';

    const loadWorkouts = () => {
        try {
            const canUseLocal = typeof window !== 'undefined' && (window as any).localStorage;
            if (canUseLocal) {
                const raw = (window as any).localStorage.getItem(key);
                const arr = raw ? JSON.parse(raw) : [];
                setWorkouts(arr);
            }
        } catch {}
    };

    const removeWorkout = (id: string) => {
        try {
            const canUseLocal = typeof window !== 'undefined' && (window as any).localStorage;
            if (canUseLocal) {
                const updated = workouts.filter(w => w.id !== id);
                (window as any).localStorage.setItem(key, JSON.stringify(updated));
                setWorkouts(updated);
            }
        } catch {}
    };

    const startEdit = (w: Workout) => {
        setEditingId(w.id);
        setEditingWorkout(JSON.parse(JSON.stringify(w)));
    };

    const cancelEdit = () => {
        setEditingId(null);
        setEditingWorkout(null);
    };

    const saveEdit = () => {
        if (!editingWorkout) return;
        try {
            const canUseLocal = typeof window !== 'undefined' && (window as any).localStorage;
            if (canUseLocal) {
                const estimatedDuration = editingWorkout.exercises.reduce((acc, we) => acc + we.sets.reduce((s, set) => s + set.restTime, 0) + we.sets.length * 40, 0);
                const updatedWorkout = { ...editingWorkout, estimatedDuration, updatedAt: new Date().toISOString() } as Workout;
                const updated = workouts.map(w => w.id === updatedWorkout.id ? updatedWorkout : w);
                (window as any).localStorage.setItem(key, JSON.stringify(updated));
                setWorkouts(updated);
                cancelEdit();
            }
        } catch {}
    };

    const updateSet = (exerciseIndex: number, setIndex: number, patch: Partial<WorkoutSet>) => {
        if (!editingWorkout) return;
        const exs = editingWorkout.exercises.slice();
        const wx = { ...exs[exerciseIndex] } as WorkoutExercise;
        const sets = wx.sets.slice();
        sets[setIndex] = { ...sets[setIndex], ...patch };
        wx.sets = sets;
        exs[exerciseIndex] = wx;
        setEditingWorkout({ ...editingWorkout, exercises: exs });
    };

    const addSet = (exerciseIndex: number) => {
        if (!editingWorkout) return;
        const exs = editingWorkout.exercises.slice();
        const wx = { ...exs[exerciseIndex] } as WorkoutExercise;
        const newSet: WorkoutSet = {
            id: `${wx.id}_s${wx.sets.length + 1}`,
            targetReps: 10,
            restTime: 60,
            completed: false
        };
        wx.sets = [...wx.sets, newSet];
        exs[exerciseIndex] = wx;
        setEditingWorkout({ ...editingWorkout, exercises: exs });
    };

    const removeSet = (exerciseIndex: number) => {
        if (!editingWorkout) return;
        const exs = editingWorkout.exercises.slice();
        const wx = { ...exs[exerciseIndex] } as WorkoutExercise;
        if (wx.sets.length > 1) {
            wx.sets = wx.sets.slice(0, wx.sets.length - 1);
            exs[exerciseIndex] = wx;
            setEditingWorkout({ ...editingWorkout, exercises: exs });
        }
    };

    useEffect(() => {
        loadWorkouts();
    }, []);

    return (
        <View style={style.container}>
            <ScrollView contentContainerStyle={style.scrollContent}>
                <View style={style.headerRow}>
                    <TouchableOpacity style={style.closeButton} onPress={() => navigation.navigate('TrainingSelection' as never)}>
                        <Text style={style.closeButtonText}>✕</Text>
                    </TouchableOpacity>
                    <Text style={style.Titletext}>Treinos<Text style={{ color: temas.colors.laranja }}> Salvos</Text></Text>
                </View>

                {workouts.length === 0 && (
                    <View style={style.emptyBox}>
                        <Text style={style.emptyText}>Nenhum treino salvo</Text>
                        <Text style={style.emptyHint}>Crie um treino na aba Seleção</Text>
                    </View>
                )}

                {workouts.map(w => (
                    <View key={w.id} style={style.workoutCard}>
                        <View style={style.workoutHeader}>
                            <Text style={style.workoutName}>{w.name}</Text>
                            <Text style={style.workoutMeta}>{w.exercises.length} exercícios • {Math.round(w.estimatedDuration/60)} min</Text>
                        </View>
                        <View style={style.chipsRow}>
                            {w.muscleGroups.slice(0, 4).map(g => (
                                <View key={`${w.id}-${g}`} style={style.chip}><Text style={style.chipText}>{muscleGroupLabels[g]}</Text></View>
                            ))}
                        </View>
                        <View style={style.actionsRow}>
                            <TouchableOpacity style={style.primaryButton} onPress={() => navigation.navigate('WorkoutRunner' as never, { workoutId: w.id } as never)}>
                                <Text style={style.primaryButtonText}>Abrir</Text>
                            </TouchableOpacity>
                            {editingId === w.id ? (
                                <TouchableOpacity style={style.secondaryButton} onPress={saveEdit}>
                                    <Text style={style.secondaryButtonText}>Salvar</Text>
                                </TouchableOpacity>
                            ) : (
                                <TouchableOpacity style={style.secondaryButton} onPress={() => startEdit(w)}>
                                    <Text style={style.secondaryButtonText}>Editar</Text>
                                </TouchableOpacity>
                            )}
                            <TouchableOpacity style={style.deleteButton} onPress={() => removeWorkout(w.id)}>
                                <Text style={style.deleteButtonText}>Excluir</Text>
                            </TouchableOpacity>
                        </View>
                        {editingId === w.id && editingWorkout && (
                            <View style={style.editSection}>
                                {editingWorkout.exercises.map((wx, ei) => (
                                    <View key={wx.id} style={style.editExerciseBox}>
                                        <Text style={style.editExerciseTitle}>Exercício {ei + 1}</Text>
                                        <View style={style.setsRow}>
                                            {wx.sets.map((s, si) => (
                                                <View key={s.id} style={style.setCard}>
                                                    <Text style={style.setLabel}>Série {si + 1}</Text>
                                                    <View style={style.controlRow}>
                                                        <Text style={style.controlText}>Reps: {s.targetReps}</Text>
                                                        <View style={style.smallButtonsRow}>
                                                            <TouchableOpacity style={style.smallButton} onPress={() => updateSet(ei, si, { targetReps: Math.max(1, s.targetReps - 1) })}><Text style={style.smallButtonText}>-</Text></TouchableOpacity>
                                                            <TouchableOpacity style={style.smallButton} onPress={() => updateSet(ei, si, { targetReps: s.targetReps + 1 })}><Text style={style.smallButtonText}>+</Text></TouchableOpacity>
                                                        </View>
                                                    </View>
                                                    <View style={style.controlRow}>
                                                        <Text style={style.controlText}>Descanso: {s.restTime}s</Text>
                                                        <View style={style.smallButtonsRow}>
                                                            <TouchableOpacity style={style.smallButton} onPress={() => updateSet(ei, si, { restTime: Math.max(0, s.restTime - 5) })}><Text style={style.smallButtonText}>-</Text></TouchableOpacity>
                                                            <TouchableOpacity style={style.smallButton} onPress={() => updateSet(ei, si, { restTime: s.restTime + 5 })}><Text style={style.smallButtonText}>+</Text></TouchableOpacity>
                                                        </View>
                                                    </View>
                                                </View>
                                            ))}
                                        </View>
                                        <View style={style.editActionsRow}>
                                            <TouchableOpacity style={style.secondaryButton} onPress={() => addSet(ei)}>
                                                <Text style={style.secondaryButtonText}>Adicionar Série</Text>
                                            </TouchableOpacity>
                                            <TouchableOpacity style={style.deleteButton} onPress={() => removeSet(ei)}>
                                                <Text style={style.deleteButtonText}>Remover Série</Text>
                                            </TouchableOpacity>
                                        </View>
                                    </View>
                                ))}
                                <TouchableOpacity style={style.cancelButton} onPress={cancelEdit}>
                                    <Text style={style.cancelButtonText}>Cancelar</Text>
                                </TouchableOpacity>
                            </View>
                        )}
                    </View>
                ))}
            </ScrollView>
        </View>
    )
}

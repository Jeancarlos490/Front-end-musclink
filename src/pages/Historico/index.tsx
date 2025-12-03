import { Text, View, ScrollView, TouchableOpacity } from 'react-native';
import { style } from './style';
import { temas } from '../../global/temas';
import { useEffect, useState } from 'react';

export default function Historico() {
    const [logs, setLogs] = useState<any[]>([]);

    const format = (seconds: number) => {
        const m = Math.floor(seconds / 60);
        const s = seconds % 60;
        return `${String(m).padStart(2,'0')}:${String(s).padStart(2,'0')}`;
    };

    const reload = () => {
        try {
            const keyLogs = 'musclink.workoutLogs';
            const canUseLocal = typeof window !== 'undefined' && (window as any).localStorage;
            if (canUseLocal) {
                const raw = (window as any).localStorage.getItem(keyLogs);
                const arr = raw ? JSON.parse(raw) : [];
                setLogs(arr);
            }
        } catch {}
    };

    useEffect(() => {
        reload();
    }, []);

    const clearAll = () => {
        try {
            const keyLogs = 'musclink.workoutLogs';
            const canUseLocal = typeof window !== 'undefined' && (window as any).localStorage;
            if (canUseLocal) {
                (window as any).localStorage.removeItem(keyLogs);
                setLogs([]);
            }
        } catch {}
    };

    const deleteOne = (id: string) => {
        try {
            const keyLogs = 'musclink.workoutLogs';
            const canUseLocal = typeof window !== 'undefined' && (window as any).localStorage;
            if (canUseLocal) {
                const updated = logs.filter(l => l.id !== id);
                (window as any).localStorage.setItem(keyLogs, JSON.stringify(updated));
                setLogs(updated);
            }
        } catch {}
    };

    return (
        <View style={style.container}>
            <ScrollView>
                <Text style={style.Titletext}>
                    Historico de
                    <Text style={{ color: temas.colors.laranja }}> Treinos
                    </Text>
                </Text>
                <TouchableOpacity style={style.clearButton} onPress={clearAll}>
                    <Text style={style.clearButtonText}>Limpar Histórico</Text>
                </TouchableOpacity>

                {logs.length === 0 && (
                    <View style={style.TrainingHistory}>
                        <Text style={style.PreviewHistoryText}>Nenhum treino concluído</Text>
                        <Text style={style.TimerHistory}>--:--</Text>
                    </View>
                )}
                {logs.map(log => (
                    <View key={log.id} style={style.TrainingHistory}>
                        <Text style={style.PreviewHistoryText}>Treino:
                            <Text style={{ color: temas.colors.laranja }}> {log.workoutName}</Text>
                        </Text>
                        <Text style={style.TimerHistory}>{format(log.duration || 0)}</Text>
                        <TouchableOpacity style={style.deleteButton} onPress={() => deleteOne(log.id)}>
                            <Text style={style.deleteButtonText}>Excluir</Text>
                        </TouchableOpacity>
                    </View>
                ))}
            </ScrollView>
        </View>
    )
}

import { Text, View, TouchableOpacity, ScrollView } from 'react-native';
import { style } from './style';
import { Cronometro } from '../../hooks/Cronometro';
import { useState } from 'react';

export default function Timer() {
    const { formatarTempo, tempo, resetar, isRunning, iniciarPausar} = Cronometro();
    const [temposSalvos, setTemposSalvos] = useState<number[]>([]);

    const handleSalvar = () => {
        setTemposSalvos([...temposSalvos, tempo]);
        resetar();
    };

    return (
        <View style={style.container}>
            <ScrollView contentContainerStyle={style.scrollContent}>
                <View style={style.Boxtop}>
                    <View style={style.textblocktitle}>
                        <Text style={style.TitleText}>
                            Timer de Treino
                        </Text>
                    </View>
                    <View style={style.textblocktimer}>
                        <Text style={style.TimerText}>
                            {formatarTempo(tempo)}
                        </Text>
                    </View>
                </View>
                <View style={style.boxbottom}>
                    <TouchableOpacity onPress={iniciarPausar}>
                        <Text style={style.StartButton}>
                            {isRunning ? 'Pausar' : tempo > 0 ? 'Continuar' : 'Iniciar'}
                        </Text>
                    </TouchableOpacity>

                    {tempo > 0 && (
                        <TouchableOpacity onPress={handleSalvar} style={{ marginTop: 15 }}>
                            <Text style={style.ResetButton}>
                                Salvar Tempo
                            </Text>
                        </TouchableOpacity>
                    )}
                </View>
                {temposSalvos.length > 0 && (
                    <View style={style.temposSalvosContainer}>
                        <Text style={style.temposSalvosTitle}>Tempos Salvos</Text>
                        {temposSalvos.map((t, index) => (
                            <View key={index} style={style.tempoSalvoCard}>
                                <Text style={style.tempoSalvoText}>{formatarTempo(t)}</Text>
                            </View>
                        ))}
                    </View>
                )}
            </ScrollView>
        </View>
    )
}

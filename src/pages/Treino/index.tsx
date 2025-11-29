import React, { useState, useRef, useEffect } from 'react';
import { Text, View, TextInput, TouchableOpacity, Image } from 'react-native';
import { style } from './style';

export default function Treino() {
    const [tempo, setTempo] = useState(0); // tempo em segundos
    const [isRunning, setIsRunning] = useState(false);
    const intervalRef = useRef<NodeJS.Timeout | null>(null);

    useEffect(() => {
        if (isRunning) {
            intervalRef.current = setInterval(() => {
                setTempo(prev => prev + 1);
            }, 1000);
        } else {
            if (intervalRef.current) {
                clearInterval(intervalRef.current);
                intervalRef.current = null;
            }
        }
        return () => {
            if (intervalRef.current) {
                clearInterval(intervalRef.current);
            }
        };
    }, [isRunning]);

    const formatarTempo = (totalSegundos: number): string => {
        const horas = Math.floor(totalSegundos / 3600);
        const minutos = Math.floor((totalSegundos % 3600) / 60);
        const segundos = totalSegundos % 60;

        return [horas, minutos, segundos]
            .map(val => val.toString().padStart(2, '0'))
            .join(':');
    };

    const iniciarPausar = () => {
        setIsRunning(!isRunning);
    };

    const resetar = () => {
        setIsRunning(false);
        setTempo(0);
    };

    return (
        <View style={style.container}>
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
                        {isRunning ? 'Pausar' : tempo > 0 ? 'Continuar' : 'Iniciar Contagem'}
                    </Text>
                </TouchableOpacity>
                
                {tempo > 0 && (
                    <TouchableOpacity onPress={resetar} style={{ marginTop: 15 }}>
                        <Text style={[style.StartButton, { backgroundColor: '#dc3545' }]}>
                            Resetar
                        </Text>
                    </TouchableOpacity>
                )}
            </View>
        </View>
    )
}
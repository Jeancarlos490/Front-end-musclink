import React from 'react';
import { Text, View, TextInput, TouchableOpacity, Image } from 'react-native';
import { style } from './style';

export default function Treino() {
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
                        00:00:00
                    </Text>
                </View>
            </View>
            <View style={style.boxbottom}>
                <TouchableOpacity>
                    <Text style={style.StartButton}>
                        Iniciar Contagem
                    </Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}
import React from 'react';
import { Text, View, TextInput} from 'react-native';
import { style } from './style';
import { temas } from '../../global/temas';

export default function Login() {
    return (
        <View style={style.container}>
            <View style={style.boxtop}>
                <Text>topo</Text>
            </View>
            <View style={style.boxmid}>
                <TextInput style={style.textinput}
                 placeholder='Digite o seu Nome completo'
                 placeholderTextColor={temas.colors.cinzatransparente}>
                </TextInput>
                <TextInput style={style.textinput}
                 placeholder='Digite o seu Email'
                 placeholderTextColor={temas.colors.cinzatransparente}>
                </TextInput>
                <TextInput style={style.textinput}
                 placeholder='Crie uma senha forte'
                 placeholderTextColor={temas.colors.cinzatransparente}>
                </TextInput>
                <TextInput style={style.textinput}
                 placeholder='Confirme a sua senha' 
                 placeholderTextColor={temas.colors.cinzatransparente}>
                </TextInput>
            </View>
            <View style={style.boxbottom}>
                <Text>baixo</Text>
            </View>
        </View>
    )
}

import React from 'react';
import { Text, View, TextInput, TouchableOpacity, Image } from 'react-native';
import { style } from './style';
import { useNavigation, NavigationProp } from '@react-navigation/native';
import { temas } from '../../global/temas';

export default function Perfil() {
    return (
        <View style={style.container}>
            <View style={style.boxtop}>
                <Text>Perfil</Text>
            </View>
            <View style={style.boxbottom}></View>
        </View>
    )
}
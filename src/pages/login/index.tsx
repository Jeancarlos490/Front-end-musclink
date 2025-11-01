import React from 'react';
import { Text, View, Image, TextInput } from 'react-native';
import { style } from './ContainerStyles';
import { textstyle } from './TextStyles';
import Logo from '../../assets/Logo.png'

export default function Login(){
    return(
        <View style={style.container}>
            <View style={style.boxtop}>
                <Image 
                source={Logo}
                style={style.logo}/>
                <Text style={textstyle.h1}>Bem vindo!</Text>
            </View>
            <View style={style.boxmid}>
                <Text style={textstyle.h2}>E-Mail</Text>
                <TextInput style={style.input}/>
                <Text style={textstyle.h2}>Senha</Text>
                <TextInput style={style.input}/>
            </View>
            <View style={style.boxbottom}>
                <Text>bottom</Text>
            </View>
        </View>
    )
}

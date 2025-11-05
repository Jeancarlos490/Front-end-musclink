import React from 'react';
import { Text, View, TextInput, TouchableOpacity } from 'react-native';
import { style } from './style';
import { temas } from '../../global/temas';

export default function Login() {
    return (
        <View //titulo da pagina
            style={style.container}>
            <View style={style.boxtop}>
                <Text style={style.title1}>Musculink</Text>
                <Text style={style.title2}>Crie sua conta</Text>
            </View>
            <View //preenchimento do cadastro
                style={style.boxmid}>
                <Text style={style.phrasetop}>Nome Completo</Text>
                <TextInput style={style.textinput}
                    placeholder='Digite o seu Nome completo'
                    placeholderTextColor={temas.colors.cinzatransparente}>
                </TextInput>
                <Text style={style.phrasetop}>E-mail</Text>
                <TextInput style={style.textinput}
                    placeholder='Digite o seu Email'
                    placeholderTextColor={temas.colors.cinzatransparente}>
                </TextInput>
                <Text style={style.phrasetop}>Senha</Text>
                <TextInput style={style.textinput}
                    placeholder='Crie uma senha forte'
                    placeholderTextColor={temas.colors.cinzatransparente}>
                </TextInput>
                <Text style={style.phrasetop}>Confirmar Senha</Text>
                <TextInput style={style.textinput}
                    placeholder='Confirme a sua senha'
                    placeholderTextColor={temas.colors.cinzatransparente}>
                </TextInput>
            </View>
            <View style={style.boxbottom}>
                <TouchableOpacity style={style.button}>
                    <Text style={style.GeneralText}>Cadastrar</Text>
                </TouchableOpacity>
                <Text style={[style.withAccount,]}>
                    Não tem uma conta?
                    <Text style={[style.Enter]} onPress={() => alert(
                        'Passar para pagina de login'
                    )}> Crie Aqui!
                    </Text>
                </Text>
            </View>
        </View>
    )
}

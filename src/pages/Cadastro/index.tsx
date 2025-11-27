import React from 'react';
import { Text, View, TextInput, TouchableOpacity, KeyboardAvoidingView } from 'react-native';
import { style } from './style';
import { temas } from '../../global/temas';
import { useNavigation } from '@react-navigation/native';

export default function Cadastro() {
    const navigation = useNavigation();
    return (
        <View //titulo da pagina
            style={style.container}>
            <View style={style.boxtop}>
                <Text style={style.title1}>Musculink</Text>
                <Text style={style.title2}>Crie sua conta</Text>
            </View>
            <View //preenchimento do cadastro
                style={style.boxmid}>
                <Text style={style.phrasetop} //Nome para o cadastro
                >Nome Completo</Text>
                <TextInput style={style.textinput}
                    placeholder='Digite o seu Nome completo'
                    placeholderTextColor={temas.colors.cinzaclaro}>
                </TextInput>
                <Text style={style.phrasetop} //Email para Cadastro
                >E-mail</Text>
                <TextInput style={style.textinput}
                    placeholder='Digite o seu Email'
                    placeholderTextColor={temas.colors.cinzaclaro}>
                </TextInput>
                <Text style={style.phrasetop} //Senha para Cadastro
                >Senha</Text>
                <TextInput
                    autoCapitalize='none'
                    secureTextEntry={true}
                    style={style.textinput}
                    placeholder='Crie uma senha forte'
                    placeholderTextColor={temas.colors.cinzaclaro}>
                </TextInput>
                <Text style={style.phrasetop} //Confirmação de Senha
                >Confirmar Senha</Text>
                <TextInput
                    autoCapitalize='none'
                    secureTextEntry={true}
                    style={style.textinput}
                    placeholder='Confirme a sua senha'
                    placeholderTextColor={temas.colors.cinzaclaro}>
                </TextInput>
            </View>
            <View style={style.boxbottom}>
                <TouchableOpacity style={style.button}>
                    <Text style={style.GeneralText}>Cadastrar</Text>
                </TouchableOpacity>
                <Text style={style.withAccount}>
                    Já tem uma conta?
                    <TouchableOpacity //Leva para a tela de Login
                        onPress={() => navigation.goBack()}>
                        <Text style={[style.withAccount, style.Enter]}> Faça o login aqui!
                        </Text>
                    </TouchableOpacity>
                </Text>
            </View>
        </View>
    )
}

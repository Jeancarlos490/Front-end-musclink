import React from 'react';
import { Text, View, Image, TextInput, TouchableOpacity } from 'react-native';
import { style } from './style';
import Logo from '../../assets/Logo.png'
import { temas } from '../../global/temas';
import { useNavigation, NavigationProp } from '@react-navigation/native';

export default function Login() {
    const navigation = useNavigation<NavigationProp<any>>();
    return (
        <View style={style.container}>
            <View style={style.boxtop}>
                <Image
                    source={Logo}
                    style={style.logo} />
                <Text style={style.title}>Bem vindo!</Text>
            </View>
            <View style={style.boxmid}>
                <Text style={style.pharsetop}>E-Mail</Text>
                <TextInput //Local do Email
                    style={[style.input]}
                    placeholder='Digite o seu E-mail'
                    placeholderTextColor={
                        temas.colors.cordotexto} />
                <Text style={style.pharsetop}>Senha</Text>
                <TextInput //Local da Senha
                    style={[style.input]}
                    placeholder='Digite a sua senha'
                    placeholderTextColor={
                        temas.colors.cordotexto} />
                <TouchableOpacity>
                    <Text style={
                        style.forgottenpassword}>Esqueceu a senha?</Text>
                </TouchableOpacity>
            </View>
            <View style={style.boxbottom}>
                <TouchableOpacity style={style.button}>
                    <Text style={style.buttontext}>Entrar</Text>
                </TouchableOpacity>
                <Text style={style.noAccount}>
                    Não tem uma conta?
                    <TouchableOpacity //Leva para a tela de Cadastro
                     onPress={() => navigation.navigate("Cadastro" as never)}>
                        <Text style={[style.noAccount, style.create]}> Crie Aqui!
                        </Text>
                    </TouchableOpacity>
                </Text>
            </View>
        </View>
    )
}

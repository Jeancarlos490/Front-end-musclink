import React, { useState } from 'react';
import { Text, View, TextInput, TouchableOpacity, Alert } from 'react-native';
import { style } from './style';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import { temas } from '../../global/temas';
import { useNavigation, NavigationProp, StackActions } from '@react-navigation/native';

export default function Login() {
    const navigation = useNavigation<NavigationProp<any>>();

    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');

    function Logincheck() {
        if (!email || !senha) {
            Alert.alert('Erro', 'Preencha todos os campos.');
            return; //Inpede o login caso a senha ou email estejam errados
        }

        navigation.dispatch(StackActions.replace('Homescreen'))
    }
    return (
        <View style={style.container}>
            <View style={style.boxtop}>
                <MaterialCommunityIcons
                    style={style.Icon}
                    name="dumbbell"
                    size={60}
                    color={temas.colors.laranja} />
                <Text style={style.title}>Bem vindo!</Text>
            </View>
            <View style={style.boxmid}>
                <Text style={style.pharsetop}>E-Mail</Text>
                <TextInput //Local do Email
                    value={email}
                    onChangeText={setEmail}
                    style={[style.input]}
                    placeholder='Digite o seu E-mail'
                    placeholderTextColor={temas.colors.cordotexto} />
                <Text style={style.pharsetop}>Senha</Text>
                <TextInput //Local da Senha
                    value={senha}
                    onChangeText={setSenha}
                    autoCapitalize='none'
                    secureTextEntry={true}
                    style={[style.input]}
                    placeholder='Digite a sua senha'
                    placeholderTextColor={
                        temas.colors.cordotexto} />
                <TouchableOpacity //Leva para a tela de recuperação de senha
                    onPress={() => navigation.navigate("Recuperacao" as never)}>
                    <Text style={
                        style.forgottenpassword}>Esqueceu a senha?</Text>
                </TouchableOpacity>
            </View>
            <View style={style.boxbottom}>
                <TouchableOpacity
                    style={style.button}
                    onPress={Logincheck}>
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

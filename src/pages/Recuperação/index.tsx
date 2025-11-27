import React from 'react';
import { Text, View, TextInput, TouchableOpacity } from 'react-native';
import { style } from './style';
import { temas } from '../../global/temas';
import { useNavigation, NavigationProp } from '@react-navigation/native';
import FontAwesome from '@expo/vector-icons/FontAwesome';

export default function Recuperacao() {
    const navigation = useNavigation<NavigationProp<any>>();
    return (
        <View style={style.container}>
            <View style={style.boxtop}>
                <FontAwesome
                    style={style.icon}
                    name="lock"
                    size={90}
                    color={temas.colors.laranja} />
                <Text
                    style={style.headertext}>Esqueceu sua senha?
                </Text>
            </View>
            <View style={style.boxmid}>
                <Text style={style.text}>Sem problemas. Digite seu E-mail abaixo e enviaremos um link para você criar uma nova senha
                </Text>
                <Text style={style.pharsetop}>E-Mail</Text>
                <TextInput
                    style={[style.input, {fontSize:14}]}
                    placeholder='Digite o seu E-mail'
                    placeholderTextColor={temas.colors.cordotexto} />
                <TouchableOpacity style={style.button}>
                    <Text style={style.buttontext}>Enviar link de recuperação</Text>
                </TouchableOpacity>
                <Text style={style.back}>Voltar para a pagina de
                    <TouchableOpacity
                        onPress={() => navigation.goBack()}>
                        <Text style={[style.loginback]}> Login</Text>
                    </TouchableOpacity>
                </Text>
            </View>
        </View>
    )
}

import React from 'react';
import { Text, View, Image, TextInput, TouchableOpacity} from 'react-native';
import { style } from './ContainerStyles';
import { textstyle } from './TextStyles';
import Logo from '../../assets/Logo.png'
import { temas } from '../../global/temas';

export default function Login() {
    return (
        <View style={style.container}>
            <View style={style.boxtop}>
                <Image
                    source={Logo}
                    style={style.logo} />
                <Text style={textstyle.h1}>Bem vindo!</Text>
            </View>
            <View style={style.boxmid}>
                <Text style={textstyle.h2}>E-Mail</Text>
                <TextInput
                    style={[style.input, textstyle.h4]}
                    placeholder='Digite o seu E-mail'
                    placeholderTextColor={
                        temas.colors.cordotexto} />
                <Text style={textstyle.h2}>Senha</Text>
                <TextInput
                    style={[style.input, textstyle.h4]}
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
                    <Text style={textstyle.h3}>Entrar</Text>
                </TouchableOpacity>
                <Text style={[style.noAccount,]}>
                    Não tem uma conta?
                    <Text style={[
                        style.noAccount, textstyle.h5
                        ]} onPress={() => alert(
                            'Passar para pagina de criação de conta'
                            )}> Crie Aqui!
                    </Text>
                </Text>
            </View>
        </View>
    )
}

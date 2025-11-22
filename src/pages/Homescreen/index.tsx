import React from 'react';
import { Text, View, Image, TextInput, TouchableOpacity } from 'react-native';
import { style } from './style';
import { temas } from '../../global/temas';

export default function Homescreen() {
    return (
        <View style={style.container}>
            <View style={style.boxtop}>
                <TextInput //Local do Email
                    style={[style.input]}
                    placeholder='Pesquisar perfil'
                    placeholderTextColor={temas.colors.cordotexto} />
                <Text
                    style={style.title}>
                    Veja algumas pessoas que você talvez conheça
                </Text>
            </View>
            <View style={style.boxmid}>
                <View style={style.boxbottom}>
                    <View style={style.personstab}>
                        <TouchableOpacity style={{ width: "75%", height: "75%", alignSelf: 'center' }}>
                            <Image source={require("../../assets/escamoso.png")} style={style.profilepicture} />
                        </TouchableOpacity>
                        <Text style={style.profileText}>Escamoso</Text>
                        <Text style={style.profiletypename}>Aluno</Text>
                    </View>
                    <View style={style.personstab}>
                        <TouchableOpacity style={{ width: "75%", height: "75%", alignSelf: 'center' }}>
                            <Image source={require("../../assets/evilyn.png")} style={style.profilepicture} />
                        </TouchableOpacity>
                        <Text style={style.profileText}>Evillyn</Text>
                        <Text style={style.profiletypename}>Personal</Text>
                    </View>
                    <View style={style.personstab}>
                        <TouchableOpacity style={{ width: "75%", height: "75%", alignSelf: 'center' }}>
                            <Image source={require("../../assets/simiano.png")} style={style.profilepicture} />
                        </TouchableOpacity>
                        <Text style={style.profileText}>Simiano</Text>
                        <Text style={style.profiletypename}>Personal</Text>
                    </View>
                    <View style={style.personstab}>
                        <TouchableOpacity style={{ width: "75%", height: "75%", alignSelf: 'center' }}>
                            <Image source={require("../../assets/esqueleto.png")} style={style.profilepicture} />
                        </TouchableOpacity>
                        <Text style={style.profileText}>Esqueleto</Text>
                        <Text style={style.profiletypename}>Aluno</Text>
                    </View>
                </View>
            </View>
        </View>
    )
}
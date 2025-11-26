import React from 'react';
import { Text, View, Image, TextInput, TouchableOpacity } from 'react-native';
import { style } from './style';
import { temas } from '../../global/temas';
import { NavigationProp, useNavigation } from '@react-navigation/native';

export default function Homescreen() {
    const navigation = useNavigation<NavigationProp<any>>();

    return (
        <View style={style.container}>
            <View style={style.boxtop}>
                <TextInput
                    style={[style.input]}
                    placeholder='Pesquisar perfil'
                    placeholderTextColor={temas.colors.cordotexto}
                     />
                <Text
                    style={style.title}>
                    Veja algumas pessoas que você talvez conheça
                </Text>
            </View>
            <View style={style.boxmid}>
                <View style={style.boxbottom}>
                    <View style={style.personstab}>
                        <TouchableOpacity style={{ width: "75%", height: "75%", alignSelf: 'center' }}
                            onPress={() => navigation.navigate("Escamoso" as never)}>
                            <Image source={require("../../assets/escamoso.png")} style={style.profilepicture} />
                        </TouchableOpacity>
                        <Text style={style.profileText}>Escamoso</Text>
                        <Text style={style.profiletypename}>Aluno</Text>
                    </View>
                    <View style={style.personstab}>
                        <TouchableOpacity style={{ width: "75%", height: "75%", alignSelf: 'center' }}
                            onPress={() => navigation.navigate("EvilLyn" as never)}>
                            <Image source={require("../../assets/evilyn.png")} style={style.profilepicture} />
                        </TouchableOpacity>
                        <Text style={style.profileText}>Evillyn</Text>
                        <Text style={style.profiletypename}>Personal</Text>
                    </View>
                    <View style={style.personstab}>
                        <TouchableOpacity style={{ width: "75%", height: "75%", alignSelf: 'center' }}
                            onPress={() => navigation.navigate("Simiano" as never)}>
                            <Image source={require("../../assets/simiano.png")} style={style.profilepicture} />
                        </TouchableOpacity>
                        <Text style={style.profileText}>Simiano</Text>
                        <Text style={style.profiletypename}>Personal</Text>
                    </View>
                    <View style={style.personstab}>
                        <TouchableOpacity style={{ width: "75%", height: "75%", alignSelf: 'center' }}
                            onPress={() => navigation.navigate("Esqueleto" as never)}>
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
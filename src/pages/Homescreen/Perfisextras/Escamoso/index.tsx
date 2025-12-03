import React from 'react';
import { Text, View, Image, TouchableOpacity } from 'react-native';
import { style } from './style';
import Ionicons from '@expo/vector-icons/Ionicons';
import { temas } from '../../../../global/temas';
import { useNavigation } from '@react-navigation/native';

export default function Escamoso() {

    const navigation = useNavigation();

    return (
        <View style={style.container}>
            <View style={style.boxtop}>
                <TouchableOpacity>
                    <Ionicons name="arrow-back"
                        size={50}
                        color={temas.colors.laranja}
                        onPress={navigation.goBack} />
                </TouchableOpacity>
                <View style={style.profileframe}>
                    <Image source={require("../../../../assets/escamoso.png")} style={style.profilepicture} />
                    <Text style={style.profileText}>Escamoso</Text>
                    <Text style={style.profiletypename}>Aluno</Text>
                </View>
            </View>
            <View style={style.boxbottom}>
                <Text style={style.Aboutme}>
                    Sobre mim:
                </Text>
                <View style={style.AreaAboutme}>
                    <Text style={style.AboutmeTextArea}>
                        Eu sou Escamoso! Vim treinar para aumentar minha força e dominar qualquer desafio.
                        Não aceito fraqueza perto de mim! Quero poder, músculos e respeito.
                        E vou conquistar tudo isso… custe o que custar!
                    </Text>
                </View>
                <View style={style.StatisticsArea}>
                    <View style={style.StastiticsFrame}>
                        <Text style={style.StatisticsInfoNumber}>
                            190
                        </Text>
                        <Text style={style.StatisticsInfoText}>
                            Dias Treinados
                        </Text>
                    </View>
                    <View style={style.StastiticsFrame}>
                        <Text style={style.StatisticsInfoNumber}>
                            20
                        </Text>
                        <Text style={style.StatisticsInfoText}>
                            Sequencia de Dias Treinados
                        </Text>
                    </View>
                    <View style={[style.StastiticsFrame, { width: 360 }]}>
                        <Text style={style.StatisticsInfoNumber}>
                            920
                        </Text>
                        <Text style={style.StatisticsInfoText}>
                            Média de exercicios total
                        </Text>
                    </View>
                </View>
            </View>
        </View>
    )
}
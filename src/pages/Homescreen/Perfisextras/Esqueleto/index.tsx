import React from 'react';
import { Text, View, Image, TouchableOpacity } from 'react-native';
import { style } from './style';
import Ionicons from '@expo/vector-icons/Ionicons';
import { temas } from '../../../../global/temas';
import { useNavigation } from '@react-navigation/native';

export default function Esqueleto() {

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
                    <Image source={require("../../../../assets/esqueleto.png")} style={style.profilepicture} />
                    <Text style={style.profileText}>Esqueleto</Text>
                    <Text style={style.profiletypename}>Aluno</Text>
                </View>
            </View>
            <View style={style.boxbottom}>
                <Text style={style.Aboutme}>
                    Sobre mim:
                </Text>
                <View style={style.AreaAboutme}>
                    <Text style={style.AboutmeTextArea}>
                        EU, o grande ESQUELETO, treino para dominar Eternia com músculos implacáveis!
                        Prepare-se para ver minha verdadeira força, seu tolo!
                        Nada impedirá meu progresso na academia!
                    </Text>
                </View>
                <View style={style.StatisticsArea}>
                    <View style={style.StastiticsFrame}>
                        <Text style={style.StatisticsInfoNumber}>
                            410
                        </Text>
                        <Text style={style.StatisticsInfoText}>
                            Dias Treinados
                        </Text>
                    </View>
                    <View style={style.StastiticsFrame}>
                        <Text style={style.StatisticsInfoNumber}>
                            45
                        </Text>
                        <Text style={style.StatisticsInfoText}>
                            Sequencia de Dias Treinados
                        </Text>
                    </View>
                    <View style={[style.StastiticsFrame, { width: 360 }]}>
                        <Text style={style.StatisticsInfoNumber}>
                            1880
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
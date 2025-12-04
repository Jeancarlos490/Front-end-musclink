import React from 'react';
import { Text, View, Image } from 'react-native';
import { style } from './style';

export default function Perfil() {
    return (
        <View style={style.container}>
            <View style={style.boxtop}>
                <View style={style.profileframe}>
                    <Image source={require("../../assets/heman.png")} style={style.profilepicture} />
                    <Text style={style.profileText}>He-Man</Text>
                    <Text style={style.profiletypename}>Aluno</Text>
                </View>
            </View>
            <View style={style.boxbottom}>
                <Text style={style.Aboutme}>
                    Sobre mim:
                </Text>
                <View style={style.AreaAboutme}>
                    <Text style={style.AboutmeTextArea}>
                        Sou He-Man,
                        defensor de Eternia!
                        Treino com disciplina para manter minha força e coragem sempre em alta.
                        Aqui registro minha evolução para continuar digno do poder de Grayskull!
                    </Text>
                </View>
                <View style={style.StatisticsArea}>
                    <View style={style.StastiticsFrame}>
                        <Text style={style.StatisticsInfoNumber}>
                            320
                        </Text>
                        <Text style={style.StatisticsInfoText}>
                            Dias Treinados
                        </Text>
                    </View>
                    <View style={style.StastiticsFrame}>
                        <Text style={style.StatisticsInfoNumber}>
                            41
                        </Text>
                        <Text style={style.StatisticsInfoText}>
                            Sequencia de Dias Treinados
                        </Text>
                    </View>
                    <View style={[style.StastiticsFrame, { width: 360 }]}>
                        <Text style={style.StatisticsInfoNumber}>
                            1920
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
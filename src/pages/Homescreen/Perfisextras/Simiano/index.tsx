import React from 'react';
import { Text, View, Image } from 'react-native';
import { style } from './style';

export default function Simiano() {

    return (
        <View style={style.container}>
            <View style={style.boxtop}>
                <View style={style.profileframe}>
                    <Image source={require("../../../../assets/simiano.png")} style={style.profilepicture} />
                    <Text style={style.profileText}>Simiano</Text>
                    <Text style={style.profiletypename}>Personal</Text>
                </View>
            </View>
            <View style={style.boxbottom}>
                <Text style={style.Aboutme}>
                    Sobre mim:
                </Text>
                <View style={style.AreaAboutme}>
                    <Text style={style.AboutmeTextArea}>
                        Eu Simiano! Instrutor forte!
                        Treino duro, rápido, GRR! Você corre, pula, luta!
                        Nada de fraqueza aqui!
                        Siga Simiano e ficar forte… bem forte!
                    </Text>
                </View>
                <View style={style.StatisticsArea}>
                    <View style={style.StastiticsFrame}>
                        <Text style={style.StatisticsInfoNumber}>
                            1
                        </Text>
                        <Text style={style.StatisticsInfoText}>
                            Aluno atual
                        </Text>
                    </View>
                    <View style={style.StastiticsFrame}>
                        <Text style={style.StatisticsInfoNumber}>
                            12
                        </Text>
                        <Text style={style.StatisticsInfoText}>
                            Total de Alunos Sastifeitos
                        </Text>
                    </View>
                    <View style={[style.StastiticsFrame, { width: 360 }]}>
                        <Text style={style.StatisticsInfoNumber}>
                            2.1/5.0
                        </Text>
                        <Text style={style.StatisticsInfoText}>
                            Avaliações Gerais
                        </Text>
                    </View>
                </View>
            </View>
        </View>
    )
}
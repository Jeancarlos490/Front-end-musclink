import React from 'react';
import { Text, View, Image, TouchableOpacity } from 'react-native';
import { style } from './style';
import { temas } from '../../../../global/temas';
import { useNavigation } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';


export default function EvilLyn() {

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
                    <Image source={require("../../../../assets/evilyn.png")} style={style.profilepicture} />
                    <Text style={style.profileText}>EvilLyn</Text>
                    <Text style={style.profiletypename}>Personal</Text>
                </View>
            </View>
            <View style={style.boxbottom}>
                <Text style={style.Aboutme}>
                    Sobre mim:
                </Text>
                <View style={style.AreaAboutme}>
                    <Text style={style.AboutmeTextArea}>
                        Sou Evil-Lyn, sua instrutora.
                        Forjarei seu corpo e sua disciplina com magia — e intensidade.
                        Siga minhas orientações e talvez você alcance o poder que tanto deseja.
                    </Text>
                </View>
                <View style={style.StatisticsArea}>
                    <View style={style.StastiticsFrame}>
                        <Text style={style.StatisticsInfoNumber}>
                            3
                        </Text>
                        <Text style={style.StatisticsInfoText}>
                            Alunos atuais 
                        </Text>
                    </View>
                    <View style={style.StastiticsFrame}>
                        <Text style={style.StatisticsInfoNumber}>
                            21
                        </Text>
                        <Text style={style.StatisticsInfoText}>
                            Total de Alunos Sastifeitos
                        </Text>
                    </View>
                    <View style={[style.StastiticsFrame, { width: 360 }]}>
                        <Text style={style.StatisticsInfoNumber}>
                            4.3/5.0
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
import React from 'react';
import { Text, View, TextInput, TouchableOpacity, Image } from 'react-native';
import { style } from './style';
import { useNavigation, NavigationProp } from '@react-navigation/native';
import { temas } from '../../global/temas';
import { Background } from '@react-navigation/elements';

export default function Chat() {
    return (
        <View style={style.container}>
            <View style={style.boxtop}>
                <View style={style.Backgroundborder}>
                    <View style={style.ChatTabs}>
                        <View style={style.ChatIcons}>
                            <Image source={require('../../assets/lion.png')} style={style.profilepicture} />
                        </View>
                        <Text style={style.profilename}>Lion-O</Text>
                        <Text style={style.MessagePreview}>
                            Eae, o Treino vai ser onde Hoje?
                        </Text>
                    </View>
                    <View style={style.ChatTabs}>
                        <View style={style.ChatIcons}>
                            <Image source={require('../../assets/pantro.png')} style={style.profilepicture} />
                        </View>
                        <Text style={style.profilename}>Panthro</Text>
                        <Text style={style.MessagePreview}>
                            To te falando, é tudo natural
                        </Text>
                    </View>
                    <View style={style.ChatTabs}>
                        <View style={style.ChatIcons}>
                            <Image source={require('../../assets/teela.png')} style={style.profilepicture} />
                        </View>
                        <Text style={style.profilename}>Teela</Text>
                        <Text style={style.MessagePreview}>
                            Então He-Man, vai querer a ajuda nas...
                        </Text>
                    </View>
                </View>
            </View>
        </View>
    )
}
import { StyleSheet } from "react-native";
import { temas } from "../../global/temas";

//tamanhos para fontes e estilos para fontes
export const textstyle = StyleSheet.create({
    text:{
    },
    h1:{
        fontSize: 32,
        fontWeight:'bold',
        alignSelf:'center',
        marginTop:30,
        color:temas.colors.branco
    },
    h2:{
        fontSize: 24,
        marginTop:12,
        color:temas.colors.branco
    },
    h3:{
        fontSize: 21,
    },
    h4:{
        fontSize: 18,
    },
    h5:{
        fontSize: 16,
    },
    h6:{
        fontSize: 14,
    }
})
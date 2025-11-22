import { StyleSheet } from "react-native";
import { temas } from "../../global/temas";

//containers e props para estilização
export const style = StyleSheet.create({
    container: {
        flex: 1,
        alignContent: 'center',
        justifyContent: 'center',
        backgroundColor: '#181411',
    },
    boxtop: {
        height: 170,
        width: '100%',
    },
    boxmid: {
        alignSelf: 'center',
        height: 350,
        width: '95%',
        backgroundColor: temas.colors.cinza,
        paddingHorizontal: 10,
        borderRadius: 20,
    },
    boxbottom: {
        height: 175,
        width: '100%',
    },
    textinput: {
        backgroundColor: temas.colors.laranjatransparent,
        borderRadius: 10,
        paddingHorizontal: 10,
        height: 41,
        color: temas.colors.branco
    },
    phrasetop: {
        marginTop: 25,
        color: temas.colors.branco,
        fontWeight: '500'
    },
    title1: {
        alignSelf: "center",
        marginTop: 30,
        fontSize: 39,
        fontWeight: 'bold',
        color: temas.colors.laranja
    },
    title2: {
        alignSelf: "center",
        marginTop: 30,
        fontSize: 39,
        fontWeight: 'bold',
        color: temas.colors.branco
    },
    button: {
        height: '33%',
        backgroundColor: temas.colors.laranja,
        width: 350,
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'center',
        borderRadius: 12,
        marginTop: 40,
        textAlign: 'center',
    },
    GeneralText: {
        fontWeight: 'bold',
        fontSize: 29,
        color: temas.colors.branco
    },
    withAccount: {
        color: temas.colors.cordotexto,
        textAlign: 'center',
        fontSize: 16,
        marginTop: 10,
    },
    Enter: {
        fontSize: 16,
        color: temas.colors.laranja,
    },
})
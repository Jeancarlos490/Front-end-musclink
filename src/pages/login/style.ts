import { StyleSheet } from "react-native";
import { temas } from "../../global/temas";

//containers a serem preenchidos
export const style = StyleSheet.create({
    container: {
        flex: 1,
        alignContent: 'center',
        justifyContent: 'center',
        backgroundColor: '#181411',
    },
    boxtop: {
        height: 200,
        width: '100%',
    },
    boxmid: {
        alignSelf: 'center',
        height: 225,
        width: '90%',
        backgroundColor: temas.colors.cinza,
        paddingHorizontal: 25,
        paddingVertical: 25,
        borderRadius: 20
    },
    boxbottom: {
        height: 200,
        width: '100%',
    },
    Icon: {
        alignSelf: 'center',
        marginTop:30,
        fontSize:80
    },
    input: {
        borderRadius: 12,
        backgroundColor: temas.colors.laranjatransparent,
        alignContent: 'center',
        height: 41,
        fontSize: 14,
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
    buttontext: {
        fontWeight: 'bold',
        fontSize: 29,
        color: temas.colors.branco
    },
    forgottenpassword: {
        color: temas.colors.cordotexto,
        textAlign: 'right',
        fontSize: 16,
        marginTop: 15,
    },
    noAccount: {
        color: temas.colors.cordotexto,
        textAlign: 'center',
        fontSize: 16,
        marginTop: 10,
    },
    create: {
        color: temas.colors.laranja,
        fontSize: 16,
    },
    pharsetop: {
        marginTop: 10,
        color: temas.colors.branco,
        fontWeight: '500',
        fontSize: 20
    },
    title: {
        fontSize: 32,
        fontWeight: 'bold',
        alignSelf: 'center',
        marginTop: 30,
        color: temas.colors.branco
    },
})
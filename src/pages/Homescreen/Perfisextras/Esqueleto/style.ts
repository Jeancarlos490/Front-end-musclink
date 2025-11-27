import { StyleSheet } from "react-native";
import { temas } from "../../../../global/temas";

//containers a serem preenchidos
export const style = StyleSheet.create({
    container: {
        flex: 1,
        alignContent: 'center',
        justifyContent: 'center',
        backgroundColor: '#181411',
    },
    boxtop: {
        height: 300,
    },
    boxmid: {
        height: 380,
        backgroundColor: temas.colors.cinzaclaro,
        marginHorizontal: 15,
        marginTop: 5,
        borderRadius: 20,
    },
    boxbottom: {
        height: 400,
        backgroundColor: temas.colors.cinza,
        borderRadius:20,
        marginHorizontal:10
    },
    profileframe: {
        height: 170,
        width: 170,
        backgroundColor: temas.colors.cinza,
        borderRadius: 20,
        alignSelf: 'center',
    },
    profilepicture: {
        width: 150,
        height: 150,
        alignSelf: 'center',
        marginTop: 10,
        borderRadius: 100,
    },
    profileText: {
        alignSelf: 'center',
        color: temas.colors.branco,
        fontWeight: 'bold',
        fontSize: 32,
        marginTop: 20
    },
    profiletypename: {
        color: temas.colors.laranja,
        fontSize: 24,
        textAlign: 'center',
        fontWeight: 'bold',
    },
    Aboutme: {
        fontSize: 24,
        marginTop: 10,
        color: temas.colors.laranja,
        fontWeight: 'bold',
        marginHorizontal: 22
    },
    AreaAboutme: {
        backgroundColor: temas.colors.laranjaescuro,
        width: 375,
        height: 70,
        alignSelf: 'center',
        borderRadius: 20
    },
    AboutmeTextArea: {
        color: temas.colors.branco,
        fontWeight: 'bold',
        marginLeft: 10,
        marginTop: 10,
    },
    StatisticsArea: {
        width: 390,
        height: 200,
        marginTop: 20,
        justifyContent: 'space-evenly',
        flexDirection: 'row',
        flexWrap: 'wrap'
    },
    StastiticsFrame: {
        backgroundColor: temas.colors.laranjaescuro,
        width: 175,
        height: 100,
        borderRadius: 20,
        marginBottom:10
    },
    StatisticsInfoNumber: {
        fontSize: 30,
        fontWeight: 'bold',
        color: temas.colors.laranja,
        marginLeft: 10,
        marginTop: 5
    },
    StatisticsInfoText: {
        fontSize: 18,
        fontWeight: 'bold',
        color: temas.colors.branco,
        marginLeft: 10,
        marginTop: 10
    },
})
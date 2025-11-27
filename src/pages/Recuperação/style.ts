import { StyleSheet } from "react-native";
import { temas } from "../../global/temas";

//containers a serem preenchidos
export const style = StyleSheet.create({
    container: {
        flex: 1,
        alignContent: 'center',
        justifyContent: 'center',
        backgroundColor: temas.colors.preto,
    },
    boxtop:{
        height: 210,
        width: '100%',
        alignItems:'center'
    },
    boxmid:{
        height: 400,
        width: '100%',
        alignSelf:'center',
        paddingHorizontal:10
    },
    icon:{
        alignSelf:'center',
        paddingTop:70
    },
    headertext:{
        fontSize:40,
        color: temas.colors.branco,
        fontWeight:'700'
    },
    text:{
        fontSize:25,
        color: temas.colors.cinzaclaro,
        textAlign:'center'
    },
    input:{
        backgroundColor: temas.colors.laranjatransparent,
        alignContent:'center',
        height:50,
        borderRadius:12,
        width:380,
        alignSelf:'center'
    },
    pharsetop:{
        marginTop:50,
        color: temas.colors.branco,
        fontSize: 21,
        paddingHorizontal:10
    },
    button:{
        marginTop:40,
        alignSelf: 'center',
        backgroundColor: temas.colors.laranja,
        width:380,
        height: 70,
        justifyContent:'center',
        alignItems:'center',
        borderRadius:12
    },
    buttontext:{
        fontSize:23,
        fontWeight:'bold',
        color:temas.colors.branco
    },
    back:{
        textAlign:'center',
        marginTop:70,
        fontSize: 16,
        color:temas.colors.cinzaclaro
    },
    loginback:{
        color: temas.colors.laranja,
        fontSize: 16
    },
})
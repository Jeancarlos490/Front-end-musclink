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
        height: '80%',
        alignItems: 'center'
    },
    ChatTabs: {
        height: 100,
        width: 350,
        backgroundColor: temas.colors.laranjatransparent,
        marginTop: 20,
        borderRadius: 20,
        marginBottom:10,
        flexWrap:'wrap',
        justifyContent:'flex-start'
    },
    ChatIcons: {
        height: 70,
        width: 70,
        marginTop: 15,
        marginLeft: 20
    },
    profilepicture: {
        width: 70,
        height: 70,
        alignSelf: 'center',
        borderRadius: 100,
    },
    Backgroundborder: {
        backgroundColor: temas.colors.cinza,
        width: 380,
        height: 700,
        alignItems: 'center',
        borderRadius:20,
    },
    profilename:{
        color:temas.colors.laranja,
        marginTop:20,
        marginLeft:20,
        fontWeight:'bold',
        fontSize:24
    },
    MessagePreview:{
        marginLeft:20,
        marginTop:10,
        color:temas.colors.cordotexto,
    }
})
import { StyleSheet } from "react-native";
import { temas } from "../../global/temas";

//containers a serem preenchidos
export const style = StyleSheet.create({
    container:{
        flex:1,
        alignContent:'center',
        justifyContent:'center',
    },
    boxtop:{
        height:170,
        width:'100%',
        backgroundColor:'red',
    },
    boxmid:{
        height:350,
        width:'100%',
        backgroundColor:'green',
    },
    boxbottom:{
        height:175,
        width:'100%',
        backgroundColor:'yellow',
    },
    textinput:{
        backgroundColor:temas.colors.azulescuro,
        marginTop:40,
        marginHorizontal:20,
        borderRadius:10       
    }
})
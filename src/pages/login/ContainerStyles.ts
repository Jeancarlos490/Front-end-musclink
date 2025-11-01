import { StyleSheet } from "react-native";
import { temas } from "../../global/temas";

//containers a serem preenchidos
export const style = StyleSheet.create({
    container:{
        flex:1,
        alignContent:'center',
        justifyContent:'center',
        backgroundColor:'#181411',
    },
    boxtop:{
        height:200,
        width:'100%',
        //backgroundColor:'red',
    },
    boxmid:{
        height:287,
        width:'100%',
        backgroundColor:temas.colors.cinza,
        paddingHorizontal:21,
        paddingVertical:50
    },
    boxbottom:{
        height:200,
        width:'100%',
        backgroundColor:'green'
    },
    logo: {
        display: 'flex',
        width:120,
        height:120,
        resizeMode: 'contain',
        alignSelf: 'center'
    },
    input:{
        backgroundColor:temas.colors.laranjatransparent,
        alignContent:'center',
    }
})
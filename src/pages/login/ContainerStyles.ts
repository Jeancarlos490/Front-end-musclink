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
        alignSelf: 'center',
        height:225,
        width:'90%',
        backgroundColor:temas.colors.cinza,
        paddingHorizontal:25,
        paddingVertical:25,
        borderRadius: 20
    },
    boxbottom:{
        height:200,
        width:'100%',
        //backgroundColor:'red'
    },
    logo: {
        display: 'flex',
        width:120,
        height:120,
        resizeMode: 'contain',
        alignSelf: 'center',
        borderRadius:5
    },
    input:{
        borderRadius: 12,
        backgroundColor:temas.colors.laranjatransparent,
        alignContent:'center',
    },
    button:{
        height:'33%',
        backgroundColor:temas.colors.laranja,
        width:350,
        justifyContent:'center',
        alignItems:'center',
        alignSelf:'center',
        borderRadius:12,
        marginTop:40,
        textAlign:'center'
    },
    forgottenpassword:{
        color:temas.colors.cordotexto,
        textAlign:'right',
        fontSize: 16,
        marginTop:11,
    },
    noAccount:{
        color:temas.colors.cordotexto,
        textAlign:'center',
        fontSize: 16,
        marginTop:130,
    }
})
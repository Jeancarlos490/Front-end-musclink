import { StyleSheet } from "react-native";
import { temas } from "../../global/temas";

//containers a serem preenchidos
export const style = StyleSheet.create({
    container: {
        flex:1,
        alignContent: 'center',
        justifyContent: 'center',
        backgroundColor:temas.colors.preto
    },
    boxtop:{
        height:140,
        //backgroundColor: 'purple'
    },
    boxmid:{
        backgroundColor:temas.colors.cinza,
        borderRadius:20,
        width:390,
        alignSelf:'center',
        height:499
    },
    boxbottom:{
        height:500,
        //backgroundColor: 'green',
        flexDirection:'column',
        flexWrap:'wrap',
        alignContent:'space-around'
    },
    personstab:{
        height:180,
        width:170,
        backgroundColor: temas.colors.laranjatransparent,
        borderRadius:20,
        alignSelf:'center',
        marginTop:50
    },
    title:{
        fontSize:26,
        fontWeight:'bold',
        alignSelf:'center',
        color: temas.colors.branco,
        textAlign:'center',
        marginTop:20
    },
    profilepicture:{
        width:"90%",
        height:"90%",
        alignSelf:'center',
        marginTop:7,
        borderRadius:100
    },
    profileText:{
        alignSelf:'center',
        color:temas.colors.branco,
        fontWeight:'bold',
        fontSize:15
    },
    profiletypename:{
        color:temas.colors.laranja,
        fontSize:13,
        textAlign:'center',
        fontWeight:'bold'
    },
    input: {
        borderRadius: 12,
        backgroundColor: temas.colors.laranjatransparent,
        alignContent: 'center',
        height: 41,
        fontSize: 14,
        color: temas.colors.branco,
        marginHorizontal:20
    },
})
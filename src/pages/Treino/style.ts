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
    Boxtop:{
        //backgroundColor:'grey',
        height:400,
        width:420,
        flexWrap:'wrap',
        alignContent:'center',
        justifyContent:'center',
    },
    boxbottom:{
        //backgroundColor:'blue',
        height:200,
        width:420,
        alignItems:'center'
    },
    textblocktitle:{
        height:80,
        //backgroundColor:'orange',
        width:300,
        justifyContent:'center',
        alignItems:'center',
        marginVertical:60,
        
    },
    textblocktimer:{
        height:80,
        backgroundColor:temas.colors.laranjatransparent,
        width:200,
        justifyContent:'center',
        alignItems:'center',
        marginVertical:60,
        alignSelf:'center',
        borderRadius:20
    },
    TitleText:{
        fontWeight:'bold',
        fontSize:32,
        color:temas.colors.branco
    },
    TimerText:{
        fontWeight:'bold',
        fontSize:32,
        color:temas.colors.laranja,
    },
    StartButton:{
        fontWeight:'bold',
        fontSize:32,
        color:temas.colors.branco,
        backgroundColor:temas.colors.laranja,
        padding:30,
        borderRadius:20
    }
})
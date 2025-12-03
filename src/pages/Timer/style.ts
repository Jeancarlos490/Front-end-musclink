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
        width:260,
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
    },
    ResetButton:{
        fontWeight:'bold',
        fontSize:32,
        color:temas.colors.branco,
        backgroundColor:'#b70022ff',
        padding:30,
        borderRadius:20
    },
    scrollContent:{
        alignItems:'center',
        paddingVertical:20
    },
    temposSalvosContainer:{
        backgroundColor:'transparent',
        borderRadius:20,
        padding:10,
        marginTop:30,
        width:360,
        alignSelf:'center',
        alignItems:'flex-start'
    },
    temposSalvosTitle:{
        fontWeight:'bold',
        fontSize:20,
        color:temas.colors.branco,
        marginBottom:15
    },
    tempoSalvoCard:{
        width:330,
        backgroundColor:'#2a211b',
        borderColor:temas.colors.laranja,
        borderWidth:2,
        borderRadius:12,
        paddingVertical:10,
        paddingHorizontal:16,
        marginVertical:8,
        alignSelf:'center'
    },
    tempoSalvoText:{
        fontSize:18,
        color:temas.colors.branco,
        fontWeight:'bold',
        textAlign:'center'
    }
})

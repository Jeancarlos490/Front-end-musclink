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
    Titletext:{
        color:temas.colors.branco,
        fontSize:32,
        fontWeight:'bold',
        alignSelf:'center',
        marginBottom:30
    },
    clearButton:{
        backgroundColor:'#b70022ff',
        borderRadius:14,
        paddingVertical:10,
        paddingHorizontal:16,
        alignSelf:'center',
        marginBottom:10
    },
    clearButtonText:{
        color:temas.colors.branco,
        fontWeight:'bold'
    },
    TrainingHistory:{
        backgroundColor: temas.colors.laranjatransparent,
        marginVertical: 10,
        borderRadius: 20,
        marginBottom: 10,
        alignSelf: 'center',
        height: 125,
        width: 375,
        justifyContent: 'space-evenly',
        flexDirection:'row',
        alignContent:'space-evenly'
    },
    PreviewHistoryText:{
        fontSize:24,
        color:temas.colors.branco,
        fontWeight:'bold',
        alignSelf:'center',
    },
    TimerHistory:{
        fontSize:24,
        color:temas.colors.laranja,
        fontWeight:'bold',
        alignSelf:'center',
    },
    deleteButton:{
        backgroundColor:'#b70022ff',
        borderRadius:12,
        paddingHorizontal:12,
        paddingVertical:8,
        alignSelf:'center'
    },
    deleteButtonText:{
        color:temas.colors.branco,
        fontWeight:'bold'
    }
})

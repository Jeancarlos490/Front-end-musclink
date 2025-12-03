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
    scrollContent:{
        paddingBottom:40
    },
    backbox:{
        backgroundColor:temas.colors.cinza,
        alignSelf:'center',
        padding:13,
        borderRadius:20
    },
    TrainingSelectBox: {
        backgroundColor: temas.colors.laranjatransparent,
        marginVertical: 10,
        borderRadius: 20,
        marginBottom: 10,
        alignSelf: 'center',
        height: 125,
        width: 375,
        justifyContent: 'space-evenly',
        flexDirection:'row'
    },
    input:{
        backgroundColor:temas.colors.laranjatransparent,
        color:temas.colors.branco,
        borderRadius:12,
        paddingHorizontal:14,
        paddingVertical:10,
        marginBottom:10,
        width:375,
        alignSelf:'center'
    },
    chipsRow:{
        flexDirection:'row',
        flexWrap:'wrap',
        gap:8,
        marginBottom:12,
        alignSelf:'center',
        width:375
    },
    chip:{
        backgroundColor:temas.colors.laranjatransparent,
        paddingHorizontal:12,
        paddingVertical:8,
        borderRadius:20,
        borderWidth:1,
        borderColor:temas.colors.laranja
    },
    chipActive:{
        backgroundColor:temas.colors.laranja
    },
    chipText:{
        color:temas.colors.branco,
        fontWeight:'bold'
    },
    listContainer:{
        backgroundColor:temas.colors.laranjatransparent,
        borderRadius:16,
        padding:8,
        width:375,
        alignSelf:'center'
    },
    exerciseItem:{
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
        paddingVertical:10,
        paddingHorizontal:10,
        borderRadius:12,
        marginVertical:6,
        backgroundColor:'#2a211b'
    },
    exerciseItemActive:{
        borderWidth:2,
        borderColor:temas.colors.laranja
    },
    exerciseInfo:{
        maxWidth:220
    },
    exerciseName:{
        color:temas.colors.branco,
        fontSize:18,
        fontWeight:'bold'
    },
    exerciseMeta:{
        color:temas.colors.cordotexto,
        fontSize:14
    },
    addButton:{
        backgroundColor:temas.colors.laranja,
        paddingHorizontal:12,
        paddingVertical:10,
        borderRadius:12
    },
    addButtonText:{
        color:temas.colors.branco,
        fontWeight:'bold'
    },
    selectedSection:{
        marginTop:14,
        backgroundColor:'#2a211b',
        borderRadius:16,
        padding:12,
        width:375,
        alignSelf:'center',
        borderWidth:2,
        borderColor:temas.colors.laranja
    },
    selectedTitle:{
        color:temas.colors.branco,
        fontSize:18,
        fontWeight:'bold',
        marginBottom:8
    },
    selectedItem:{
        color:temas.colors.branco,
        fontSize:16,
        marginVertical:2
    },
    saveButton:{
        backgroundColor:'#b70022ff',
        height:60,
        borderRadius:20,
        justifyContent:'center',
        alignItems:'center',
        marginTop:12
    },
    Selectbutton: {
        backgroundColor: temas.colors.laranja,
        width: 120,
        height: 60,
        alignSelf: 'flex-end',
        borderRadius: 20,
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft:70,
        marginBottom:30
    },
    ButtonText: {
        fontSize: 24,
        fontWeight: 'bold',
        color: temas.colors.branco
    },
    TitleText: {
        fontSize: 32,
        color: temas.colors.branco,
        alignSelf: 'center',
        marginBottom: 90,
        fontWeight: 'bold'
    },
    TrainingTypeSelectName: {
        fontSize: 24,
        alignSelf:'center',
        color:temas.colors.branco,
        fontWeight:'bold'
    }
})

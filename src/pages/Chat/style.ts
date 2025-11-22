import { StyleSheet } from "react-native";
import { temas } from "../../global/temas";

//containers a serem preenchidos
export const style = StyleSheet.create({
    container: {
        flex:1,
        alignContent: 'center',
        justifyContent: 'center',
        //backgroundColor: '#181411',
    },
    boxtop:{
        height:500,
        backgroundColor: 'green'
    },
    boxmid:{
        height:380,
        backgroundColor: temas.colors.cinzaclaro,
        marginHorizontal:15,
        marginTop:5,
        borderRadius:20,
    },
    boxbottom:{
        height:250,
        backgroundColor: 'red'
    }
})
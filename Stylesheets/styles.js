import 'react-native-gesture-handler';
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({ 
    //tipo css ==> estilo da view, text, botões, etc
    header: {
        backgroundColor:"#4169E1",
        flexDirection:"row",
        height:70,
        alignItems:"center",
        justifyContent:"center"
    },
    button: {
        marginLeft:20,
    //  width:50,
        height:40,
        borderRightWidth:10,
        borderLeftWidth:10,
        borderTopWidth:10,
        borderBottomWidth:10,
        borderColor:"#008B8B",
        backgroundColor:"#008B8B",
        alignItems:'center',
    },
    curvinha:
    {
        borderTopEndRadius:10,
        borderTopStartRadius:10,
        borderBottomEndRadius:10,
        borderBottomStartRadius:10,
    },
    textoheader:{
    //  fontFamily:"Arial",
        fontWeight:"bold",
        fontSize:20,
        textAlignVertical:'center',
        color:"white",
    },
    body: {
        backgroundColor:"#1E90FF",
        flex:1
    },
    noticias: {
        marginHorizontal: 30,
        backgroundColor: "lightgray",
        height: 300,
    },
    sobre: {
        marginHorizontal: 30,
        backgroundColor: "gray",
        height: 350,
        justifyContent: "center",
    },
    textotitulo: {
        fontWeight: "bold",
        fontSize: 20,
        textAlign: "center"
    },
    conteudo: {
        marginTop: 10,
        fontSize: 15,
        textAlign: "center",
        textAlignVertical: "center",
    }
});

export default styles;
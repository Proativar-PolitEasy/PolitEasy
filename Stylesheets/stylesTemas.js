import 'react-native-gesture-handler';
import { StyleSheet } from 'react-native';

const stylesTemas = StyleSheet.create({
    temaListContainer : {
        width:'100%',
        height:'100%', 
        paddingTop:25, 
        flexDirection:'row', 
        justifyContent: "space-evenly", 
        alignItems:'center', 
        flexWrap: "wrap"
    },
    temaListItem: {
        width: '44%', 
        height: 50,
        paddingLeft: 10, 
        marginTop: 10, 
        backgroundColor:'white', 
        borderRadius:20,
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "center"
    },
    paginaTemaListContainer: { 
        width: '100%', 
        height: '55%', 
        display: "flex",
        flexDirection: 'row', 
        justifyContent: "center", 
        alignItems: 'center',
        flexWrap: "wrap",
        marginTop:50,
    },
    paginaTemaItemContainer: {
        width: '80%',
        height: '40%',
        marginTop: 30,
        backgroundColor: '#78c8c4',
        borderRadius: 20,
        display: "flex",
        justifyContent: "center",
        borderColor:'black',
        borderWidth:1
    },
    paginaTemaItemContainer1: {
        width: '80%',
        height: '40%',
        marginBottom: 30,
        backgroundColor: '#78c8c4',
        borderRadius: 20,
        display: "flex",
        justifyContent: "center",
        borderColor:'#0E7D78',
        borderWidth:1
    },
    paginaTemaItemContainer2: {
        width: '80%',
        height: '40%',
        marginTop: 30,
        backgroundColor: '#78c8c4',
        borderRadius: 20,
        display: "flex",
        justifyContent: "center",
        borderColor:'#0E7D78',
        borderWidth:1
    },
    paginaTemaItem: {
        width: '100%',
        height: '100%',
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
    },
    paginaTemaTexto: {
        fontSize: 25
    }
});

export default stylesTemas;
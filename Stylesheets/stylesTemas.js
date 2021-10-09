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
        height: '60%', 
        paddingTop: 25, 
        display: "flex",
        flexDirection: 'row', 
        justifyContent: "center", 
        alignItems: 'center', 
        flexWrap: "wrap"
    },
    paginaTemaItemContainer: {
        width: '80%',
        height: '40%',
        marginTop: 10,
        backgroundColor: 'white',
        borderRadius: 20,
        display: "flex",
        justifyContent: "center"
    },
    paginaTemaItem: {
        width: '100%',
        height: '100%',
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        fontSize: 25
    },
    paginaTemaTexto: {
        fontSize: 25
    }
});

export default stylesTemas;
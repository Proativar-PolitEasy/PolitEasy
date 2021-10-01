import 'react-native-gesture-handler';
import { StyleSheet } from 'react-native';

const stylesModal = StyleSheet.create({
    container: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignContent: "center",
        width: "100%",
        height: "100%",
        paddingTop: "20%"
    },
    modal: {
        width: "80%",
        height: "80%",
        backgroundColor: "#16abb2",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        paddingTop: "20%",
        elevation: 20
    },
    header: {
        fontSize: 25,
        fontWeight: "bold",
    },
    avatar: {
        width: "80%",
        height: "30%",
        resizeMode: "contain",
        borderRadius: 200,
        marginBottom: "10%"
    },
    avatarList: {
        width: "80%",
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        flexWrap: "wrap"
    },
    avatarOption: {
        width: "24%",
        height: "30%"
    },
    avatarOptionImage: {
        width: "100%",
        height: "100%",
        resizeMode: "contain",
        borderRadius: 100
    },
    modalButton: {
        width: "80%",
        marginTop: "-20%",
        marginBottom: "20%"
    }
});

export default stylesModal;
import 'react-native-gesture-handler';
import { StyleSheet } from 'react-native';

const stylesForm = StyleSheet.create({
    containerLogin: {
        height: "100%",
        paddingLeft: 20,
        paddingRight: 20,
        paddingTop: 120,
        paddingBottom: 50,
        backgroundColor: "#16abb2"
    },
    containerCadastro: {
        height: "100%",
        paddingLeft: 20,
        paddingRight: 20,
        paddingTop: 50,
        paddingBottom: 50,
        backgroundColor: "#16abb2"
    },
    heading: {
        color: "#09283a",
        fontSize: 50,
        fontWeight: "bold",
        paddingBottom: 15,
        textAlign: "center"
    },
    descricaoCampo: {
        paddingLeft: 20,
        paddingBottom: 1
    },
    dateFieldText: {
        paddingTop: 10,
        color: "#728691"
    },
    textField: {
        paddingVertical: 0,
        width: "99%",
        height: 40,
        paddingLeft: 20,
        color: "#728691",
        backgroundColor: "#c7d0d9",
        borderRadius: 18,
        borderWidth: 1,
        borderColor: "#728691",
        elevation: 5
    },
    textFieldShadow: {
        top: -35,
        left: "1%",
        width: "99%",
        height: 40,
        elevation: 2,
        paddingLeft: 20,
        color: "black",
        backgroundColor: "#c7d0d9",
        borderRadius: 18,
        borderWidth: 1,
        borderColor: "#728691",
    },
    textFieldContainer: {
        marginBottom: -20
    },
    button: {
        width: "99%",
        height: 40,
        elevation: 5,
        backgroundColor: "#0e587d",
        borderRadius: 18,
        borderWidth: 1,
        borderColor: "#0e587d",
        justifyContent: "center",
        alignItems: "center"
    },
    buttonShadow: {
        top: -35,
        left: "1%",
        width: "99%",
        height: 40,
        elevation: 2,
        backgroundColor: "#88B9DF",
        borderRadius: 18,
        borderWidth: 1,
        borderColor: "#0e587d",
        justifyContent: "center",
        alignItems: "center"
    },
    buttonText: {
        color: "white"
    },
    errorLog: {
        // Usado em campos de texto
        top: -30,
        paddingLeft: 20,
        color: "#A70D0D",
        fontSize: 11
    },
    errorAlert: {
        // Usado na tela login
        color: "white",
        paddingLeft: 18,
        marginBottom: 10,
        backgroundColor: "#A70D0D",
        opacity: 0.8,
        borderRadius: 20
    },
    avatarPicker: {
        width: "100%",
        height: "10%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center"
    },
    avatarPreview: {
        width: "60%",
        height: "60%",
        resizeMode: "contain",
        borderRadius: 500
    }
});

export default stylesForm;
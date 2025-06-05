import { StyleSheet } from "react-native";

const styles = StyleSheet.create({

    container: {
        justifyContent: "center",
        flex: 1,
        textAlign: "center"
    },
    botao: {
        padding: 50,
        backgroundColor: "#4EA6E6",
        borderRadius: 20, 
        width: 800,
        alignItems: "center",
        
    },

    texto:{
        fontSize: 40,
    },
    imagem: {
        width: 300, 
        height: 300, 
        marginBottom: 20, 
        borderRadius: 10,
        alignItems: "center"
    }



})

export default styles;
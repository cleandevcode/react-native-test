import { StyleSheet, Dimensions, Platform } from "react-native";
const { width, height } = Dimensions.get("window");

export default StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center'
    },
    BottomImage: {
        position: 'absolute',
        bottom: 0,
        width: width,
        height: height * 0.73,
        zIndex: 1,
        resizeMode: 'stretch'
    },

    bottomView: {
        position: 'absolute',
        bottom: 42,
        zIndex: 10,
        alignItems: 'center'
    },
    title: {
        fontSize: 16,
        lineHeight: 24,
        color: '#fff',
        marginTop: 15
    },
    container1: {
        flex: 1,
        backgroundColor: "#ffffff",

    },
    bottomsection: {
        position: 'relative',
        marginTop: 45,
        zIndex: 10,
        alignItems: 'center'
    },
    header: {
        textAlign: "center",
        marginTop: 50,
        width: width,
        alignItems: "center"
    },
    title: {
        textAlign: "center",
        fontSize: 30,
        fontWeight: 'bold',
        color: 'white'
    },
    underheader: {
        textAlign: "center",
        fontSize: 18,
    },
    textAreaContainer: {
        borderColor: 'white',
        borderWidth: 20,
        borderRadius: 10,
        padding: 0,
        backgroundColor: 'white',
        marginTop: 30
    },
    textArea: {
        height: 150,
        width: width - 140,
        fontSize: 18,
        textAlignVertical: 'top',
        justifyContent: "flex-start"
    },
    button1: {
        backgroundColor: '#ffffff',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 30,
        width: width * 0.4,
        height: 50,
        borderRadius: 20
    },
    modal: {
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 30,
        width: width * 0.8,
        marginLeft: width * 0.1,
        height: height * 0.6,
        borderRadius: 20,
        backgroundColor: "#44CAAC"
    }
})
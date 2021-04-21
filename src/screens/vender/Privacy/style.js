import { StyleSheet, Dimensions, Platform } from "react-native";
const { width, height } = Dimensions.get("window");

export default StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center'
    },
    container1: {
        flex: 1,
        backgroundColor: "#ffffff",

    },
    header: {
        textAlign: "center",
        marginTop: 50,
        width: width,
        alignItems: "center"
    },
    title: {
        textAlign: "center",
        fontSize: 24,
        fontWeight: 'bold',
        color: 'black'
    },
    underheader: {
        textAlign: "center",
        fontSize: 18,
    },
    content_title :{
        fontSize: 20,
        color:'white',
        padding: 30
    },
    content_text:{
        color:'white',
        paddingLeft:30,
        paddingRight: 30,
        lineHeight: 22,
        fontSize: 15
    },
    modal: {
        flexDirection: 'column',
        textAlignVertical:'top',
        marginTop:  30,
        width: width* 0.9,
        height: height * 0.6,
        borderRadius: 20,
        backgroundColor:"#44CAAC"
    },
    itmelists:{
        position:"absolute",
        bottom: 0
    }
})
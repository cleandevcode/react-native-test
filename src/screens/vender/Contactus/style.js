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
    contact_from:{
        borderColor: 'white',
        borderWidth: 20,
        borderRadius: 10,
        padding: 0,
        width: width - 80,
        backgroundColor: 'white'
    },
    contact_input:{
        borderWidth: 15,
        borderRadius: 15,
        width: width - 120,
        fontSize: 14,
        borderColor: 'white',
        height: 30,
        backgroundColor: 'white',
        marginBottom:20
    },
    button1: {
        backgroundColor: '#ffffff',
        alignItems: 'center',
        justifyContent: 'center',
        width: width * 0.4,
        height: 50,
        borderRadius: 20
    },
    textAreaContainer: {
        borderColor: 'white',
        borderWidth: 15,
        borderRadius: 10,
        padding: 0,
        width: width - 120,
        backgroundColor: 'white',
        marginBottom:20
    },
    textArea: {
        height: 90,
        width: width,
        fontSize: 14,
        padding:0 ,
        paddingLeft: 0,
        textAlignVertical: 'top',
        justifyContent: "space-between"
    },
    content_title: {
        fontSize: 20,
        width:width*0.9,
        color: 'white',
        textAlign:'left',
        padding: 30
    },
    content_text: {
        color: 'white',
        paddingLeft: 30,
        paddingRight: 30,
        lineHeight: 22,
        fontSize: 15
    },
    modal: {
        flexDirection: 'column',
        alignItems: 'center',
        textAlignVertical: 'top',
        marginTop: 30,
        width: width * 0.9,
        height: height * 0.6,
        borderRadius: 20,
        backgroundColor: "#44CAAC"
    },
    itmelists: {
        position: "absolute",
        bottom: 0
    }
})
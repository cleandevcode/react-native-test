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
    cut: {
        width: width * 0.4,
        height: width * 0.13,
        marginTop: height * 0.1,
        resizeMode: 'contain'
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
    button: {
        backgroundColor: 'white'
    },
    buttonTitle: {
        color: '#e80606',
        letterSpacing: 1.3
    },
    borderButton: {
        width: width - 88
    },
    borderBT: {
        letterSpacing: 1.3
    },
    socialButton: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        width: width - 88,
        marginTop: 14
    },
    bottomsection:{
        position: 'absolute',
        bottom: 0,
        zIndex: 10,
        alignItems: 'center'
    },
    header:{
        textAlign:"center",
        marginTop:50,
        width: width,
        alignItems:"center"
    },
    welcome:{
        textAlign:"center",
        fontSize: 20,
        fontWeight:'bold'
    },
    underheader:{
        textAlign:"center",
        fontSize: 18,
    },
    modal:{
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop:  height * 0.15,
        width: width* 0.85,
        height: height * 0.35,
        borderRadius: 20,
        backgroundColor:"#44CAAC"
    },
    timesection:{
        flexDirection:"row",
        justifyContent:"space-around"
    },
    availsection:{
        width: width- 120,
        flexDirection:"row",
        justifyContent:"space-between",
        marginTop: 30,
    },
    timer:{
        textAlign:"center",
        fontSize: 18,
        color: "#fff"
    },
    address:{
        textAlign:"center",
        fontSize: 18,
        color: "#fff",
        width: width-120,
        textAlign:'left'
    }
})
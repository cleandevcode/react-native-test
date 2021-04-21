import { StyleSheet, Dimensions, Platform } from "react-native";
const { width, height } = Dimensions.get("window");

export default StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: "#44CAAC"
    },
    container1:{
      flex: 1,
      alignItems: 'center',
      backgroundColor: "#ffffff"  
    },
      image: {
        ...StyleSheet.absoluteFillObject,
        resizeMode: 'cover',
      },
      login_header:{
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: "#44CAAC",
        height: height * 0.4,
        width: width,
        borderBottomLeftRadius: 30,
        borderBottomRightRadius: 30
      },
      login_logo:{
       
        resizeMode:"contain",
        width: width* 0.8,
        marginBottom: 50
      },
      maincontainer:{
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
      },
      logintitle:{
        width:width*0.85,
        marginTop:  30,        
        marginBottom: 10 ,
        fontSize: 20,
        fontWeight:'bold',
        flexDirection: 'row',
        justifyContent:'flex-start',
        textAlign:'left'
      },
      loginbutton:{
        fontWeight:"bold",
        backgroundColor : "#44CAAC",
        width:width * 0.8,
        marginTop: 60
      }
})
import { StyleSheet, Dimensions, Platform } from "react-native";
const { width, height } = Dimensions.get("window");

export default StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: '#fff'
    },
    flexDirection: {
        flexDirection: 'row',
        alignItems: 'center',
        
    },
    font16: {
        fontSize: 16,
        fontWeight: '800',
        color: '#2d2d2d',
        letterSpacing: 0.24
    },
    font14: {
        fontSize: 14,
        fontWeight: '400',
        color: '#bfbfbf',
        letterSpacing: 0.24,
        lineHeight: 24
    },
    font18: {
        fontSize: 12,
        fontWeight: 'bold',
        color: '#E57D33',
        letterSpacing: 0.24,
        lineHeight: 24,
        fontWeight:"bold",
        marginTop: 30
    },
    font12: {
        fontSize: 15,
        fontWeight: '600',
        color: '#ffffff',
        letterSpacing: 0.24,
        lineHeight: 24
    },
    mapcontainer:{
        height: height* 0.4,
        zIndex: 10
    },
    map: {
        width: width,
        height: height,
        flex: 1,
        marginTop: -10,
        zIndex: 10
    },
    topView: {
        width: width * 0.8,
        position: 'absolute',
        backgroundColor: 'white',
        paddingTop: 7,
        paddingBottom: 7,
        top: height* 0.15,
        zIndex: 11,
        justifyContent: 'space-between'
    },
    tabtext:{
        width: width * 0.4,
        fontSize: 15,
        color:"#E57D33",
        textAlign:'center',
        fontWeight:"600"
    },

    grid:{
        justifyContent: 'center',
        flexDirection: 'row',
        flexWrap: 'wrap',
        flex: 1,
    },
    scrollView:{
        justifyContent: 'center',
        flexDirection: 'row',
        flexWrap: 'wrap',
        flex: 1,
    },
    imagecontainer:{
      flexDirection: 'row',
      justifyContent: 'space-around',
  
      width: width
    },
    tabtitle:{
        flex:1,
        flexDirection: 'row',
        width: width * 0.8,
        position: 'absolute',
        backgroundColor: 'white',
        paddingTop: 7,
        paddingBottom: 7,
        top: height* 0.25,
        zIndex: 11,
        justifyContent: 'space-evenly'
    },
    pin: {
        width: 58,
        height: 49.6
    },
    pin1: {
        width: 16,
        height: 14
    },
    avatar: {
        width: width* 0.2,
        height: width* 0.2,
        borderRadius: 6,
        marginRight: 10,
        marginTop: 23
    },
    list: {
        position: 'relative',
        zIndex: 12,
        flexWrap: "wrap",
        flexDirection: "row",
        justifyContent: "space-around",
        
        // paddingRight: 20
    },
    item: {
        width: width,
        padding: 8,
        alignItems: 'center',
        margin: 10,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'white',
        marginTop: 20
        
    },
    haireView: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: width - 88
    },
    hairType: {
        width: (width - 88) / 3 - width * 0.025,
        height: 37,
        borderRadius: 12,
        borderWidth: 2,
        borderColor: '#dfdfdf',
        backgroundColor: 'transparent',
        justifyContent: 'center',
        alignItems: 'center'
    },
    selectedHairType: {
        width: (width - 88) / 3 - width * 0.025,
        height: 37,
        borderRadius: 12,
        backgroundColor: '#e80606',
        justifyContent: 'center',
        alignItems: 'center'
    },
    hairTypeTitle: {
        fontSize: 15,
        fontWeight: '600',
        letterSpacing: 0.24,
        color: '#2d2d2d'
    },
    genderWidth: {
        width: (width - 88) / 2 - 15
    },
    backButton: {
        position: 'absolute',
        top: 60,
        left: 29,
        zIndex: 11
    },
    profilePhoto: {
        width: width,
        height: height - 100,
        resizeMode: 'cover'
    },
    swiper: {
        height: height - 100,
        zIndex: 10,            
    },
    dotStyle: {
        bottom: 170,
        zIndex: 11
    },
    bottomView: {
        width: width,
        alignItems: 'center',
        paddingVertical: 21,
        backgroundColor: 'white',
        position: 'absolute',
        bottom: 0,
        zIndex: 13,
        borderRadius: 17,
        paddingBottom: 30
    },
    emtpyCorner: {
        width: width,
        height: 40,
        borderBottomLeftRadius: 17,
        borderBottomRightRadius: 17,
        position: 'absolute',
        top: 0,
        backgroundColor: 'white'
    },
    title: {
        fontSize: 23,
        color: '#2d2d2d',
        fontWeight: 'bold',
        marginTop: 40,
        lineHeight: 24,
        letterSpacing: 0.24
    },
    font15: {
        fontSize: 28,
        color: '#ffffff',
        lineHeight: 28,
        fontWeight:'bold',
        letterSpacing: 0.24,
        marginTop: 15,
    },
    selectButton: {
        width: (width - 65)/3,
        height: 37,
        borderRadius: 12,
        borderWidth: 2,
        borderColor: '#dfdfdf',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 20
    },
    serviceItem: { 
        marginTop: 20, 
        justifyContent: 'space-between', 
        width: width - 88,
        alignItems: 'flex-start' 
    },
    loginButtonView: {
        position: 'absolute',
        bottom: 29,
        zIndex: 10,
        alignItems: 'center'
    }, 
    calendar: {
        width: width - 30,
    },
    checkoutView: { 
        justifyContent: 'space-between',
        marginTop: 13, 
        width: width,
        paddingHorizontal: 44,
        shadowColor: 'rgba(0,0,0,0.07)',
        backgroundColor: 'white',
        shadowOffset: {
            height: 10,
            width: 0
        },
        shadowRadius: 8,
        shadowOpacity: 1,
        borderBottomRightRadius: 17,
        borderBottomLeftRadius: 17,
        paddingBottom: 20
    },
    check: {
        width: 60,
        height: 60,
        borderRadius: 30,
        borderWidth: 2,
        borderColor: '#e80606',
        alignItems: 'center',
        justifyContent: 'center'
    },
    font21: {
        fontSize: 21,
        fontWeight: '700',
        color: '#2d2d2d',
        lineHeight: 24,
        textAlign: 'center'
    },
    avatar_name:{
        flexDirection: "row",
        justifyContent:'space-around',
        width: width* 0.9,
        paddingBottom: 10,
        height: 120,
        backgroundColor:"#44CAAC",
        borderRadius:30,
        marginBottom: 30,
    },

    hourly_content:{
        borderColor:"#E57D33",
        borderWidth:3,
        width: width* 0.45,
        borderRadius: 10,
        paddingLeft: 20,
        borderRightWidth: 50
    },
    itmelists:{
      
        position:"absolute",
        bottom: 0
    }
})
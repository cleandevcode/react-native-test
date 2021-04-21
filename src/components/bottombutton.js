import React from 'react';
import { TouchableOpacity, View, Text, StyleSheet, Image, Dimensions, ImageBackground } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import Images from '../config/images';
const { width, height } = Dimensions.get('window');
const BottomButton = ({history,setting,scan}) => (
    <View contentContainerStyle={innerStyle.container}>
        <ImageBackground source={Images.bottomimage}
            style={{
                width: width,
            }}>
            <View style={innerStyle.iconlist}>
                <TouchableOpacity onPress={history}>
                <View style={innerStyle.history}>
                    <Image source={Images.history} style={innerStyle.underimage}/>
                    <Text style={innerStyle.undertext}>History</Text>
                </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={scan}>
                <View style={innerStyle.scan}>
                    <Image source={Images.scan} style={innerStyle.underimage}/>
                    <Text style={innerStyle.undertext}>Scan QR</Text>
                </View>
                </TouchableOpacity>
                <TouchableOpacity  onPress={setting}>
                <View style={innerStyle.history}>
                    <Image source={Images.settings} style={innerStyle.underimage}/>
                    <Text style={innerStyle.undertext}>Settings</Text>
                </View>
                </TouchableOpacity>
            </View>
        </ImageBackground>
    </View>
)

const innerStyle = StyleSheet.create({

    image: {
        flex: 1,
        resizeMode: 'cover'
    },
    headerimage: {
        width: width * 0.2,
        marginLeft: '40%',
        resizeMode: 'contain'
    },
    iconlist:{
        flexDirection:"row",
        justifyContent: "space-around"
    },
    undertext:{
        paddingTop: 2,
        marginBottom:10,
        fontSize: 15,
        textAlign: "center"
    },
    underimage:{
        marginTop: 10,
        
    },
    history:{
        marginTop: 52,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    },
    scan:{
        marginTop: 25,
        marginLeft: 10,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    },
    BottomButton: {
        flex: 1,
        resizeMode: 'cover',
        position: 'absolute',
        width: "100%",
        flexDirection: 'column'
    }
});

export default BottomButton
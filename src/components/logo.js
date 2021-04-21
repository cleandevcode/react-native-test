import React from 'react';
import { Text, TouchableOpacity, StyleSheet,Dimensions ,Image} from 'react-native';
import Images from '../config/images';
const { width,height } = Dimensions.get('window')

const Logo = (props) => (
    <TouchableOpacity >
         <Image source={Images.Logo} style={innerStyle.cut}/>
    </TouchableOpacity>
);

const innerStyle = StyleSheet.create({
    cut: {
        width: width* 0.8,
        height: height*0.2,
        marginTop: width* 0.7,
        resizeMode:'contain'
    }
});

export default Logo
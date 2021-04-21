import React from 'react';
import { TextInput, StyleSheet, Dimensions, Image, View, Text } from 'react-native';
const { width } = Dimensions.get('window')
const Input = (props) => (
    <View style={[props.title ?styles.container1: styles.container,props.error ? { borderBottomColor: '#44CAAC' } : '', props.style]}>
        {props.title && <Text style={[styles.title, props.textColor ? { color: props.textColor } : '']}>{props.title}</Text>}
        {props.title1 && <Text style={[styles.title1, props.title1Style, props.textColor ? { color: props.textColor } : '']}>{props.title1}</Text>}
        <TextInput
            {...props}
            placeholder={props.placeholder}
            value={props.value}
            placeholderTextColor='black'
            underlineColorAndroid='transparent'
            style={{ borderBottomColor: '#44CAAC', width:width * 0.85, borderBottomWidth:2, paddingBottom:10, marginBottom: 30 }}
            onChangeText={props.onChangeText}            
        />
        {props.image && <Image source={props.image} style={styles.images}/> }
    </View>
)

const styles = StyleSheet.create({
    container: { 
        zIndex: 10,
        width: width - 50,
       
    },
    container1: { 
        alignItems: 'center', 
        zIndex: 10,
        width: width -20, 
        borderBottomColor: '#dfdfdf',
        borderBottomWidth: 2,
        
    },
    textinput: {
        fontSize: 16,
        fontWeight: '600',
        color: '#2d2d2d',
        borderRadius: 12,
        height: 45,        
        width: '100%',
        paddingLeft:20,
        marginTop: 10,
        borderColor: '#EDF3F6',
        borderWidth: 2,
        zIndex: 10,
       
    },
    textinput1: {
        fontSize: 16,
        fontWeight: '600',
        color: '#2d2d2d',
        width: '100%',      
        textAlign: 'left',
        alignItems: 'center',
        justifyContent: 'center',
        zIndex: 10,
        paddingBottom: 5,
        
       
    },
    images:{
        position:'absolute',
        right:10,
        top:20

    },
    placeholder: {
        fontSize: 16,
        color: '#22325D',
        position: 'absolute',
        top: 22,
        left: 20,
        zIndex: 9,
        
    },
    title: {
        fontSize: 14,
        lineHeight: 24,
        letterSpacing: 0.24,
        color: '#bfbfbf',
        
    },
    title1: {
        fontSize: 18,
        lineHeight: 24,
        letterSpacing: 0.96,
        color: '#e80606',
        marginBottom: 10
    }
})

export default Input
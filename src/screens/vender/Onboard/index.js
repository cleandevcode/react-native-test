import React, { useRef, useState, useEffect } from 'react';
import { View, Text, SafeAreaView, Image, TouchableOpacity, StyleSheet, Dimensions, Platform } from 'react-native';
import Images from '../../../config/images';
import Header from '../../../components/header'
import Button from '../../../components/Button'
import Input from '../../../components/input'
import Logo from '../../../components/logo'
import { useSelector } from 'react-redux'
import styles from './style';
import { GetToken, Login } from '../../../reducers/session/action';
import { ScrollView } from 'react-native-gesture-handler';
const { width } = Dimensions.get('window')

function Onboard({ navigation }) {
    React.useEffect(() => {
        gettoken();
        setTimeout(() => {
            setTime(true);
        }, 1000);
    },[]);

    const gettoken = GetToken();
    const login = Login()
    const token = useSelector(state => state.session.token);
    const result = useSelector(state => state.session.result);
    const [error, setError] = React.useState(false);
    const [email, setEmail] = React.useState('avinashkumar199230@gmail.com');
    const [password, setPass] = React.useState('123456');
    const [entries, setEntries] = React.useState([]);
    const carouselRef = useRef(null);
    const [time, setTime] = React.useState(false);
    const _handleEmail = email => setEmail(email);
    const _handlepass = pass => setPass(pass);

    const next = async () => {
        if (email === '' || password === '') {
            setError(true);
            return;
        }
        await login({ email, password }, { token });
        return;
    }

    if (result) {
        
        if (result.message == "Login Success") {
            navigation.reset({
                index: 0,
                routes: [{ name: 'Dashboard' }],
              })
        }
    }

    return (
        <>
            {!time ?
                <SafeAreaView style={styles.container} >
                    <Logo />
                </SafeAreaView> :
                <SafeAreaView style={styles.container1}>
                    <ScrollView>
                        <View style={styles.login_header}>
                            <Image source={Images.Logo} style={styles.login_logo} />
                        </View>
                        <View style={styles.maincontainer}>
                            <Text style={styles.logintitle}>Login</Text>
                            <Input
                                placeholder='user'
                                onChangeText={_handleEmail}
                                value={email}
                                keyboardType='email-address'
                                textContentType='emailAddress'
                                error={error && email === ''}
                                autoCapitalize='none'
                                image={require('../../../assets/images/user.png')}
                            />

                            <Input
                                placeholder='password'
                                onChangeText={_handlepass}
                                value={password}
                                keyboardType='email-address'
                                textContentType='emailAddress'
                                error={error && pass === ''}
                                image={require('../../../assets/images/pass.png')}
                            />
                            <Text>Can’t sign in</Text>
                            <Button title="Log in" style={styles.loginbutton} onPress={next} />
                        </View>
                    </ScrollView>
                </SafeAreaView>
            }
        </>
    )
}

export default Onboard;

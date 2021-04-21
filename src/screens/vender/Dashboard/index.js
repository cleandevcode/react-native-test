import React from 'react';
import { View, Text, SafeAreaView, Image, TouchableOpacity, StyleSheet, Dimensions,LogBox } from 'react-native';
import { useSelector } from 'react-redux'
import BottomButton from '../../../components/bottombutton'
import styles from './style';
const { width } = Dimensions.get('window')
LogBox.ignoreLogs(['Warning: ...']);
LogBox.ignoreAllLogs();
function Dashboard({ navigation }) {
    const info = useSelector(state => state.session.result.data);
    const day = new Date(info.working_date);
    const weekday = new Array(7);
        weekday[0] = "Sunday";
        weekday[1] = "Monday";
        weekday[2] = "Tuesday";
        weekday[3] = "Wednesday";
        weekday[4] = "Thursday";
        weekday[5] = "Friday";
        weekday[6] = "Saturday";
    const date = weekday[day.getDay()];
    const gotoLogin = () => navigation.navigate('Login')
    const gotohistory = () => navigation.navigate('History');
    const getosetting = () =>navigation.navigate('Settings');
    const gotoScan =() =>navigation.reset({
        index: 0,
        routes: [{ name: 'Scanpage' }],
    })
    return (
        <SafeAreaView style={styles.container}>     
            <View style={styles.header}>
                <Text style={styles.welcome}>Welcome</Text>  
            </View>     
            <View  style={styles.modal}>
                <Text style={styles.welcome}>{date}</Text>
                <Text  style={styles.underheader}>{info.working_date}</Text>
                <View style={styles.availsection}>
                    <Text style={styles.timer}>{info.first_name} : </Text>
                    <View  style={styles.timesection}>
                    <Text  style={styles.timer}>{info.work_start_time}</Text>
                    <Text  style={styles.timer}>  -  </Text>
                    <Text  style={styles.timer}>{info.work_end_time}</Text>
                    </View>
                </View>
                <Text style={styles.address}>{info.address}</Text>
            </View>
            <View style={styles.bottomsection}>
                <BottomButton history={gotohistory} setting = {getosetting} scan={gotoScan}/>
            </View>
        </SafeAreaView>
    )
}

export default Dashboard
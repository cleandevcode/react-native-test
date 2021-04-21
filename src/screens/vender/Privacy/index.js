import React from 'react';
import { View, Text, SafeAreaView, TextInput, ScrollView, Image, TouchableOpacity, StyleSheet, Dimensions, LogBox } from 'react-native';
import { useSelector } from 'react-redux'
import BottomButton from '../../../components/bottombutton'
import styles from './style';
const { width } = Dimensions.get('window')

function Privacy({ navigation, route }) {
    // const info = useSelector(state => state.session.result.data);
    const { data } = route.params;
    console.log("data",data);
    const gotohistory = () => navigation.navigate('History');
    const getosetting = () => navigation.navigate('Settings');
    const gotoScan = () => navigation.navigate('Scanpage');
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.header}>
                {/* <Text style={styles.title}>{info.working_date}</Text> */}
                {/* <Text style={styles.underheader}>December</Text> */}
            </View>
            <View style={styles.modal}>
                <Text style={styles.content_title}>Terms & Conditions</Text>
                <Text style={styles.content_text}>
                    Lorem ipsum dolor sit amet,
                    consectetur adipiscing elit,
                    sed do eiusmod tempor incididunt ut labore et
                    dolore magna aliqua. Ut enim ad minim veniam,
                    quis nostrud exercitation ullamco laboris nisi
                    ut aliquip ex ea commodo consequat.
                    Duis aute irure dolor in reprehenderit in voluptate
                    velit esse cillum dolore eu fugiat nulla pariatur.
                    Excepteur sint occaecat cupidatat non proident,
                    sunt in culpa qui officia deserunt mollit anim id est laborum.</Text>
            </View>
            <View style={styles.itmelists}>
                <BottomButton setting={getosetting} scan={gotoScan} />
            </View>
        </SafeAreaView>
    )
}

export default Privacy
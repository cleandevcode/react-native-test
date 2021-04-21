import React from 'react';
import { View, Text, SafeAreaView, Image, TouchableOpacity, FlatList, Dimensions } from 'react-native';
import Images from '../../../config/images';
import BottomButton from '../../../components/bottombutton'
import Header from '../../../components/header'
import styles from './style';
import images from '../../../config/images';
const { width } = Dimensions.get('window')
function Settings({ navigation }) {
    const gotohistory = () => navigation.navigate('History');
    const gotoScan = () => navigation.navigate('Scanpage');
    const goBack = () => navigation.goBack();
    const renderItem = ({ item, index }) => (
        <View style={styles.avatar_name}>
            <Image source={Images.bar} style={styles.avatar} />
            <View>
                <Text style={styles.font15}>{item.time}</Text>
                <Text style={styles.font12}>{item.date}</Text>
                <Text style={styles.font12}>{item.working}</Text>
            </View>
        </View>
    )
    return (
        <SafeAreaView style={styles.container}>
            <Header back={goBack} title='Settings' titleColor='#000000' left smallColor='rgba(45,45,45,0.5)' />
            <View style={styles.lists}>
                <View style={styles.imagetext}>
                    <Image source={images.user} style={styles.settingsImage} />
                    <Text style={styles.settingtext}>Account</Text>
                </View>
                <TouchableOpacity style={styles.button1} onPress={() => navigation.navigate('Privacy')}>
                    <View style={styles.imagetext}>
                        <Image source={images.security} style={styles.settingsImage} />
                        <Text style={styles.settingtext}>Privacy & Security</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button1} onPress={() => navigation.navigate('Contactus')}>
                    <View style={styles.imagetext}>
                        <Image source={images.helping} style={styles.settingsImage} />
                        <Text style={styles.settingtext}>Help & Support</Text>
                    </View>
                </TouchableOpacity>
            </View>
            <View style={styles.itmelists}>
                <BottomButton history={gotohistory} scan={gotoScan} />
            </View>

        </SafeAreaView>
    )
}

export default Settings
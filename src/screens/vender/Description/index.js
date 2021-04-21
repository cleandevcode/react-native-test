import React from 'react';
import { View, Text, SafeAreaView, TextInput, ScrollView, Image, TouchableOpacity, StyleSheet, Dimensions, LogBox } from 'react-native';
import { useSelector } from 'react-redux'
import BottomButton from '../../../components/bottombutton'
import styles from './style';
const { width } = Dimensions.get('window')
LogBox.ignoreLogs(['Warning: ...']);
LogBox.ignoreAllLogs();
function Description({ navigation, route }) {
    const [description, setDescription] = React.useState('');
    const info = useSelector(state => state.session.result.data);
    const { qr_id } = route.params;
    const gotoLogin = () => navigation.navigate('Login')
    const gotohistory = () => navigation.navigate('History');
    const getosetting = () => navigation.navigate('Settings');
    const gotoScan = () => navigation.navigate('Scanpage');
    const onChangeText =(value) =>{
        setDescription(value)
    }

    const Submit = (value) =>{
        navigation.navigate('Timetracker', {data: description,qr_id:qr_id});
    }
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.header}>
                
                <Text style={styles.underheader}>{info.working_date}</Text>
            </View>
            <SafeAreaView>
                <ScrollView style={styles.container1}>
                    <View style={styles.modal}>
                        <Text style={styles.title}>What task are you doing?</Text>
                        <View style={styles.textAreaContainer} >
                            <TextInput
                                style={styles.textArea}
                                underlineColorAndroid="transparent"
                                onChangeText={onChangeText}
                                placeholder="Type something"
                                value={description}
                                placeholderTextColor="grey"
                                numberOfLines={10}
                                multiline={true}
                            />
                        </View>
                        <TouchableOpacity style={styles.button1} onPress={() =>Submit()}>
                            <Text style={styles.text}>Submit</Text>
                        </TouchableOpacity>
                    </View>

                    <View style={styles.bottomsection}>
                        <BottomButton history={gotohistory} setting={getosetting} scan={gotoScan} />
                    </View>
                </ScrollView>
            </SafeAreaView>
        </SafeAreaView>
    )
}

export default Description
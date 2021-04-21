import React from 'react';
import { View, Text, SafeAreaView, TextInput,Alert, ScrollView, Image, TouchableOpacity, StyleSheet, Dimensions, LogBox } from 'react-native';
import { useSelector } from 'react-redux'
import Input from '../../../components/input'
import BottomButton from '../../../components/bottombutton'
import styles from './style';
import { Contractus } from '../../../reducers/session/action';
const { width } = Dimensions.get('window')


function Contactus({ navigation }) {
    const token = useSelector(state => state.session.result.data.token);
    const info = useSelector(state => state.session.result.data);
    const [name, setName] = React.useState('tet');
    const [email, setEmail] = React.useState('avinashkumar199230@gmail.com');
    const [description, setDescription] = React.useState('');
    const gotohistory = () => navigation.navigate('History');
    const getosetting = () => navigation.navigate('Settings');
    const gotoScan = () => navigation.navigate('Scanpage');
    const _handleEmail = email => setEmail(email);
    const _handlename = name => setName(name);
    const onChangeText = value => setDescription(value);
    const contractus = Contractus();
    const submit = async () => {
        await contractus({ first_name : name, descreption:description, email }, { token });
        return;
    }
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.title}>{info.working_date}</Text>
                {/* <Text style={styles.underheader}>December</Text> */}
            </View>
            <ScrollView>
            <View style={styles.modal}>
                <Text style={styles.content_title}>Contact us</Text>
                <View>
                    <TextInput
                        style={styles.contact_input}
                        placeholder='Name'
                        onChangeText={_handlename}
                        value={name}
                    />
                </View>
                <View>
                    <TextInput
                        style={styles.contact_input}
                        placeholder='Email'
                        onChangeText={_handleEmail}
                        value={email}
                        autoCapitalize='none'
                    />
                </View>
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
                <TouchableOpacity style={styles.button1} onPress={() =>submit()}>
                    <Text style={styles.text}>Submit</Text>
                </TouchableOpacity>

            </View>
            </ScrollView>
            <View style={styles.itmelists}>
                <BottomButton history={gotohistory} scan={gotoScan} />
            </View>
        </SafeAreaView>
    )
}

export default Contactus
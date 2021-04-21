import React, { useEffect } from 'react';
import { View, Text, SafeAreaView, Image, TouchableOpacity, StyleSheet, Dimensions } from 'react-native';
import Images from '../../../config/images';
import { useSelector } from 'react-redux'
import { Timer, FlipNumber } from 'react-native-flip-timer';
import { Inserttime } from '../../../reducers/session/action';
import BottomButton from '../../../components/bottombutton';
import styles from './style';
const { width } = Dimensions.get('window')

function Timetracker({ navigation, route }) {
    const token = useSelector(state => state.session.result.data.token);
    const { data } = route.params;
    const { qr_id } = route.params;
    const info = useSelector(state => state.session.result.data);
    const time =  useSelector(state => state.session.inserttime);
    console.log(time);
    const [job_description, SetDescription] = React.useState(data);
    const [laps, setLaps] = React.useState(0);
    const [play, setPlay] = React.useState(false);
    const [start, setStart] = React.useState(false);
    const startTime = Date.now() - laps;
    useEffect(
        () => {
            if (play) {
                const interval = setInterval(() => {
                    setLaps(Date.now() - startTime);
                }, 1000);
                return () => clearInterval(interval);
            }
        },
        [play]
    );

    const gotoLogin = () => navigation.navigate('Login')
    const gotohistory = () => navigation.navigate('History');
    const getosetting = () => navigation.navigate('Settings');

    const gotoendScan = () => {
        setPlay(false)
    }
    const [timer, setTimer] = React.useState(0);
    const inserttime = Inserttime();
    // const inserttime =() =>{
    //     navigation.navigate('History');
    // }

    const next = async () => {
        setPlay(false);
        await inserttime({ qr_id, job_description, timestamp : laps/1000 }, { token });
        return;
    }

    const start_time = async () => {
        setPlay(true);
        setStart(true);
        await inserttime({ qr_id, job_description, timestamp : laps/1000 }, { token });
        return;
    }
    

    if (time) {
        if (time.message == "working history list") {
            navigation.reset({
                index: 0,
                routes: [{ name: 'History' }],
              })
        }
    }

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.welcome}>{info.working_date}</Text>
                {/* <Text style={styles.underheader}>December</Text> */}
            </View>
            <View style={styles.modal}>
                <View style={styles.container1}>
                    <Timer time={timer} play={play} style={styles.timer} />
                    <View style={styles.time_button}>
                        <TouchableOpacity disabled={start} style={styles.button1} onPress={() => start_time()}>
                            <Text style={styles.text}>Start</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.button1} onPress={() => setPlay(!play)}>
                            {play ? 
                                <Text style={styles.text}>Pause</Text> :
                                <Text style={styles.text}>Continue</Text>
                            }
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.button1} disabled={!start} onPress={()=>next()}>
                            <Text style={styles.text}>End</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
            <View style={styles.bottomsection}>
                <BottomButton history={gotohistory} setting={getosetting} scan={gotoendScan} />
            </View>
        </SafeAreaView>
    )
}

export default Timetracker
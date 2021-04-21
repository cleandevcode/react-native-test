import React, { useEffect,Component, Fragment } from 'react';
import QRCodeScanner from 'react-native-qrcode-scanner';
import BottomButton from '../../../components/bottombutton'
import { Inserttime } from '../../../reducers/session/action';
import { useSelector } from 'react-redux'
import { connect } from 'react-redux';
import Images from '../../../config/images';
import styles from './style'
import {
    TouchableOpacity,
    Text,
    StatusBar,
    Linking,
    View, Image
} from 'react-native';
import { Dimensions } from "react-native";
const SCREEN_HEIGHT = Dimensions.get("window").height;
function Scanpage({ navigation }) {

    const token = useSelector(state => state.session.result.data.token);
    const info = useSelector(state => state.session.result.data);
    const [result, setResult] = React.useState(null);
    const [scan, setScan] = React.useState(true);
    const [ScanResult, setScanResult] = React.useState(false);
    const onSuccess = (e) => {
        const check = e.data;
        var tem = check.split('user_id_')
        var id = tem[1].split('_date');
        setResult(e)
        setScan(true)
        setScanResult(true)
        navigation.navigate('Description', {qr_id:id[0]});
        if (check === 'http') {
            setResult(e)
            setScan(true)
            setScanResult(true)

            // this.props.navigation.navigate('Timetracker');


        } else {
            setResult(e)
            setScan(false)
            setScanResult(true)
        }
    }

    const activeQR = () => {
        setScan(true)
    }

    const insertedtime = Inserttime();
    const scanAgain = () => {
        setScan(true)
        setScanResult(false)
    }

    const gotohistory = () => navigation.navigate('History');
    const getosetting = () => navigation.navigate('Settings');
    const gotoScan = () => navigation.navigate('Scanpage');

    return (
        <View style={styles.scrollViewStyle}>
            <Fragment>
                <StatusBar barStyle="dark-content" />
                {!scan &&

                    <View style={styles.container} >
                        <View style={styles.header}>
                            <Text style={styles.welcome1}>Welcome</Text>
                            <Text style={styles.underheader1}>{info.first_name}</Text>
                        </View>
                        <View style={styles.modal}>
                            <Text style={styles.welcome}>Scan an QR code</Text>
                            <Text style={styles.underheader}>Scan the QR code and turn on your time tracker</Text>
                            <TouchableOpacity onPress={activeQR} style={styles.buttonTouchable}>
                                <Image source={Images.bar} />
                            </TouchableOpacity>
                            <Text style={styles.process}>Scanning in process…</Text>
                        </View>
                        <View style={styles.itmelists}>
                            <BottomButton history={gotohistory}/>
                        </View>

                    </View>
                }




                {scan &&
                    <View style={styles.container} >
                        <View style={styles.header}>
                            <Text style={styles.welcome1}>Welcome</Text>
                            <Text style={styles.underheader1}>{info.first_name}</Text>
                        </View>
                        <View style={styles.modal}>
                            <QRCodeScanner style={styles.scanner}
                                onRead={onSuccess.bind(this)}
                                cameraStyle={{ height: SCREEN_HEIGHT * 0.3, width: SCREEN_HEIGHT * 0.1, marginLeft: '30%' }}
                                cameraProps={{ captureAudio: false }}

                            />
                            <Text style={styles.process}>Scanning in process…</Text>
                        </View>
                        <View style={styles.itmelists}>
                            <BottomButton/>
                        </View>

                    </View>
                }
            </Fragment>

        </View>

    );
}


export default Scanpage
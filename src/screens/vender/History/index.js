import React, { useEffect } from 'react';
import { View, Text, SafeAreaView, Image, TouchableOpacity, FlatList, Dimensions } from 'react-native';
import Images from '../../../config/images';
import { useSelector } from 'react-redux'
import BottomButton from '../../../components/bottombutton'
import { GetHistory } from '../../../reducers/session/action';
import Header from '../../../components/header'
import styles from './style';
const { width } = Dimensions.get('window')
function History({ navigation }) {
    useEffect(() => {
        const getResult = async () => {
            await gethistory({ token });
        };

        getResult();
    }, []);

    const token = useSelector(state => state.session.result.data.token);
    const history = useSelector(state => state.session.history.data);
    const data_tem = history;
    console.log("d",data_tem)
    const gethistory = GetHistory();
    const gotohistory = () => navigation.navigate('History')
    const goBack = () => navigation.reset({
        index: 0,
        routes: [{ name: 'Dashboard' }],
    })
    const getosetting = () => navigation.navigate('Settings');
    const gotoScan = () => navigation.navigate('Scanpage');


    const renderItem = ({ item, index }) => (
        <View style={styles.avatar_name}>
            <Image source={Images.bar} style={styles.avatar} />
            <View>
                {item.total_working_hours?
                <Text style={styles.font15}>{item.total_working_hours}</Text>
                :
                <Text style={styles.font15}>00 : 00 : 00</Text>
            }
                
                <Text style={styles.font12}>{item.in_time}</Text>
                <Text style={styles.font12}>{item.date}</Text>
            </View>
        </View>
    )
    return (
        <SafeAreaView style={styles.container}>
            <Header back={goBack} title='History' titleColor='#000000' left smallColor='rgba(45,45,45,0.5)' />
            {data_tem &&
                <View>
                    {data_tem.data ?
                        <View>
                            <Text>No history</Text>
                        </View> :
                        <FlatList
                            data={data_tem}
                            renderItem={renderItem}
                            horizontal={false}
                            keyExtractor={item => item.id.toString()}
                        />
                    }
                </View>
            }

            <View style={styles.itmelists}>
                <BottomButton setting={getosetting} scan={gotoScan} />
            </View>
        </SafeAreaView>
    )
}

export default History
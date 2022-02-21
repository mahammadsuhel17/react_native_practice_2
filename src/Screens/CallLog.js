import React, { useEffect, useState } from 'react';
import {
    Text, View, StyleSheet, FlatList, TouchableOpacity, Image, Linking, TextInput, Searchbar, findNodeHandle, InteractionManager
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import Call_Log from '../../Call_Log.json';
import moment from 'moment';
const CallLog = () => {

    const [Call, setcall] = useState(Call_Log);

    function getRandomColor() {
        var letters = '0123456789ABCDEF';
        var color = '#';
        for (var i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
    };

    const dialCall = (number) => {
        let phoneNumber = '';
        if (Platform.OS === 'android') { phoneNumber = `tel:${number}`; }
        else { phoneNumber = `telprompt:${number}`; }
        Linking.openURL(phoneNumber);
    };

    // var relative = moment().startOf('hour').fromNow();


    return (
        <View>

            <View style={styles.topbar}>
                <TextInput placeholder='Search Contacts'
                    style={styles.search}
                    onChangeText={() => { search() }} >
                </TextInput>
                <Icon
                    size={10} name="close" color="black" />
            </View>
            <FlatList
                data={Call}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => {
                    return (
                        <View style={styles.container}>
                            <View
                                style={{ ...styles.circle, backgroundColor: getRandomColor() }}>
                                <Text style={{ color: 'white', fontWeight: 'bold', fontSize: 20 }}>
                                    {item.name[0]}
                                </Text>
                            </View>

                            <View style={styles.name}>
                                <Text style={{ fontSize: 15, fontWeight: 'bold' }}>{item.name}</Text>
                                {/* <Text>{relative}</Text> */}

                            </View>

                            <View style={styles.CallButton}>
                                <TouchableOpacity
                                    onPress={() => dialCall(item.number)}
                                >
                                    <Image source={require('../../assets/Call.png')} >
                                    </Image>
                                </TouchableOpacity>
                            </View>
                        </View>

                    )
                }}
            >
            </FlatList>
        </View>
    )

}

const styles = StyleSheet.create(
    {
        container: {
            flexDirection: 'row',
            alignItems: "center",
            justifyContent: "space-between",
            borderBottomWidth: 0.5,
            borderColor: '#ccc',
            padding: 10
        },

        circle: {
            height: 55,
            width: 55,
            borderRadius: 55,
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center'
        },
        name: {
            flexDirection: 'row',
            flex: 2,
            alignItems: 'center',
            paddingLeft: 10,
            fontFamily: "Lato-Regular"
        },
        CallButton: {
            flex: 1,
            flexDirection: 'column',
            justifyContent: "space-between",
            alignItems: 'center',


        },
        Call: {
            height: 25,
            marginTop: 10,
            width: 50,
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: 'red',
            borderRadius: 10
        },
        topbar: {
            height: 100,
            backgroundColor: '#000099',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center'
        },
        search: {
            borderRadius: 9,
            backgroundColor: "white",
            width: 325,
            height: 40,
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'flex-end',

        }

    }
);

export default CallLog;


import React from 'react';
import {
    Text, View, TextInput, StyleSheet, Image, Button, TouchableOpacity
} from 'react-native';


const LoginScreen = () => {
    return (
        <View style={{ flex: 1 }}>
            <Image
                style={styles.emailIcon}
                source={require('../../assets/email.png')}></Image>

            <Image
                style={styles.passwordIcon}
                source={require('../../assets/lock.png')}></Image>

            <View style={styles.container}>
                <Text style={styles.text}>Login</Text>
                <TextInput
                    style={styles.textBox}
                    placeholder="Enter Your E-mail"
                ></TextInput>
                <TextInput
                    style={styles.textBox}
                    placeholder="Enter Your Password"
                ></TextInput>
            </View>
            {/* <View style={styles.loginButton}>
                <Button
                    title='LOGIN'
                    onPress={() => alert("login")}
                />
            </View> */}

            <TouchableOpacity style={styles.loginButton}>
                <Text
                  style={{fontSize:17, color:'white',marginTop:10,marginLeft:100}}
                    onPress={() => alert("login")}
                >LOGIN</Text>
            </TouchableOpacity>
        </View>
    )
};

const styles = StyleSheet.create({

    container: {
        marginTop: 180
    },
    textBox: {
        borderColor: 'black',
        borderWidth: 1,
        width: 250,
        height: 45,
        borderRadius: 7,
        paddingLeft: 40,
        marginTop: 20,
        marginLeft: 60
    },
    text: {
        fontSize: 40,
        fontFamily: 'Lato-Black',
        marginLeft: 130
    },
    emailIcon: {
        position: 'absolute',
        marginTop: 257,
        marginLeft: 70
    },
    passwordIcon: {
        position: 'absolute',
        marginTop: 320,
        marginLeft: 70
    },
    loginButton: {
        width: 250,
        height:45,
        marginTop: 60,
        marginLeft: 60,
        backgroundColor:'#656263',
        borderRadius:7
    }

})

export default LoginScreen;
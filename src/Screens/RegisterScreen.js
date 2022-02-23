import React, { useState } from "react";
import {
    Text, View, StyleSheet, TouchableOpacity, Image, ScrollView
} from 'react-native';
import ImagePicker from 'react-native-image-crop-picker';
import TextBox from "../Components/TextBox";

const isValidObjectField = (obj)=>{
return object.values(userInfo).every(value=>value.trim())
}

const updateError =(error , stateUpdater)=>{
stateUpdater(error);
setTimeout(()=>{
    stateUpdater('')
},  2500);
}

const isValidEmail =(value)=>{
    const regx = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:.[a-zA-Z0-9-]+)*$/;
    return regx.test(value)
}
const RegisterScreen = () => {
    const [userInfo, setUserInfo] = useState({
        user:'',
        fullName:'',
        email:'',
        password:'',
    })

    const [error, setError]= useState('')
    const {user, fullName, email, password}=userInfo  

    const handleOnChangeText =(value, fieldName)=>{
       setUserInfo({...userInfo, [fieldName]:value})

    };

    const isValidForm=()=>{
        //we will accept only if all of the fields have value
       if(!isValidObjectField(userInfo)) 
       return updateError('required all fields', setError)
       //if valid name with 3 or more charecters
       if(!fullName.trim()|| fullName.length<3) 
        return updateError('invalid name', setError)

       //only valid email is allowed
       if(!isValidEmail(email)) 
       return updateError('invalid email', setError)

       //password must have 8 or more charecters
       if(!password.trim()|| password.length<8)
        return updateError('password is less then 8 charecters', setError)

        return true;

    };

    
    const onSignUp = () => {
        if(isValidForm()){
            //submit form
        }

    }

const handleChange=(e)=>{
    console.log("fullname",e);
}

    return (
        <ScrollView style={{ backgroundColor: 'white', flex: 1 }}>
                <Text style={styles.regText}> Register </Text>
                <View style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                    <View style={styles.circle}>
                        <Image
                            style={{ height: 90, width: 90, borderRadius: 90 }}
                            source={require('../../assets/defoultProfile.png')}></Image>
                    </View>
                    <TouchableOpacity
                        onPress={() => changeImage()}
                    >
                        <Image
                            style={styles.editImage}
                            source={require('../../assets/profile_edit.png')}
                        />
                    </TouchableOpacity>
                </View>

                <View style={styles.container}>
                    {error ? <Text style={{color:'red', fontSize:18, textAlign:'center'}}> {error} </Text> : null}

                    <TextBox
                        autoCapitalize='none'
                        label="User Name"
                        value={user}
                        onChangeText={(value)=>handleOnChangeText(value,'user')}
                    />
                    <TextBox
                    handleChange={handleChange}
                        label="Full Name"
                        value={fullName}
                        onChangeText={(value)=>handleOnChangeText(value,'fullName')}

                    />
                    <TextBox
                        autoCapitalize='none'
                        label="Email"
                        value={email}
                        onChangeText={(value)=>handleOnChangeText(value,'email')}
                    />
                    <TextBox
                        secureTextEntry
                        autoCapitalize='none'
                        label="Password"
                        value={password}
                        onChangeText={(value)=>handleOnChangeText(value,'password')}
                    />

                    <TouchableOpacity
                        onPress={() => onSignUp()}
                        style={styles.signUP}
                    >
                        <Text style={{ fontSize: 20, color: 'white' }}>Sign Up</Text>
                    </TouchableOpacity>
                </View>

        </ScrollView>
    )
}

const styles = StyleSheet.create(
    {
        container: {
            flexDirection: "column",
            display: 'flex',
            justifyContent: 'center',
            alignItems: "center",
            marginTop: 70
        },
        circle: {
            height: 90,
            width: 90,
            borderRadius: 90,
            borderWidth: 1,
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            borderWidth: 2,
            borderColor: 'red'
        },
        regText: {
            fontSize: 40,
            marginBottom: 30,
            // display: 'flex',
            justifyContent: 'center',
            // alignItems: "center"
        },
        signUP: {
            justifyContent: 'center',
            alignItems: 'center',
            height: 45,
            width: '60%',
            backgroundColor: '#157DEC',
            borderRadius: 10,
            marginTop: 40
        },
        editImage: {
            height: 20,
            width: 20,
            position: 'absolute',
            bottom:0.5
        }
    }
);

export default RegisterScreen;




import React, { useState , useEffect} from "react";
import {
    Text, View, StyleSheet, TouchableOpacity, Image, ScrollView
} from 'react-native';
import ImagePicker from 'react-native-image-crop-picker';
import TextBox from "../Components/TextBox";

const RegisterScreen2 = () => {
    const [inputValues, setInputValue] = useState({
        user: "",
        fullName: "",
        email: "",
        password: "",
    });

    const [validation, setValidation] = useState({
        user: "",
        fullName: "",
        email: "",
        password: "",
    });

    //handle submit updates
     const handleChange=(e)=> {
        const { name, value } = e.target;
        setInputValue({ ...inputValues, [name]: value });
    }

    const checkValidation = () => {
        let errors = validation;

        //first Name validation
        if (!inputValues.user.trim()) {
            errors.user = "First name is required";
        } else {
            errors.user = "";
        }
        //last Name validation
        if (!inputValues.fullName.trim()) {
            errors.fullName = "Last name is required";
        } else {
            errors.fullName = "";
        }

        // email validation
        const emailCond =
            "/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:.[a-zA-Z0-9-]+)*$/";
        if (!inputValues.email.trim()) {
            errors.email = "Email is required";
        } else if (!inputValues.email.match(emailCond)) {
            errors.email = "Please ingress a valid email address";
        } else {
            errors.email = "";
        }

        //password validation
        const cond1 = "/^(?=.*[a-z]).{6,20}$/";
        const cond2 = "/^(?=.*[A-Z]).{6,20}$/";
        const cond3 = "/^(?=.*[0-9]).{6,20}$/";
        const password = inputValues.password;
        if (!password) {
            errors.password = "password is required";
        } else if (password.length < 6) {
            errors.password = "Password must be longer than 6 characters";
        } else if (password.length >= 20) {
            errors.password = "Password must shorter than 20 characters";
        } else if (!password.match(cond1)) {
            errors.password = "Password must contain at least one lowercase";
        } else if (!password.match(cond2)) {
            errors.password = "Password must contain at least one capital letter";
        } else if (!password.match(cond3)) {
            errors.password = "Password must contain at least a number";
        } else {
            errors.password = "";
        }

        //matchPassword validation
        if (!inputValues.confirmPassword) {
            errors.confirmPassword = "Password confirmation is required";
        } else if (inputValues.confirmPassword !== inputValues.Password) {
            errors.confirmPassword = "Password does not match confirmation password";
        } else {
            errors.password = " ";
        }

        setValidation(errors);
    };

    useEffect(() => {
        checkValidation();
    }, [inputValues]);

    const handleSubmit = (e) => {
        e.preventDefault();
    };


    // const [image, setImage] = useState('../../assets/defoultProfile.png');
    // const changeImage = () => {
    //     alert('hi')
    //     console.log('pressed');
    // }

    // const onSignUp = () => {
    //     alert('sign up successful')
    // }



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

                <TextBox
                    autoCapitalize='none'
                    label="User Name"
                    onChange={(e) => handleChange(e)}
                    value={inputValues.user}
                    
                />
                {/* <Text>
                {validation.user && {validation.user}}
                </Text>
                {validation.user && console.log(validation)} */}
                
                
                <TextBox
                    label="Full Name"
                    onChange={(e) => handleChange(e)}
                    value={inputValues.fullName}

                />
                <TextBox
                    autoCapitalize='none'
                    label="Email"
                    onChange={(e) => handleChange(e)}
                    value={inputValues.email}
                />
                <TextBox
                    secureTextEntry={true}
                    autoCapitalize='none'
                    label="Password"
                    onChange={(e) => handleChange(e)}
                    value={inputValues.password}
                />

                <TouchableOpacity
                    onPress={(e) => handleSubmit(e)}
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
            bottom: 0.5
        }
    }
);

export default RegisterScreen2;

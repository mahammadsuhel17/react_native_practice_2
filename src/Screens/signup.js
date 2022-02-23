import React, { useState,useContext,useFocusEffect } from "react";
import {
    Text, View, StyleSheet, TouchableOpacity, Image, ScrollView
} from 'react-native';
import ImagePicker from 'react-native-image-crop-picker';
import TextBox1 from "../Components/TextBox1";
import {GlobalContext} from '../../context/Provider';


const signup = () => {
    const [form, setForm] = useState({});
    const [errors, setErrors] = useState({});
    const {
        authDispatch,
        authState: { error, loading, data },
    } = useContext(GlobalContext);

    useFocusEffect(
        React.useCallback(() => {
            return () => {
                if (data || error) {
                    clearAuthState()(authDispatch);
                }
            };
        }, [data, error]),
    );

    const onChange = ({ name, value }) => {
        setForm({ ...form, [name]: value });

        if (value !== '') {
            if (name === 'password') {
                if (value.length < 6) {
                    setErrors((prev) => {
                        return { ...prev, [name]: 'This field needs min 6 characters' };
                    });
                } else {
                    setErrors((prev) => {
                        return { ...prev, [name]: null };
                    });
                }
            } else {
                setErrors((prev) => {
                    return { ...prev, [name]: null };
                });
            }
        } else {
            setErrors((prev) => {
                return { ...prev, [name]: 'This field is required' };
            });
        }
    };

    const onSubmit = () => {
        if (!form.userName) {
            setErrors((prev) => {
                return { ...prev, userName: 'Please add a username' };
            });
        }
        if (!form.fullName) {
            setErrors((prev) => {
                return { ...prev, firstName: 'Please add a  first name' };
            });
        }
        if (!form.email) {
            setErrors((prev) => {
                return { ...prev, email: 'Please add a email' };
            });
        }
        if (!form.password) {
            setErrors((prev) => {
                return { ...prev, password: 'Please add a password' };
            });
        }

        if (
            Object.values(form).length === 5 &&
            Object.values(form).every((item) => item.trim().length > 0) &&
            Object.values(errors).every((item) => !item)
        ) {
            register(form)(authDispatch)((response) => {
                navigate(LOGIN, { data: response });
            });
        }
    };



    // const handleChange=(e)=>{
    //     console.log("fullname",e);


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

            <TextBox1
                autoCapitalize='none'
                label="User Name"
                onChangeText={(value) =>
                    onChange({ name: 'user Name', value })}
                error={errors.userName || error?.username?.[0]}
            />
            <TextBox1
                handleChange={handleChange}
                label="Full Name"
                onChangeText={(value) =>
                    onChange({ name: 'Full Name', value })}
                error={errors.fullName || error?.full_name?.[0]}

            />
            <TextBox1
                autoCapitalize='none'
                label="Email"
                onChangeText={(value) =>
                    onChange({ name: 'Email', value })}
                error={errors.email || error?.email?.[0]}
            />
            <TextBox1
                secureTextEntry={true}
                autoCapitalize='none'
                label="Password"
                onChangeText={(value) =>
                    onChange({ name: 'Password', value })}
                error={errors.password || error?.password?.[0]}
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
};

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

export default signup;


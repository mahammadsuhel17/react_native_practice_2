import React from 'react';
import {
    View, Text, TextInput, StyleSheet
} from 'react-native';
import { FloatingLabelInput } from 'react-native-floating-label-input';


const TextBox = ({ props }) => {
    const {label}=props;
    return (
        <View style={styles.textBoxContainer}>
            <TextInput
            onChange={()=>{handleChange(e)}}
                style={styles.textBox}
            />
             <Text style={styles.label}>{label} </Text>
            
        </View>
    )
};

const styles = StyleSheet.create({
    textBox: {
        marginLeft: 20
    },
    textBoxContainer: {
        height: 40,
        minWidth: '80%',
        borderWidth: 1,
        borderColor: '#606060',
        borderRadius: 20,
        marginBottom:30,

    },
    label: {
        color: 'black',
        backgroundColor: 'white',
        position: "absolute", 
        marginLeft:25,
        marginBottom:20,
        bottom:10,
        paddingLeft:5,
        paddingRight:5
        
    }
})

export default TextBox;


// textBox: {
//     margin: 15,
//     height: 40,
//     minWidth: '80%',
//     borderWidth: 1,
//     borderColor: '#606060',
//     borderRadius: 20,
//     placeholderTextColor: 'blue',
//     borderWidth: 1,
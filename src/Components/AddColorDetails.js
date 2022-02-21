import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const AddColorDetails = props => {
    return (
        <View>
            <Text style={styles.colorText}>{props.color}</Text>
            <View style={styles.button}>
                <Button
                    onPress={() => props.onIncrease()}
                    title={`Increase ${props.color}`} />
            </View>

            <View style={styles.button}>
                <Button
                    onPress={() => props.onDecrease()}
                    title={`Decrease ${props.color}`} />
            </View>
        </View>
    )
};

const styles=StyleSheet.create({
     button:{
         paddingTop:5
     },
     colorText:{
         fontSize:20,
         fontWeight:'bold',
         padding:0,
         marginLeft:150,

     }
})

export default AddColorDetails;
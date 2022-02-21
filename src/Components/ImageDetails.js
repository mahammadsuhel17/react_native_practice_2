import React from 'react';
import {
    View,Image,Text
}from 'react-native';

const ImageDetails = props =>{
    return(
        <View>
            <Image source={props.imageSource} />
            <Text> {props.title} </Text>
            <Text> {props.score} </Text>
        </View>
    )
};

export default ImageDetails;
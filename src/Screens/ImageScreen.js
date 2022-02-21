//**** concept of reusable component ****//


import React from 'react';
import {
    Text, View, StyleSheet,Image
} from 'react-native';
import ImageDetails from '../Components/ImageDetails';

const ImageScreen = () => {
    return (
        <View style={styles.styles}>
            <ImageDetails
                title="Forest"
                imageSource={require('../../assets/forest.jpg')}
            />

            <ImageDetails
                title="Beach"
                imageSource={require('../../assets/beach.jpg')}
            />

            <ImageDetails
                title="Mountain"
                imageSource={require('../../assets/mountain.jpg')}
            />

        </View>
    );


};
const styles = StyleSheet.create({
    styles: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    }

})
export default ImageScreen;

import { StyleSheet, Text, View, Image, TouchableOpacity, SafeAreaView } from 'react-native';
import React from 'react';
// import { SafeAreaView } from 'react-native-safe-area-context';

const PopUp = (props) => {
  const {imageSource,onPress}=props;
  console.log("props",props);
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.closeicon}>
        <TouchableOpacity 
        onPress={()=>onPress()}
        style={{padding:20}}>
          <Image source={require('../../assets/CloseIcon.png')} />
        </TouchableOpacity>
      </View>
      <View style={{flex:1, justifyContent:'center',alignItems:'center'}}>
        <Image 
        style={styles.image}
        source={imageSource}/>
      </View>
    </SafeAreaView>
  );
};

export default PopUp;

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    position: 'absolute',
    zIndex: 10,
    backgroundColor: '#000000CC',
    display: 'flex',
    justifyContent: 'space-around',
    alignItems:'center'
  },
  closeicon: {
    width:'100%',
    // height: 40,
    alignItems: 'flex-end',
    justifyContent: 'flex-end',
    // borderWidth:1,
    // borderColor:'red'
    // paddingHorizontal:10
  },
  image: {
    resizeMode:'contain',
    height:200
    
   
  },
});

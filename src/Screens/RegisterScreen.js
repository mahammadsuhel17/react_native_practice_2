import React, {useState} from 'react';
import {useNavigation} from '@react-navigation/native';
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  Image,
  ScrollView,
  Alert,
} from 'react-native';
import TextBox from '../Components/TextBox';
import LoginScreen from './LoginScreen';
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';
import defoultProfile from '../../assets/defoultProfile.png';
import ImageModal from 'react-native-image-modal';
import PopUp from '../Components/PopUp';

const isValidObjectField = obj => {
  return Object.values(obj).every(value => value.trim());
};
const isValidEmail = value => {
  const regx =
    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:.[a-zA-Z0-9-]+)*$/;
  return regx.test(value);
};
const updateError = (error, stateUpdater) => {
  stateUpdater(error);
  setTimeout(() => {
    stateUpdater('');
  }, 2500);
};

const RegisterScreen = () => {
  const navigation = useNavigation();

  const [userInfo, setUserInfo] = useState({
    user: '',
    fullName: '',
    email: '',
    password: '',
  });
  const {user, fullName, email, password} = userInfo;
  const [error, setError] = useState('');
  const [showPopup, setshowPopup] = useState(false);
  const [imageUriGallary, setimageUriGallary] = useState(defoultProfile);

  const handleOnChangeText = (value, fieldName) => {
    setUserInfo({...userInfo, [fieldName]: value});
  };

  const isValidForm = () => {
    //we will accept only if all of the fields have value
    if (!isValidObjectField(userInfo))
      return updateError('required all fields', setError);
    //if valid name with 3 or more charecters
    if (!fullName.trim() || fullName.length < 3)
      return updateError('invalid name', setError);

    //only valid email is allowed
    if (!isValidEmail(email)) return updateError('invalid email', setError);

    //password must have 8 or more charecters
    if (!password.trim() || password.length < 8)
      return updateError('password is less then 8 charecters', setError);
    return true;
  };
  //form submition
  const submitForm = () => {
    if (isValidForm()) {
      navigation.navigate(LoginScreen);
    }
  };
  // image picker section
 

  const openCamara = () => {
    const options = {
      storageOptions: {
        path: 'images',
        mediaType: 'photo',
      },
      includeBase64: true,
    };

    launchCamera(options, response => {
      if (response.didCancel) {
      } else if (response.error) {
      } else if (response.customButton) {
      } else {
        // You can also display the image using data:
        const source = {uri: response.uri};
        console.log(response);
        // const source = response;
        setimageUriGallary(source);
      }
    });
  };

  const openGallery = () => {
    const options = {
      storageOptions: {
        path: 'images',
        mediaType: 'photo',
        quality: 1,
      },
      includeBase64: true,
    };

    launchImageLibrary(options, response => {
      if (response.didCancel) {
      } else if (response.error) {
      } else if (response.customButton) {
      } else {
        const source = {uri: response.assets[0].uri};
        setimageUriGallary(source);
      }
    });
  };
  const checkImageSet = () => {
    if (imageUriGallary == defoultProfile) {
      Alert.alert(
        //This is title
        'Hello',
        //This is body text
        'please Select.',
        [
          {text: 'camera', onPress: () => openCamara()},
          {text: 'Gallery', onPress: () => openGallery()},
        ],
        {cancelable: true},
        //on clicking out side, Alert will not dismiss
      )
    }
    else{
      showPopup(true);
    }
  };

  return (
      <>
    <ScrollView style={{backgroundColor: 'white', flex: 1}}>
      <Text style={styles.regText}> Register </Text>
      <View
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <View style={styles.circle}>
          {/* <Image
                        style={{ height: 110, width: 110, borderRadius:110 , resizeMode:'cover'}}
                        source={imageUriGallary}
                    />
                */}

          <TouchableOpacity
          
          onPress={() => checkImageSet()}>
            <Image
              imageBackgroundColor="#ffffff"
              style={{
                height: 110,
                width: 110,
                borderRadius: 110,
              }}
              source={imageUriGallary}
            />
          </TouchableOpacity>
        </View>
        <TouchableOpacity
          onPress={() => {
            Alert.alert(
              //This is title
              'Hello',
              //This is body text
              'please Select.',
              [
                {text: 'camera', onPress: () => openCamara()},
                {text: 'Gallery', onPress: () => openGallery()},
              ],
              {cancelable: true},
              //on clicking out side, Alert will not dismiss
            );
          }}>
          <Image
            style={styles.editImage}
            source={require('../../assets/profile_edit.png')}
          />
        </TouchableOpacity>
      </View>
      <View
        style={{
          position: 'absolute',
          marginTop: 200,
          marginLeft: 90,
          paddingBottom: 20,
        }}>
        {/* showing error msg */}
        {error ? (
          <Text style={{color: 'red', fontSize: 18, textAlign: 'center'}}>
            {' '}
            {error}{' '}
          </Text>
        ) : null}
      </View>

      <View style={styles.container}>
        <TextBox
          autoCapitalize="none"
          label="User Name"
          value={user}
          onChangeText={value => handleOnChangeText(value, 'user')}
        />
        <TextBox
          label="Full Name"
          value={fullName}
          onChangeText={value => handleOnChangeText(value, 'fullName')}
        />
        <TextBox
          autoCapitalize="none"
          label="Email"
          value={email}
          onChangeText={value => handleOnChangeText(value, 'email')}
        />
        <TextBox
          secureTextEntry
          autoCapitalize="none"
          label="Password"
          value={password}
          onChangeText={value => handleOnChangeText(value, 'password')}
        />

        <TouchableOpacity onPress={() => submitForm()} style={styles.signUP}>
          <Text style={{fontSize: 20, color: 'white'}}>Sign Up</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
    {showPopup&&<PopUp 
    onPress={()=>setshowPopup(false)}
    imageSource={imageUriGallary}
    />}
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 70,
  },
  circle: {
    height: 110,
    width: 110,
    borderRadius: 110,
    borderWidth: 1,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    // borderWidth: 2,
    // borderColor: 'red'
  },
  regText: {
    fontSize: 40,
    marginBottom: 30,
    justifyContent: 'center',
  },
  signUP: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 45,
    width: '60%',
    backgroundColor: '#157DEC',
    borderRadius: 10,
    marginTop: 40,
  },
  editImage: {
    height: 25,
    width: 25,
    position: 'absolute',
    marginLeft: 15,
    bottom: 1,
  },
  popup: {
    height: '100%',
    width: '100',
  },
});

export default RegisterScreen;

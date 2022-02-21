import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import TimeScreen from './TimeScreen';
import HomeScreen from './HomeScreen';
import ImageScreen from './ImageScreen';
import AddColorScreen from './AddColorScreen';
import LoginScreen from './LoginScreen';
import FlatListScreen from './Falatlist';



const Stack = createNativeStackNavigator();

function Routs() {
    return (
      <NavigationContainer >
        <Stack.Navigator screenOptions={{headerShown: false}}>
          <Stack.Screen name="HomeScreen" component={HomeScreen} />
          <Stack.Screen name="TimeScreen" component={TimeScreen} />
          <Stack.Screen name="FlatListScreen" component={FlatListScreen} />
          <Stack.Screen name="ImageScreen" component={ImageScreen} />
          <Stack.Screen name="AddColorScreen" component={AddColorScreen} />
          <Stack.Screen name="LoginScreen" component={LoginScreen} />
      </Stack.Navigator>
      </NavigationContainer>
    )
  };
  
  export default Routs;
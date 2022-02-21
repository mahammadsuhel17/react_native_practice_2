//**** concept of State  ****//


import React, { useState, useEffect } from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import moment from "moment";


const TimeScreen = () => {
  const Theme = {
    dark: {
      backgroundColor: '#1A1A40',
      color: '#EFEFEF',
      flex:1
    },
    light: {
      backgroundColor: '#ffffff',
      color: '#151515',
      flex:1
    }
  }

  const [dt, setDt] = useState(time);
  const [dark, setDark] = useState(false)

  useEffect(() => {
    let secTimer = setInterval(() => {
      setDt(new Date().toLocaleString())
    }, 1000)
  }, []);

  var date = moment()
    .utcOffset('+05:30')
    .format('Do  MMMM  YYYY');

  var time = moment()
    .utcOffset('+05:30')
    .format('hh:mm');

  var amPm = moment()
    .utcOffset('+05:30')
    .format('A');

  var day = moment()
    .utcOffset('+05:30')
    .format('dddd');

  return (
    <View style={dark?{...Theme.dark}:{...Theme.light}}>
      <View style={styles.image} >
        <TouchableOpacity onPress={() => {setDark(!dark) }}>
          <Image source={!dark?require('../../assets/day.png'):require('../../assets/night.png')} />
        </TouchableOpacity>
      </View>
      <View> 
        <Text style={[{...styles.date},dark?{color:Theme.dark.color}:{color:Theme.light.color}]}>{date}</Text>
        <Text style={[{...styles.day},dark?{color:Theme.dark.color}:{color:Theme.light.color}]}>{day}</Text>
        <Text style={[{...styles.Time},dark?{color:Theme.dark.color}:{color:Theme.light.color}]}>{time}</Text>
        <Text style={[{...styles.amPm},dark?{color:Theme.dark.color}:{color:Theme.light.color}]}>{amPm}</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  Time: {
    fontSize: 60,
    marginLeft: 97,
    marginTop: 10,
    fontFamily: 'Lato-Regular'
  },

  date: {
    fontSize: 18,
    marginLeft: 100,
    marginTop: 80,
    fontFamily: 'Lato-Light'
  },
  image: {
    height: 30,
    width: 30,
    marginLeft: 310,
    marginTop: 10,
    transform: [{ rotate: "45deg" }],
  },
  amPm: {
    transform: [{ rotate: "-90deg" }],
    marginTop: 135,
    marginLeft: 245,
    position: 'absolute',
    fontFamily: 'Lato-Light',
    fontSize: 20
  },
  day: {
    position: "absolute",
    marginTop: 100,
    marginLeft: 145,
  }
})

export default TimeScreen;



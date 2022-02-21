
import React, { useState, useEffect } from "react";
import {
  View, FlatList, Text, StyleSheet, Image, TouchableOpacity
} from 'react-native';
import data from '../../data.json'

const FlatListScreen = () => {
  const [userdata, setuserData] = useState(data);
  const removeItem = (id) => {
    console.log("id",id);
      let newuser=userdata.filter((val, i)=>
      {
        if(val.id!==id){
          // console.log("vlue",val)
          return val
        }
      }

      )
          console.log("newuser",newuser)
      setuserData(newuser);
    }
  function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }
  return (


    <FlatList
      data={userdata}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => {
        return (

          <View style={styles.container}>

            <View
              style={{ ...styles.circle, backgroundColor: getRandomColor() }}>
              <Text style={{ color: 'white', fontWeight: 'bold' , fontSize:20}}>
                {item.id}
              </Text>
            </View>

            <View style={styles.title}>
              <Text style={{ fontSize: 15, fontWeight: 'bold' }}>{item.title}</Text>
            </View>

            <View style={styles.checkBox}>
              <Image
                source={item.completed ? require('../../assets/check.png') : require('../../assets/cross.png')}
                style={{ height: 20, width: 20 }}
              ></Image>

              <TouchableOpacity
                style={styles.delete}
                onPress={() => removeItem(item.id)} >
                <Text style={{ color: 'white',}}>Delete</Text>
              </TouchableOpacity>
            </View>
          </View>
        )
      }}
    >
    </FlatList >

  )
};

const styles = StyleSheet.create({
  title: {
    flexDirection: 'row',
    flex: 2,
    alignItems: 'center',
    paddingLeft: 10
  },

  circle: {
    height: 65,
    width: 65,
    borderRadius: 65,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  },
  checkBox: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: "space-between",
    alignItems: 'center',


  },
  container: {
    flexDirection: 'row',
    alignItems: "center",
    justifyContent: "space-between",
    borderBottomWidth: StyleSheet.hairlineWidth,
    padding: 10
  },
  delete: {
    height: 25,
    marginTop:10,
    width: 50,
    display:'flex',
    justifyContent:'center',
    alignItems:'center',
    backgroundColor: 'red',
    borderRadius: 10

  }
})

export default FlatListScreen;

import React from 'react';
import { Text, StyleSheet, View, Button, TouchableOpacity } from 'react-native';
import {Navigation} from 'react-native-navigation';

const BoxScreen = () =>{

   return(
    <View style = {styles.viewStyle}>
          <View style = {styles.viewOneStyle}>
           <Text style = {styles.textOneStyle}></Text>
           <Text style = {styles.textTwoStyle}></Text>
           <Text style = {styles.textThreeStyle}></Text>

           

           </View>
          
       
       </View>
   )
};

const styles = StyleSheet.create ({

    viewStyle:{
        borderWidth:3,
        borderColor: 'black',
        height: 155,
       
    },
    viewOneStyle:{
        height: 200,
        flexDirection:'row',
        justifyContent:'space-between'
    },
    viewTwoStyle:{
        height: 200,
        justifyContent: 'center'
    },
    viewThreeStyle:{
        height: 200,
    },
    textOneStyle:{
        borderWidth: 3,
        borderColor: 'red',
        backgroundColor: 'red',
        height:50,
        width:50,
    },
    textTwoStyle:{
        borderWidth: 3,
        borderColor: 'green',
        backgroundColor: 'green',
        height:50,
        width:50,
        top: 100
    },
    textThreeStyle:{
        borderWidth: 3,
        borderColor: 'purple',
        backgroundColor: 'purple',
        height:50,
        width:50,

    }
});

export default BoxScreen;
/*import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const BoxScreen = () => {
  return (
    <View style={styles.viewStyle}>
      <View style={styles.viewOneStyle} />
      <View style={styles.viewTwoStyle} />
      <View style={styles.viewThreeStyle} />
    </View>
  );
};

const styles = StyleSheet.create({
  viewStyle: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    height: 120
  },
  viewOneStyle: {
    backgroundColor: 'red',
    height: 60,
    width:100
  },
  viewTwoStyle: {
    backgroundColor: 'green',
    height: 60,
    width:100,
    alignSelf:'flex-end'
  },
  viewThreeStyle: {
    backgroundColor: 'purple',
    height: 60,
    width:100
  }
});

export default BoxScreen;*/
import React, { useState } from 'react';
import{ StyleSheet, View,TextInput,Text} from 'react-native';
import{Colors} from '../assets/Colors';
import {
    responsiveHeight,
    responsiveWidth,
    responsiveFontSize,
    useResponsiveFontSize
  } from "react-native-responsive-dimensions";


const TextScreen = (Props) => {
    const [name, setName] = useState('');
    return (
      <View>
           <TextInput style={styles.textInput}
           placeholder= {'Enter your name...'}
           secureTextEntry= {false}
           autoCorrect={false}
           onChangeText= {(Value) => setName(Value)}
           />
           <Text>  my name is {name}</Text>

      </View>
    );
  
    
  };
  const styles = StyleSheet.create({
    textInput:{
        borderWidth: 0.5,
        borderColor:Colors.orangeBorderColor,
        borderRadius: responsiveWidth(3),
        paddingVertical: 5,
        fontSize:responsiveFontSize(1.8),
        fontFamily:'PlayfairDisplay-Bold',
        width: responsiveWidth(80) ,
        paddingHorizontal: responsiveWidth(3) ,
    },
  });
  
  export default TextScreen;
  

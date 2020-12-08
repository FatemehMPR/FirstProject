import React, { useState } from 'react';
import{Text, StyleSheet, View, Image, TextInput,Button,TouchableHighlight,TouchableWithoutFeedback,TouchableOpacity, Alert} from 'react-native';
import{String} from '../assets/String';
import{Colors} from '../assets/Colors';
import{LoginImage} from '../Constant';
import CustomBtn from '../Components/CustomBtn';
import {PushToScreen} from '../function/myNavigation';
import{setSideMenuVisibility} from '../function/myNavigation';

import{closeIcon} from '../Constant';
import { 
    responsiveHeight,
    responsiveWidth,
    responsiveFontSize,
    useResponsiveFontSize
  } from "react-native-responsive-dimensions";


const SideMenu = (Props) =>{
    console.log('Props', Props);


    return (

 <View style={SideMenuStyles.container}>

    <TouchableOpacity style={SideMenuStyles.closeBtn} onPress={() =>
        setSideMenuVisibility(Props.componentId, false, true)}>

        <Image style={SideMenuStyles.closeImg} source={closeIcon}/>

    </TouchableOpacity>
    <TouchableOpacity onPress ={ () => PushToScreen('myHomeId' , 'myLogin', null,false,false)}>
        <Text style = {{color : 'white' ,fontSize: 20, alignSelf:'center'}}>Login</Text>
    </TouchableOpacity>
        </View>
    )
};
const SideMenuStyles = StyleSheet.create({

    closeBtn: {
        marginHorizontal: responsiveWidth(4),
        marginVertical: responsiveHeight(2),
    },
    closeImg: {
        width: responsiveWidth(4),
        height: responsiveWidth(4),
    },
});

export default SideMenu;
import React from 'react';
import {View,StyleSheet, Text,Image, TouchableOpacity} from 'react-native';
import {responsiveHeight, responsiveScreenFontSize, responsiveWidth} from 'react-native-responsive-dimensions';
import {Colors} from '../assets/Colors';
import {menuIcon} from '../Constant';

const CustomTopBar = ({icon, onBtnClick}) => { 

    return (

        <View style={topBarStyles.container}>

            <TouchableOpacity style={topBarStyles.img} onPress={onBtnClick}>
                <Image style={topBarStyles.img} source={icon}/>
            </TouchableOpacity>

        </View>
    );

};

export default CustomTopBar;

const topBarStyles = StyleSheet.create({

    container: {
        height: responsiveHeight(10),
        backgroundColor: Colors.btnColor,
        borderBottomRightRadius: 10,
        borderBottomLeftRadius: 10,
        justifyContent:'center',
        paddingHorizontal: responsiveWidth(4),
    },
    img: {
        width: responsiveWidth(6),
        height: responsiveWidth(6),
    },
});
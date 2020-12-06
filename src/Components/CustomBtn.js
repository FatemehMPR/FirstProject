import React from 'react';
import{Text, StyleSheet, View, Image,TouchableOpacity, Alert} from 'react-native';
import{String} from '../assets/String';
import{Colors} from '../assets/Colors';
import{LoginImage} from '../Constant';
import {
  responsiveHeight,
  responsiveWidth,
  responsiveFontSize,
  useResponsiveFontSize
} from "react-native-responsive-dimensions";

const CustomBtn = (Props) =>{

    return(
        <TouchableOpacity  
            activeOpacity={0.5}
            underlayColor={Colors.orangeColor}
            style={{width:responsiveWidth(80) , marginTop:responsiveWidth(3)  }}
            onPress = {Props.BtnOnPress}
            >
                <Text style={styles.btnText}>
                {Props.BtnTitle}
                </Text>
                </TouchableOpacity>


    );
};


const styles = StyleSheet.create({
   
    btnText:{
        backgroundColor: Colors.btnColor,
        color: '#ffffff',
        padding: responsiveWidth(3) ,
        textAlign: 'center',
        borderRadius: responsiveWidth(3) ,
        fontFamily:'PlayfairDisplay-Bold'
    }
}
);

export default CustomBtn;
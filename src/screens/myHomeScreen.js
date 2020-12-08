import React from 'react';
import {View , Text, Alert} from 'react-native';
import CustomTopBar from '../Components/CustomTopBar';
import{menuIcon} from '../Constant';
import{setSideMenuVisibility} from '../function/myNavigation';

const myHomeScreen = (Props) =>{

    return(
        <View>
            <CustomTopBar icon = {menuIcon} 
            onBtnClick = { () =>setSideMenuVisibility(Props.componentId , true ,true)}/>
            <Text>{Props.userName}</Text>
        </View>
    )
}; 

export default myHomeScreen;
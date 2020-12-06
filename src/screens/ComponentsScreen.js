import React from 'react';
import {Text, StyleSheet,View} from 'react-native';

const ComponentsScreen = () =>{

    const greeting = 'Geting started with React Native!';
    const greeting2 = 'My name is Fatemeh';
    return (
        <View>
        <Text style = {styles.textStyle}>{greeting}</Text>
        <Text style = {styles.textStyle2}>{greeting2}</Text>
      
        </View>
    );
    //<Text style = {styles.textStyle}>This is the components screen!</Text>; //JSX
     /* <Text style = {styles.textStyle2}>This is the 2components screen!
        This is the 2components screen!
        This is the 2components screen!
        This is the 2components screen!
        This is the 2components screen!
        This is the 2components screen!</Text>*/
};

const styles = StyleSheet.create({

    textStyle:{
        fontSize : 45,
        color : 'red',
       // fontStyle:'italic',
       // fontWeight:'bold',
       fontFamily:'PlayfairDisplay-SemiBoldItalic'

    },
    textStyle2:{
        fontSize :20,
        color : 'green',
        fontStyle:'normal',
        lineHeight:50,
        letterSpacing:0.5,
        fontFamily:'PlayfairDisplay-Bold'


    }
});

export default ComponentsScreen;
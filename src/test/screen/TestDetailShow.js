import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, FlatList, Image, ImagePropTypes } from 'react-native';


const TestDetailShow = (Props) =>{
    return(
        <View style={{alignItems: 'center', flex:1 }}>
            <Text style={styles.tex}>ID : {Props.userName} </Text>
        </View>
    )
}

const styles = StyleSheet.create({

    tex:{
      
        justifyContent: 'center',
        alignContent: 'center',
        marginTop: 200,
        fontSize: 50,
        fontWeight: 'bold',
        color: 'red'
       

    }
})

export default TestDetailShow;

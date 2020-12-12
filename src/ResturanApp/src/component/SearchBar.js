import React from 'react';
import {Text, View, StyleSheet, TextInput, Image} from 'react-native';
import{search} from '../Constant';


const  SearchBar= ({ term, onTermChange, onTermSubmit  }) =>{

    return(
        <View style= {styles.backgroundStyle}>
        <Image style={styles.iconStyle} source={search}/>
        <TextInput
        autoCapitalize="none"
        autoCorrect={false}
        style={styles.inputStyle}
        placeholder="Search"
        value={term}
        onChangeText={onTermChange}
        onEndEditing={onTermSubmit}
       
      />
        </View>
    )
};

const styles = StyleSheet.create({
    backgroundStyle: {
      marginTop: 10,
      backgroundColor: '#F0EEEE',
      height: 50,
      borderRadius: 5,
      marginHorizontal: 15,
      flexDirection: 'row',
      marginBottom:10
    },
    inputStyle: {
      flex: 1,
      fontSize: 18
    },
    iconStyle: {
      width:30,
      height:30,
      alignSelf: 'center',
      marginHorizontal: 15
    }
  });

export default SearchBar;
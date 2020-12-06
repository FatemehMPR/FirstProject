import React from 'react';
import {View,Text,StyleSheet,FlatList} from 'react-native';

const ListScreen = () => {
    const friends = [
        
        {name: 'Ali' ,  age : 20 },
        {name: 'Zahra' , age : 45 },
        {name: 'Soheil' , age :32 },
        {name: 'Sahar' , age : 27 },
        {name: 'Mohammad' , age :53},
        {name: 'Mehran' , age : 30},
    ];
   // return <Text>List Screen</Text>;
   return(
       <FlatList
       //horizontal = {true}
       keyExtractor = {friends => friends.name}
       data = {friends}
       renderItem = {({item}) =>{
           return <Text style = {styles.textStyle}>{item.name} - Age{item.age} </Text>;
       }
     }
     />
   );

};

const styles = StyleSheet.create({
    textStyle : {
        marginVertical : 50
    }
});

export default ListScreen;
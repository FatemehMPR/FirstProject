import React from 'react';
import { View, Image, Text, StyleSheet } from 'react-native';

const TestDetial = ({ result }) => {
    //console.log('fati',result.List[0].Id);

  return (
    <View style = {styles.continer}>
     <Image style={styles.image} source={{ uri: result.Picture.Url }} />
      <Text style={styles.name}>Name: {result.Name}</Text>
      <Text style={styles.id}>ID: {result.Id}</Text>
      <Text>Phone: {result.Phone}</Text>
      <Text>Email: {result.Email} </Text>
    </View>
  );
};

const styles = StyleSheet.create({
    continer:{
        marginLeft: 15
    },
    image: {
        width: 100,
        height: 80,
        borderRadius: 4,
        marginBottom:5,
        marginTop: 10
        
      },
      name: {
        fontWeight: 'bold'
      },id: {
        fontWeight: 'bold',
        color: 'red'
      }
});

export default TestDetial;

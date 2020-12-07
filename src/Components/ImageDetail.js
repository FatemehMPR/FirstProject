import React from 'react';
import { Text, StyleSheet, View, Image,Button, TouchableOpacity } from 'react-native';

const ImageDetail = (Props) => {
    return (
      <View>
           <Image source = {Props.image}/>
          <Text style={styles.text}>{Props.title}</Text>
      </View>
    );
  };
  const styles = StyleSheet.create({
    
  });
  
  export default ImageDetail;
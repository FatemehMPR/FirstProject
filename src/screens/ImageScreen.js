import React from 'react';
import { Text, StyleSheet, View, Button, TouchableOpacity } from 'react-native';
import ImageDetail from '../Components/ImageDetail';
import{forestImage} from '../Constant';
import{mountainImage} from '../Constant';
import{beachImage} from '../Constant';


const ImageScreen = () => {
    return (
      <View>
          <ImageDetail title = "forest" image ={forestImage} />
          <ImageDetail title = "mountain" image={mountainImage}/>
          <ImageDetail title = "beach"  image={beachImage}/>
          
      </View>
    );
  };
  const styles = StyleSheet.create({
    
  });
  
  export default ImageScreen;
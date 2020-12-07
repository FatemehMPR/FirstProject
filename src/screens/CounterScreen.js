import { Text, StyleSheet, View, Button, TouchableOpacity } from 'react-native';
import { State } from 'react-native-gesture-handler';
import React, { useState } from 'react';


const CounterScreen = (Props) => {
    const [counter, setCounter] = useState(0);
  return (
    <View>
      
      <Button title="Increase"
        onPress={() =>  
         {
             setCounter(counter+1);
         } 
        }
      />
      <Button title="Decrease"
        onPress={() =>  
         {setCounter(counter-1);
         } } 
        
      />
      <Text style={styles.text}>Counter Screen = {counter}</Text>
     
    </View>
  );
};
const styles = StyleSheet.create({
  
});

export default CounterScreen;
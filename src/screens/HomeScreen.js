import React from 'react';
import { Text, StyleSheet, View, Button, TouchableOpacity } from 'react-native';
import {Navigation} from 'react-native-navigation';

const HomeScreen = (Props) => {
  return (
    <View>
      
      <Text style={styles.text}>Hello</Text>
      <Button
        onPress={() =>  Navigation.push(Props.componentId ,
          {
              component:{
                name: 'myComponentSreen',
                  passProps:{
                      myComponentId: Props.componentId,
                     
      
                  }
              }
          } )
          
        }
        title="Go to Components Demo"
      />

<Button
        onPress={() =>  Navigation.push(Props.componentId ,
          {
              component:{
                name: 'myListSreen',
                  passProps:{
                      myComponentId: Props.componentId,
                     
      
                  }
              }
          } )
          
        }
        title="Go to List Demo"
      />
     
    </View>
  );
};
const styles = StyleSheet.create({
  text: {
    fontSize: 30
  }
});

export default HomeScreen;

//<Text style={styles.text}>{Props.userName}</Text>
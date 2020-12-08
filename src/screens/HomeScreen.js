import React from 'react';
import { Text, StyleSheet, View, Button, TouchableOpacity } from 'react-native';
import {Navigation} from 'react-native-navigation';

const HomeScreen = (Props) => {
  console.log('Props', Props);
  return (
    <View>
      
      <Text style={styles.text}>{Props.userName}</Text>
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
     

     <Button
        onPress={() =>  Navigation.push(Props.componentId ,
          {
              component:{
                name: 'myImageScreen',
                  passProps:{
                      myComponentId: Props.componentId,
                     
      
                  }
              }
          } )
          
        }
        title="Go to Image Screen Demo"
      />
     
     <Button
        onPress={() =>  Navigation.push(Props.componentId ,
          {
              component:{
                name: 'myCounterScreen',
                  passProps:{
                      myComponentId: Props.componentId,
                     
      
                  }
              }
          } )
          
        }
        title="Go to Counter Screen Demo"
      />
     
     <Button
        onPress={() =>  Navigation.push(Props.componentId ,
          {
              component:{
                name: 'myColorScreen',
                  passProps:{
                      myComponentId: Props.componentId,
                     
      
                  }
              }
          } )
          
        }
        title="Go to Color Screen Demo"
      />
<Button
        onPress={() =>  Navigation.push(Props.componentId ,
          {
              component:{
                name: 'mySquareScreen',
                  passProps:{
                      myComponentId: Props.componentId,
                     
      
                  }
              }
          } )
          
        }
        title="Go to Square Screen Demo"
      />
<Button
        onPress={() =>  Navigation.push(Props.componentId ,
          {
              component:{
                name: 'myReducerSquareScreen',
                  passProps:{
                      myComponentId: Props.componentId,
                     
      
                  }
              }
          } )
          
        }
        title="Go to Reducer Square Screen Demo"
      />
<Button
        onPress={() =>  Navigation.push(Props.componentId ,
          {
              component:{
                name: 'myTextScreen',
                  passProps:{
                      myComponentId: Props.componentId,
                     
      
                  }
              }
          } )
          
        }
        title="Go to Text Screen Demo"
      />
<Button
        onPress={() =>  Navigation.push(Props.componentId ,
          {
              component:{
                name: 'myBoxScreen',
                  passProps:{
                      myComponentId: Props.componentId,
                     
      
                  }
              }
          } )
          
        }
        title="Go to Box Screen Demo"
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
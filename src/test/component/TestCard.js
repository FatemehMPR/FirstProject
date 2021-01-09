import React from 'react';
import {Text, StyleSheet, View, Image, FlatList, TouchableOpacity} from 'react-native';
import TestDetial from './TestDetial';
import {PushToScreen} from '../../function/myNavigation';


const TestCard = (Props) =>{
console.log('Ana',Props.results);
    
        return (
            <View style={styles.container}>
              <Text style={styles.title}>{Props.title}</Text>
              <FlatList
              verticall
              data={Props.results}
              keyExtractor={(item, index) => 'key' + index}
              renderItem={({ item }) => {
/*               return <TestDetial result={item} />;*/
                 return (
                <TouchableOpacity
                onPress={() => PushToScreen(Props.mycomponentId, 'myTestDetailShow', item.Id, false, false)}
                >
                    <TestDetial result={item} />
                    </TouchableOpacity>
                    );
            }}
            />
            </View>
          );
      };
    
    const styles = StyleSheet.create({
        continer:{
            marginBottom:10
        },
      title: {
        fontSize: 18,
        fontWeight: 'bold',  
        marginLeft: 15,
        marginBottom:5
      }
    });
    
 
    
export default TestCard;
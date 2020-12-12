import React from 'react';
import { View, Text, StyleSheet, FlatList,TouchableOpacity } from 'react-native';
import {Navigation} from 'react-native-navigation';
import ResultsDetail from './ResultsDetail';
//import { withNavigation } from 'react-native-navigation';


const ResultsList = (Props) => {
    //console.log('title', title);
    console.log('Props', Props);

    return (
        <View style={styles.container}>
          <Text style={styles.title}>{Props.title}</Text>
          <FlatList
            horizontal
            showsHorizontalScrollIndicator={false}
            data={Props.results}
            keyExtractor={result => result.id}
            renderItem={({ item }) => {
              return (
                <TouchableOpacity
                onPress={() =>  Navigation.push(Props.componentId ,
                    {
                        component:{
                          name: 'myResultsShowScreen',
                          id: item.id,
                            passProps:{
                                myComponentId: Props.componentId,
                               
                
                            }
                        }
                    } )
                    
                  }
                 
                
          
              >
                <ResultsDetail result={item} />
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

//export default withNavigation(ResultsList);
export default ResultsList;

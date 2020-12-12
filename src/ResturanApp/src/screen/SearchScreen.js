import React ,{ useState } from 'react';
import {Text, View, StyleSheet, ScrollView} from 'react-native';
import SearchBar from '../component/SearchBar';
import yelp from '../api/yelp';
import useResults  from '../hooks/useResults';
import ResultsList   from '../component/ResultsList';



const SearchScreen = (Props) =>{
    const [term, setTerm] = useState('');
    const [searchApi, results, errorMessage] = useResults();
   
    const filterResultsByPrice = price => {
        // price === '$' || '$$' || '$$$'
        return results.filter(result => {
          return result.price === price;
        });
      };
    

    return(
        <View style = {{flex: 1,}}>
            <SearchBar
            term={term}
            onTermChange={setTerm}
            onTermSubmit={ () =>searchApi(term)}  // is for ok keybord
            />
            {errorMessage ? <Text>{errorMessage}</Text> : null}
            <ScrollView>

            <ResultsList 
             id = {Props.id}
            componentId = {Props.componentId}
            results={filterResultsByPrice('$')} 
            title="Cost Effective" />

            <ResultsList 
             id = {Props.id}
            componentId = {Props.componentId}
            results={filterResultsByPrice('$$')} 
            title="Bit Pricier" />

            <ResultsList 
            id = {Props.id}
            componentId = {Props.componentId}
            results={filterResultsByPrice('$$')} 
            title="Big Spender" />

            </ScrollView>
        </View>
    )
};

const styles = StyleSheet.create({

});

export default SearchScreen;
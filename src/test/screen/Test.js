import React,{useEffect,useState} from 'react';
import {Text, StyleSheet, View, images, ScrollView} from 'react-native';
import TestCard from '../component/TestCard';
import TestApi from '../api/TestApi'

const Test = (Props) =>{

    const [item, setItem]= useState([]);

    useEffect( ()=>{
        getFromApi()
    },[])

    /* const newResponse = async() =>{
        const response = await TestApi.get('product?index=1&pagesize=10&order=NEW&isservice=false&active')
        console.log(response.data)
    } */

function getFromApi() {
    TestApi.get('product?index=1&pagesize=10&order=NEW&isservice=false&active')
    .then(function(response) {
        setItem(response.data.Value.List)
        //console.log(response.data.Value.List[0].Id)
    })
    .catch(function(errore){
        console.log(errore)
    })
    
}

//console.log(item);

    return(
        <View>
            <Text> Test </Text>
            <ScrollView>

            <TestCard 
             id = {Props.id}
            mycomponentId = {Props.componentId}
            results={item} 
            title="fati" />


            </ScrollView>
        </View>
    )
}

export default Test;
import React, { useState } from 'react';
import{Text, StyleSheet, View, Image
    ,KeyboardAvoidingView,
     TextInput,Button,TouchableHighlight,TouchableWithoutFeedback,TouchableOpacity, Alert} from 'react-native';
import{String} from '../assets/String';
import{Colors} from '../assets/Colors';
import{LoginImage} from '../Constant';
import CustomBtn from '../Components/CustomBtn';
import {PushToScreen} from '../function/myNavigation';

import { 
  responsiveHeight,
  responsiveWidth,
  responsiveFontSize,
  useResponsiveFontSize
} from "react-native-responsive-dimensions";
import { Value } from 'react-native-reanimated';

const Login = (Props) =>{

    const [name , setName] = useState('');
    console.log('Props', Props);

function onClick(){
  //  Alert.alert(title, 'You pressed me!')
  name!== '' ?
  PushToScreen(Props.componentId, 'myHome', name,false,true) :Alert.alert('please enter your name')
 
}

    return(
        <KeyboardAvoidingView behavior = 'position'>
<View style= {styles.container}>
            <Image style={styles.img}
             source = {LoginImage}/>
            <Text style ={styles.textStyle} >{String.welcomeText}</Text>
            <TextInput style={styles.textInput}

            placeholder= {'Enter your name...'}
            secureTextEntry= {false}
           // keyboardType= 'numeric'
           autoCorrect={false}
           onChangeText= {(Value) => setName(Value)}

            />

            <CustomBtn BtnOnPress = {()=> onClick()} BtnTitle={String.enter}      
                  />
            

        </View>
        </KeyboardAvoidingView>
        
    );
};

const styles = StyleSheet.create({
    container: {alignItems: 'center',
    marginTop:responsiveHeight(5)
},
    textStyle:{
        fontSize : responsiveFontSize(3),
        color : Colors.orangeColor,
        fontFamily:'PlayfairDisplay-Bold',
        marginBottom:responsiveHeight(3)
    },
    img:{
        width:responsiveWidth(80) ,
        height:responsiveHeight(38) ,
        resizeMode: 'contain'

    },

    textInput:{
        borderWidth: 0.5,
        borderColor:Colors.orangeBorderColor,
        borderRadius: responsiveWidth(3),
        paddingVertical: 5,
        fontSize:responsiveFontSize(1.8),
        fontFamily:'PlayfairDisplay-Bold',
        width: responsiveWidth(80) ,
        paddingHorizontal: responsiveWidth(3) ,
    },

    btnText:{
        backgroundColor: Colors.btnColor,
        color: '#ffffff',
        padding: responsiveWidth(3) ,
        textAlign: 'center',
        borderRadius: responsiveWidth(3) ,
        fontFamily:'PlayfairDisplay-Bold'
    }
}
);

export default Login;


/*
<View style={{with:300, marginTop: 10 }}>
            <Button

            title={String.enter}
            color={Colors.btnColor}
            onPress={() => onClick('Button')}
            
            />
            </View>*/
           /* <TouchableHighlight  onPress= {() => onClick('TouchableHighlight')}
            activeOpacity={0.5}
            underlayColor={Colors.orangeColor}
            style={{with:300, marginTop:10 }}
            >
                <Text style={{
                    backgroundColor: Colors.btnColor,
                    color: '#ffffff',
                    padding: 10,
                    textAlign: 'center',
                    borderRadius: 10
                }}>
                    Enter
                </Text>
                </TouchableHighlight>*/

              /*  <View  style={{with:300, marginTop: 10 }}>
            <TouchableWithoutFeedback  
            onPress= {() => onClick('TouchableWithoutFeedback')}
            >
                <Text style={{
                    backgroundColor: Colors.btnColor,
                    color: '#ffffff',
                    padding: 10,
                    textAlign: 'center',
                    borderRadius: 10
                }}>
                    Enter
                </Text>
                </TouchableWithoutFeedback>
                </View>*/
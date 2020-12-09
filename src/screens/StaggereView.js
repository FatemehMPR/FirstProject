import React from 'react';
import{Text, StyleSheet, View, Image, TextInput,Button,TouchableHighlight,TouchableWithoutFeedback,TouchableOpacity, Alert} from 'react-native';
import {Colors} from '../assets/Colors';
import {deliciousImg, deliveryImg, healthyFoodImg, romanticImg} from '../Constant';
import {String} from '../assets/String';
import {responsiveFontSize, responsiveHeight} from 'react-native-responsive-dimensions';

const StaggereView =() =>{

    const _staggered =(flexAmount, backColor ,img, title) =>{
        return(
            <View style = {{ 
                flex: flexAmount, 
                backgroundColor: backColor ,
                borderRadius: 10,
                justifyContent:'center',
                alignItems:'center'
                }}>
                
                <Image source={img} style={{
                    flex: 0.7,
                    resizeMode: 'contain',
                }}/>

                <Text style={{
                    color: Colors.txtOnDarkTheme,
                    fontWeight: 'bold',
                    fontSize:responsiveFontSize(1.8)
                }}>{title}</Text>
                   
            </View>
        )
    };

    return(

        <View style = { styles.continer }>
            
            <View style = { styles.innerView }>
            
            {_staggered (0.46,Colors.stagTheme1,deliveryImg,String.delivery)}
            {_staggered (0.46,Colors.stagTheme4,healthyFoodImg,String.healthy)}

            </View>

            <View styles = { styles.innerView}>
                
                {_staggered (0.36,Colors.stagTheme3, romanticImg,String.romantic)}
                {_staggered (0.56,Colors.stagTheme2,deliciousImg,String.delicious)}
                
            </View>
            
        </View>
    )};

    const styles = StyleSheet.create ({

        continer:{
            backgroundColor: 'yellow',
            flex:0.4 , 
            justifyContent:'space-around',
            marginTop:responsiveHeight(2),

        },
        innerView:{
            backgroundColor:'blue',
            flex: 0.46,
            flexDirection:'row',
            justifyContent:'space-around',
        }

    });
    
export default StaggereView;


import {Navigation} from 'react-native-navigation';

export const PushToScreen = (componentId, screenName, data, visible,enable) => {

    Navigation.push(componentId ,
        {
            component:{
                name: screenName,
                passProps:{
                    myComponentId: componentId,
                    userName: data
    
                },
                options:{
                    sideMenu:{
                        left:{
                            visible : visible,
                            enabled : enable,
                        }
                    }
                }
                
            }
        })
    
    };



    export const setSideMenuVisibility = (componentId,visible,enable) =>{

        Navigation.mergeOptions(componentId , {
            sideMenu:{
                left:{
                    visible : visible,
                    enabled : enable,
                }
            }
        });

    };


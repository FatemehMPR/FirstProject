/**
 * @format
 */
import { Navigation } from "react-native-navigation";
//import App from "./App";
import ComponentSreen from "./src/screens/ComponentsScreen";
import ListScreen from "./src/screens/ListScreen";
import HomeScreen from "./src/screens/HomeScreen";
import Login from "./src/screens/Login";
import CustomBtn from "./src/Components/CustomBtn";
import ImageScreen from "./src/screens/ImageScreen";
import ImageDetail from "./src/Components/ImageDetail";


Navigation.registerComponent('com.myApp.WelcomeScreen', () => App);
Navigation.registerComponent('myComponentSreen', () => ComponentSreen);
Navigation.registerComponent('myListSreen', () => ListScreen);
Navigation.registerComponent('myHomeScreen', () => HomeScreen);
Navigation.registerComponent('myLogin', () => Login);
Navigation.registerComponent('myCustomBtn', () => CustomBtn);
Navigation.registerComponent('myImageScreen', () => ImageScreen);
Navigation.registerComponent('myImageDetail', () => ImageDetail);

Navigation.events().registerAppLaunchedListener(() => {
   Navigation.setRoot({
     root: {
       stack: {
         children: [
           {
             component: {
               //name: 'com.myApp.WelcomeScreen'
               name: 'myImageScreen',
               options:{
                 topBar:{
                   visible:false
                 }
               } 
             }
           }
         ]
       }
     }
  });
});
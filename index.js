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
import CounterScreen from "./src/screens/CounterScreen";
import ColorScreen from "./src/screens/ColorScreen";
import SquareScreen from "./src/screens/SquareScreen";
import ReducerSquareScreen from "./src/screens/ReducerSquareScreen";
import ColorCounter from "./src/Components/ColorCounter";
import TextScreen from "./src/screens/TextScreen";
import BoxScreen from "./src/screens/BoxScreen";
import myHomeScreen from "./src/screens/myHomeScreen";
import SideMenu from "./src/screens/SideMenu";
import StaggereView from "./src/screens/StaggereView";
import IntroPage from "./src/screens/IntroPage";
//Restaurant  App
import SearchScreen from "./src/ResturanApp/src/screen/SearchScreen";
import ResultsShowScreen from "./src/ResturanApp/src/screen/ResultsShowScreen";
import ResultsList from "./src/ResturanApp/src/component/ResultsList";


Navigation.registerComponent('com.myApp.WelcomeScreen', () => App);
Navigation.registerComponent('myComponentSreen', () => ComponentSreen);
Navigation.registerComponent('myListSreen', () => ListScreen);
Navigation.registerComponent('myHomeScreen', () => HomeScreen);
Navigation.registerComponent('myLogin', () => Login);
Navigation.registerComponent('myCustomBtn', () => CustomBtn);
Navigation.registerComponent('myImageScreen', () => ImageScreen);
Navigation.registerComponent('myImageDetail', () => ImageDetail);
Navigation.registerComponent('myCounterScreen', () => CounterScreen);
Navigation.registerComponent('myColorScreen', () => ColorScreen);
Navigation.registerComponent('mySquareScreen', () => SquareScreen);
Navigation.registerComponent('myColorCounter', () => ColorCounter);
Navigation.registerComponent('myReducerSquareScreen', () => ReducerSquareScreen);
Navigation.registerComponent('myTextScreen', () => TextScreen);
Navigation.registerComponent('myBoxScreen', () => BoxScreen);
Navigation.registerComponent('myHome', () => myHomeScreen);
Navigation.registerComponent('mySideMenu', () => SideMenu);
Navigation.registerComponent('myStaggereView', () => StaggereView);
Navigation.registerComponent('myIntroPage', () => IntroPage);

//Resturant App
Navigation.registerComponent('mySearchScreen', () => SearchScreen);
Navigation.registerComponent('myResultsShowScreen', () => ResultsShowScreen);
Navigation.registerComponent('myResultsList', () => ResultsList);




/*Navigation.events().registerAppLaunchedListener(() => {

  Navigation.setRoot({
      root: {
         sideMenu:{
             center:{
                 stack: {
                     children: [
                         {
                             component: {
                                 id: 'myHomeId',
                                 name: 'mySearchScreen',
                                 
                                 options:{
                                     topBar:{
                                         visible:false,
                                        
                                     }
                                 }
                             },
                         },
                     ],
                 },
             },
             left:{
                 component:{
                     name:'mySideMenu'
                 }
             }
         }
      },
  });
  
  Navigation.setDefaultOptions({
    topBar:{
      visible: false
  }
  })
});*/


Navigation.events().registerAppLaunchedListener(() => {
   Navigation.setRoot({
     root: {
          stack: {
            children: [
              {
                component: {
                  //name: 'com.myApp.WelcomeScreen'
                  name: 'myIntroPage',
                  options:{
                    topBar:{
                      visible:true,
                      title : 'ffff'
                    }
                  } 
                }
              }
            ]
          }
         
       

     }
  });
});
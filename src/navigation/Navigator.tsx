import {createStackNavigator, createBottomTabNavigator} from "react-navigation";
import {SearchScreen} from '../screens/SearchScreen';
import {ResultsScreen} from '../screens/ResultsScreen';
import {AboutScreen} from '../screens/AboutScreen';

const BottomTabNavigator = createBottomTabNavigator(
  {
    Search:{
      screen: SearchScreen,
    },
    About:{
      screen:  AboutScreen,
    },
  },
  {
    initialRouteName:"Search",
  }
);

export const AppNavigator = createStackNavigator(
  {
    Main:{
      screen:BottomTabNavigator,
      navigationOptions: () => ({
        header: null
      }),
    },
    Results:{
      screen:  ResultsScreen,
      
    } 
  },
  {
    headerMode:"screen",
    headerBackTitleVisible: false,
  }
);
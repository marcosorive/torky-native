import React from 'react';
import {Platform} from 'react-native';
import {createStackNavigator, createBottomTabNavigator} from "react-navigation";
import {TabIcon} from '../components/TabIcon'
import {SearchScreen} from '../screens/SearchScreen';
import {ResultsScreen} from '../screens/ResultsScreen';
import {AboutScreen} from '../screens/AboutScreen';

const BottomTabNavigator = createBottomTabNavigator(
  {
    Search:{
      screen: SearchScreen,
      navigationOptions: () => ({
        tabBarIcon: ({
          focused
        }) => (<TabIcon focused = {focused} name = {Platform.OS === 'ios' ? `ios-search` :  'md-search'}/>),
      })
    },
    About:{
      screen:  AboutScreen,
      navigationOptions: () => ({
        tabBarIcon: ({
          focused
        }) => (<TabIcon focused = {focused} name = {Platform.OS === 'ios' ? `ios-information-circle` :  'md-information-circle'}/>),
      })
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
        header: null,
      
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
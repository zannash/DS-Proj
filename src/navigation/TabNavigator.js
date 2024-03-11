import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {MainStackNavigator,AboutStackNavigator} from './StackNavigator';
import Icon from 'react-native-vector-icons/FontAwesome';
import Home from '../screens/Home';
import About from '../screens/About';``


const Tab = createBottomTabNavigator();

const BottomTabNavigator = () =>{
    return(
<Tab.Navigator 
tabBarOptions = {
    {
        activeTintColor:'blue',
        inactiveTintColor:'grey',
        style:{
            backgroundColor:"red"
        },
        labelStyle:{
            fonSize:12,
        }
    }
}>
    <Tab.Screen
    name = "Home"
    component = {MainStackNavigator}
    options = {
        {
            tabBarLabel: 'Home',
            tabBarIcon:({color}) => (<Icon name="home" size={26} color={color}/>),
        }
    }
    />

    <Tab.Screen
     name = "About"
     component = {AboutStackNavigator}
     options = {
         {
             tabBarLabel: 'Zana',
             tabBarIcon:({color}) => (<Icon name="rocket" size={26} color={color}/>),
         }
     }

    />
</Tab.Navigator>
    );
}
export default BottomTabNavigator;

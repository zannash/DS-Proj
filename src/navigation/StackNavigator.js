import React from 'react';
import {View,Text,StyleSheet,Button} from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from '../screens/Home';
import About from '../screens/About';

const Stack = createStackNavigator();

const screenOptionStyle = {
    headerStyle:{
        backgroundColor:"#FF6347",

    },
    headerTintColor : "white",
}

const MainStackNavigator = ({navigation}) =>{
    return(
        <Stack.Navigator screenOptions={screenOptionStyle}>
            <Stack.Screen 
             name="Home" 
             component={Home}
             options={{
                headerStyle:{backgroundColor:"blue",
                headerTintColor:"white"}
             }}/>
            <Stack.Screen name="About" component={About}/>
        </Stack.Navigator>
    )
}

export default MainStackNavigator;
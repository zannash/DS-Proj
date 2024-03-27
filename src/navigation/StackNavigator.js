import React from 'react';
import {View,Text,StyleSheet,Button} from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from '../screens/Home';
import About from '../screens/About';
import Ios  from '../screens/Ios';

//Reprezenton Stack Navigator
const Stack = createStackNavigator();


//Definohen opsionet e perbashketa per screens qe ndodhen ne stack
/*Opsionet e perbashketa perfshijne : header-in bashke me ngjyren e bg,
 si dhe ngjyrat e teksteve dhe ikonave*/
const screenOptionStyle = {
    headerStyle:{
        backgroundColor:"#FF6347",

    },
    headerTintColor : "white",
}

//==Screens te bashkuara ne nje komponent==
//Definohet komponenta e cila eshte Stack Navigator dhe i perfshine dy screens ne kete rast
// const MainStackNavigator = ({navigation}) =>{
//     return(
//         <Stack.Navigator screenOptions={screenOptionStyle}>
//             <Stack.Screen 
//              name="Home" 
//              component={Home}
//              options={{
//                 headerStyle:{backgroundColor:"blue",
//                 headerTintColor:"white"}
//              }}/>
//             <Stack.Screen name="About" component={About}/>
//         </Stack.Navigator>
//     )
// }


//==Screens te ndara===
//Ndahen screens ne menyre qe te krijojme nje tab special per secilen nga screen-at
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
        </Stack.Navigator>
    )
}
const AboutStackNavigator = ({navigation}) =>{
    return(
        <Stack.Navigator screenOptions={screenOptionStyle}>
            <Stack.Screen 
             name="About" 
             component={About}   />
        </Stack.Navigator>
    )
}

const IosStackNavigator = () => {
    return(
        <Stack.Navigator screenOptions={screenOptionStyle}>
            <Stack.Screen name="iOS" component={Ios} />
        </Stack.Navigator>
    );
}


export { MainStackNavigator, AboutStackNavigator,IosStackNavigator };

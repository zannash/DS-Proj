import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import StackNavigator from './src/navigation/StackNavigator';
import BottomTabNavigator from './src/navigation/BottomTabNavigator';
import DrawerNavigation from './src/navigation/DrawerNavigation';

const  App= () => {
  return (
    <NavigationContainer>
<BottomTabNavigator/>
    </NavigationContainer>
  );
}

export default App;

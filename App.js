import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import StackNavigator from './src/navigation/StackNavigator';
import BottomTabNavigator from './src/navigation/TabNavigator';
import DrawerNavigation from './src/navigation/DrawerNavigation';

const  App= () => {
  return (
    <NavigationContainer>
<DrawerNavigation/>
    </NavigationContainer>
  );
}

export default App;

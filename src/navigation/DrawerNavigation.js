import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { AboutStackNavigator } from './StackNavigator';
import BottomTabNavigator  from './TabNavigator';
import About from '../screens/About';

const Drawer = createDrawerNavigator();

const DrawerNavigation = () => {
    return(
        <Drawer.Navigator>
            <Drawer.Screen name = "Home" component={BottomTabNavigator}/>
            <Drawer.Screen name = "About" component={AboutStackNavigator}/>
        </Drawer.Navigator>
    );
}
export default DrawerNavigation;
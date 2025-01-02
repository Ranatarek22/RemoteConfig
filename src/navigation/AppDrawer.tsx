
import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import HomeScreen from '../screens/HomeScreen';
import CountryDetailScreen from '../screens/CountryDetailScreen';

const Drawer = createDrawerNavigator();

const AppDrawer = () => (
  <Drawer.Navigator
    screenOptions={{
      headerShown: true,
      drawerPosition: 'left',
      drawerType: 'slide',
    }}>
    <Drawer.Screen
      name="Home"
      component={HomeScreen}
      options={{drawerLabel: 'Home'}}
    />
    <Drawer.Screen
      name="CountryDetailScreen"
      component={CountryDetailScreen}
      options={{drawerLabel: 'Country Details'}}
    />
  </Drawer.Navigator>
);

export default AppDrawer;

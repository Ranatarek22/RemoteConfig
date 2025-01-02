import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import MMKVStorage from 'react-native-mmkv-storage';
import SplashScreenCust from '../screens/SplashScreenCust';
import {createDrawerNavigator} from '@react-navigation/drawer';
import { saveLastScreen } from '../utils/saveLastScreen';
import AppDrawer from './AppDrawer';

const Stack = createStackNavigator();

const AppNavigator = () => (
  <NavigationContainer
    onStateChange={state => {
      const currentRoute = state?.routes[state.index]?.name;
      if (currentRoute) {
        saveLastScreen(currentRoute);
      }
    }}>
    <Stack.Navigator
      initialRouteName="SplashScreen"
      screenOptions={{
        headerShown: false,
        gestureEnabled: true,
        cardStyleInterpolator: ({current, layouts}) => {
          return {
            cardStyle: {
              opacity: current.progress,
              transform: [
                {
                  translateX: current.progress.interpolate({
                    inputRange: [0, 1],
                    outputRange: [layouts.screen.width, 0],
                  }),
                },
              ],
            },
          };
        },
      }}>
      <Stack.Screen name="SplashScreen" component={SplashScreenCust} />

      <Stack.Screen name="Drawer" component={AppDrawer} />
    </Stack.Navigator>
  </NavigationContainer>
);

export default AppNavigator;

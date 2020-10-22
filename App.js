/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';

import 'react-native-gesture-handler';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';

import Homepage from './src/navigation/Homepage/Homepage'
import AddJob from './src/navigation/AddJob/AddJob';
import Login from './src/navigation/Login/Login';


const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
     <Stack.Navigator initialRouteName="Homepage" screenOptions={{ headerShown: false}}>
             <Stack.Screen name="Homepage" component={Homepage} />
             <Stack.Screen name="AddJob" component={AddJob} />
             <Stack.Screen name="Login" component={Login} />
     </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;

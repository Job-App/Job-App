import { StatusBar } from 'expo-status-bar';
import * as React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import HomeScreen from './pages/HomeScreen';
import NewApp from './pages/NewApp';
import DeleteApp from './pages/DeleteApp';
import UpdateApp from './pages/UpdateApp';
import ViewApp from './pages/ViewApp';




const Stack = createStackNavigator();


export default function App(){
  return (
  <NavigationContainer>
    <Stack.Navigator initialRouteName = "HomeScreen">
    <Stack.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{
            title: 'Home', //Set Header Title
            headerStyle: {
              backgroundColor: '#f4511e', //Set Header color
            },
            headerTintColor: '#fff', //Set Header text color
            headerTitleStyle: {
              fontWeight: 'bold', //Set Header text style
            },
        }}
      />
      <Stack.Screen
        name="NewApp"
        component={NewApp}
        options={{
            title: 'New Application', 
            headerStyle: {
                backgroundColor: '#f4511e', 
            },
            headerTintColor: '#fff', 
            headerTitleStyle: {
                fontWeight: 'bold', 
            },
        }}
      />
      <Stack.Screen
        name="DeleteApp"
        component={DeleteApp}
        options={{
            title: 'Delete Application(s)', 
            headerStyle: {
                backgroundColor: '#f4511e', 
            },
            headerTintColor: '#fff', 
            headerTitleStyle: {
                fontWeight: 'bold', 
            },
        }}
      />
    </Stack.Navigator>
  </NavigationContainer>







   /* <View style={styles.container}>
      <Text>Open up App.js to start worokg on your app!</Text>
      <StatusBar style="auto" />
    </View>*/
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

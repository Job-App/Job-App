/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
const Stack = createStackNavigator()

import 'react-native-gesture-handler';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import NewJobAppRecord from './NewJobAppRecord.js'

import HeaderBar from './src/components/HeaderBar/Headerbar';
import Folders from './src/components/Folders/Folders';

function HeaderBarScreen({ navigation }) {
  return (
    <>
         <StatusBar barStyle="dark-content" />
         <SafeAreaView>
           <ScrollView
             contentInsetAdjustmentBehavior="automatic"
             style={styles.scrollView}>
             <HeaderBar />

             {global.HermesInternal == null ? null : (
               <View style={styles.engine}>
                 <Text style={styles.footer}>Engine: Hermes</Text>
               </View>
             )}

               <Folders name="Active" />
           </ScrollView>
         </SafeAreaView>
       </>
  );
}

const App: () => React$Node = () => {
  return (
    <NavigationContainer>
     <Stack.Navigator initialRouteName="HeaderBar" screenOptions={{ headerShown: false}}>
             <Stack.Screen name="HeaderBar" component={HeaderBarScreen} />
     </Stack.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: Colors.lighter,
  },
  engine: {
    position: 'absolute',
    right: 0,
  },
  body: {
    backgroundColor: Colors.white,
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: Colors.black,
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
    color: Colors.dark,
  },
  highlight: {
    fontWeight: '700',
  },
  footer: {
    color: Colors.dark,
    fontSize: 12,
    fontWeight: '600',
    padding: 4,
    paddingRight: 12,
    textAlign: 'right',
  },
});

/*
const Stack = createStackNavigator()


  const App = () => {
    return (
               <NavigationContainer>
                 <Stack.Navigator initialRouteName="NewJobAppRecord">
                   <Stack.Screen name="NewJobAppRecord" component={NewJobAppRecord} />
                 </Stack.Navigator>
               </NavigationContainer>
             );
  }
*/


export default App;


import React from 'react'
import { LogBox } from 'react-native';
LogBox.ignoreLogs(['Warning: ...']); // Ignore log notification by message
LogBox.ignoreAllLogs();//Ignore all log notifications

import 'react-native-gesture-handler'
import { createStackNavigator } from '@react-navigation/stack'
import { NavigationContainer } from '@react-navigation/native'

import Homepage from './src/navigation/Homepage/Homepage'
import AddJob from './src/navigation/AddJob/AddJob'
import Login from './src/navigation/Login/Login'
import JobDetails from './src/navigation/JobDetails/JobDetails'
import UpdateJob from './src/navigation/UpdateJob/UpdateJob'
import UpdateProfile from './src/navigation/UpdateProfile/UpdateProfile'

const Stack = createStackNavigator()

function App() {
    return (
        <NavigationContainer>
            <Stack.Navigator
                initialRouteName="Homepage"
                screenOptions={{ headerShown: false }}>
                <Stack.Screen name="Homepage" component={Homepage} />
                <Stack.Screen name="AddJob" component={AddJob} />
                <Stack.Screen name="Login" component={Login} />
                <Stack.Screen name="UpdateProfile" component={UpdateProfile} />
                <Stack.Screen
                    name="JobDetails"
                    component={JobDetails}
                    options={({ route }) => ({ id: route.params.id })}
                />
                <Stack.Screen
                    name="UpdateJob"
                    component={UpdateJob}
                    options={({ route }) => ({ id: route.params.id })}
                />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default App

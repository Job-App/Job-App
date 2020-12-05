import React from 'react'
import {
    SafeAreaView,
    StyleSheet,
    ScrollView,
    View,
    Text,
    StatusBar,
} from 'react-native'
import { Colors } from 'react-native/Libraries/NewAppScreen'
import { createStackNavigator } from '@react-navigation/stack'

import HeaderBar from './../../components/HeaderBar/Headerbar'
import Folders from './../../components/Folders/Folders'

const Homepage = () => {
    const Stack = createStackNavigator()

    {/* displays components of home screen (inactive/active sections, navigation tabs)*/}
    return (
        <View testID="homepage">
            <StatusBar barStyle="dark-content" />
            <SafeAreaView>
                <ScrollView
                    contentInsetAdjustmentBehavior="automatic"
                    style={styles.scrollView}>
                    <HeaderBar
                        navigation={Stack}
                        left="Add"
                        leftNav="AddJob"
                        right="Login"
                        rightNav="Login"
                    />

                    {global.HermesInternal == null ? null : (
                        <View style={styles.engine}>
                            <Text style={styles.footer}>Engine: Hermes</Text>
                        </View>
                    )}

                    <Folders name="Active" />
                    <Folders name="Inactive" />
                    <View style={{ margin: 12 }} />
                </ScrollView>
            </SafeAreaView>
        </ View>
    )
}

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
})

export default Homepage

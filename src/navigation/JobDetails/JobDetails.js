import React, { useState, useEffect } from 'react'
import { Text, View, StyleSheet, Dimensions } from 'react-native'

import { createStackNavigator } from '@react-navigation/stack'
import { openDatabase } from 'react-native-sqlite-storage'

import HeaderBar from './../../components/HeaderBar/Headerbar'

const { width, height } = Dimensions.get('screen')
const db = openDatabase('table_applications.db')

const JobDetails = ({ route }) => {
    const Stack = createStackNavigator()
    let [details, setDetails] = useState({})

    const sqlQuery =
        `SELECT *
        FROM table_applications
        WHERE job_id = "` +
        route.params.id +
        `"`

    useEffect(() => {
        db.transaction((tx) => {
            tx.executeSql(sqlQuery, [], (txR, results) => {
                var temp = []
                for (let i = 0; i < results.rows.length; ++i)
                    temp.push(results.rows.item(i))
                setDetails(temp[0])
            })
        })
    }, [])
    console.log(details)
    return (
        <View>
            <HeaderBar
                navigation={Stack}
                left="Back"
                leftNav="Homepage"
                right=""
                rightNav=""
            />
            {/* <Text>Job ID: {details.job_id || 'N/A'}</Text> */}
            <Text style={[styles.title]}>{details.company || 'N/A'}</Text>
            <Text style={[styles.subtitle]}>
                Title: {details.title || 'N/A'}
            </Text>
            <Text style={[styles.text]}>
                Applied: {details.applied || 'N/A'}
            </Text>
            <Text style={[styles.text]}>
                Deadline: {details.deadline || 'N/A'}
            </Text>
        </View>
    )
}

const styles = StyleSheet.create({
    text: {
        margin: 24,
        marginTop: 0,
        marginBottom: 0,
        fontSize: 18,
    },
    title: {
        fontSize: 36,
        fontWeight: 'bold',
        margin: 24,
        marginBottom: 0,
    },
    subtitle: {
        fontSize: 24,
        fontStyle: 'italic',
        margin: 24,
        marginTop: 0,
    },
    formContainer: {
        width: width - 48,
        alignSelf: 'center',
    },
})

export default JobDetails

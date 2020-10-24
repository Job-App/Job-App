import React, { useState, useEffect } from 'react'
import { TouchableOpacity, Text, View } from 'react-native'

import { openDatabase } from 'react-native-sqlite-storage'

var db = openDatabase('table_applications.db')
const JobDetails = ({ route }) => {
    let [details, setDetails] = useState({})

    const sqlQuery =
        `SELECT *
        FROM table_applications
        WHERE job_id = "` +
        route.params.id +
        `"`

    useEffect(() => {
        db.transaction((tx) => {
            tx.executeSql(sqlQuery, [], (tx, results) => {
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
            <Text>Job ID: {details.job_id || 'N/A'}</Text>
            <Text>Company: {details.company || 'N/A'}</Text>
            <Text>Title: {details.title || 'N/A'}</Text>
            <Text>Deadline: {details.deadline || 'N/A'}</Text>
            <Text>Applied: {details.applied || 'N/A'}</Text>
        </View>
    )
}

export default JobDetails

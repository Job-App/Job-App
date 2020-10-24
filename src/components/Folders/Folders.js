import React, { useState, useEffect } from 'react'
import { View, Text, StyleSheet, Dimensions, FlatList } from 'react-native'
import { openDatabase } from 'react-native-sqlite-storage'

import Cards from './../../components/Cards/Cards'

const { width, height } = Dimensions.get('screen')

const nameConfig = {
    active: `WHERE applied = ''`,
    inactive: `WHERE NOT applied = ''`,
}

var db = openDatabase('table_applications.db')
const Folders = (props) => {
    let [flatListItems, setFlatListItems] = useState([])

    const sqlQuery =
        `
        SELECT job_id, Company, Title, Deadline, Applied
        FROM table_applications ` + nameConfig[props.name.toLowerCase()]
    useEffect(() => {
        db.transaction((tx) => {
            tx.executeSql(sqlQuery, [], (txR, results) => {
                var temp = []
                for (let i = 0; i < results.rows.length; ++i)
                    temp.push(results.rows.item(i))
                setFlatListItems(temp)
            })
        })
    }, [])
    console.log(flatListItems)
    let listItemView = (item) => {
        return (
            <Cards
                key={item.job_id}
                id={item.job_id}
                company={item.company}
                title={item.title}
                closing={item.deadline}
            />
        )
    }

    return (
        <View style={styles.container}>
            <Text style={[styles.text, styles.title]}>{props.name}</Text>
            <FlatList
                data={flatListItems}
                keyExtractor={(item, index) => index.toString()}
                renderItem={({ item }) => listItemView(item)}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        width: width - 12,
        alignSelf: 'center',
        marginTop: 24,
        // borderWidth: 1,
        paddingBottom: 24,
    },
    text: {
        margin: 12,
        marginLeft: 24,
        marginBottom: 0,
    },
    title: {
        fontSize: 36,
        fontWeight: 'bold',
    },
})

export default Folders

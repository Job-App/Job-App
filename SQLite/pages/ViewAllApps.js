import React, { useState, useEffect } from 'react';
import { FlatList, Text, View, SafeAreaView } from 'react-native';
import { openDatabase } from "expo-sqlite";

var db = openDatabase('table_applications.db' );

const ViewAllApps  = ({ navigation }) => {
    let [flatListItems, setFlatListItems] = useState([]);

    useEffect(() => {
        db.transaction((tx) => {
          tx.executeSql('SELECT * FROM table_applications', [], (tx, results) => {
            var temp = [];
            for (let i = 0; i < results.rows.length; ++i)
              temp.push(results.rows.item(i));
            setFlatListItems(temp);
          });         
        });
      }, []);
      console.log(flatListItems)
      let listViewItemSeparator = () => {
        return (
          <View
            style={{ height: 0.2, width: '100%', backgroundColor: '#808080' }}
          />
        );
      };
      let listItemView = (item) => {
        return (
          <View
            key={item.job_id}
            style={{ backgroundColor: 'white', padding: 20 }}>
            <Text>Id: {item.job_id}</Text>
            <Text>Title: {item.title}</Text>
            <Text>Company: {item.company}</Text>
            <Text>Deadline: {item.deadline}</Text>
            <Text>Applied: {item.applied}</Text>
            <Text>Link: {item.link}</Text>
          </View>
        );
      };
      return (
          <SafeAreaView style={{ flex: 1 }}>
      <View style={{ flex: 1, backgroundColor: 'white' }}>
        <View style={{ flex: 1 }}>
          <FlatList
            data={flatListItems}
            ItemSeparatorComponent={listViewItemSeparator}
            keyExtractor={(item, index) => index.toString()}
            renderItem={({ item }) => listItemView(item)}
          />
        </View>
      </View>
    </SafeAreaView>
      );
};
export default ViewAllApps

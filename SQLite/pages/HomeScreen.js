import React, { useEffect } from 'react';
import { View, Text, SafeAreaView } from 'react-native';

import MyButton from './components/MyButton';

import { openDatabase } from "expo-sqlite";

var db = openDatabase({ name: 'UserDatabase.db' });

const HomeScreen = ({ navigation }) => {
  useEffect(() => {
    db.transaction(function (txn) {
      txn.executeSql(
        "SELECT name FROM sqlite_master WHERE type='table' AND name='table_applications'",
        [],
        function (tx, res) {
          console.log('item:', res.rows.length);
          if (res.rows.length == 0) {
            txn.executeSql('DROP TABLE IF EXISTS table_applications', []);
            txn.executeSql(
          'CREATE TABLE IF NOT EXISTS table_applications(job_id INTEGER PRIMARY KEY AUTOINCREMENT, title VARCHAR(225), company VARCHAR(225), deadline VARCHAR(40), applied VARCHAR(40), link VARCHAR(225));',
              []
            );
          }
        }
      );
    });
  }, []);




return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={{ flex: 1, backgroundColor: 'white' }}>
        <View style={{ flex: 1 }}>
          <MyButton
            title="Create New Application"
            customClick={() => navigation.navigate('NewApp')}
          />

          <MyButton
            title="Update Application"
            customClick={() => navigation.navigate('UpdateApp')}
          />

          <MyButton
            title="View Applications"
            customClick={() => navigation.navigate('ViewApp')}
          />

          <MyButton
            title="Delete Application"
            customClick={() => navigation.navigate('DeleteApp')}
          />
        </View>
      </View>
    </SafeAreaView>
  );
  };
  export default HomeScreen;

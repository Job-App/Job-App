import React, { useState } from 'react';
import { Button, Text, View, Alert, SafeAreaView } from 'react-native';
import Mytextinput from './components/Mytextinput';
import Mybutton from './components/Mybutton';
import { openDatabase } from "expo-sqlite";

var db = openDatabase({ name: 'UserDatabase.db' });

const DeleteApp = ({ navigation }) => {
  let [inputJobId, setJobId] = useState('');

  let deleteUser = () => {
    db.transaction((tx) => {
      tx.executeSql(
        'DELETE FROM  table_applications where job_id=?',
        [inputUserId],
        (tx, results) => {
          console.log('Results', results.rowsAffected);
          if (results.rowsAffected > 0) {
            alert('Job Application Deleted Successfully',
              [
                {
                  text: 'Ok',
                  onPress: () => navigation.navigate('HomeScreen'),
                },
              ],
              { cancelable: false }
            );
          } else {
            alert('Please insert a valid Job Id');
          }
        }
      ); 
    });
  }
  let deleteAll = () =>{
    db.transaction((tx) => {
      tx.executeSql(
        'DELETE * FROM table_applications',
        [].
        (tx, results) => {
          console.log('Results', results.rowsAffected);
          if (results.rowsAffected > 0) {
            alert('All Job Application Deleted Successfully',
              [
                {
                  text: 'Ok',
                  onPress: () => navigation.navigate('HomeScreen'),
                },
              ],
              { cancelable: false }
            );
          } else {
            alert('Failure to Delete all Applications');
          }
        }
      )
    }
  }
  };
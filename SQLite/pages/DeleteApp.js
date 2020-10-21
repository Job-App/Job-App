import React, { useState } from 'react';
import { Button, Text, View, Alert, SafeAreaView, StyleSheet,TextInput } from 'react-native';
import Mytextinput from './components/mytextinput';
import MyButton from './components/MyButton';
import { openDatabase } from "expo-sqlite";

var db = openDatabase('table_applications.db');

const DeleteApp = ({ navigation }) => {
  let [inputJobId, setJobId] = useState('');

  let deleteJobApp = () => {
    db.transaction(tx =>{
      tx.executeSql(
        'DELETE FROM  table_applications WHERE job_id = ? ',
        [inputJobId],
        (tx, results) => {
          console.log('ResultsDelete', results.rowsAffected);
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

       tx.executeSql(
          "select * from table_applications",
          [],
          (_, { rows: { _array } }) => console.log( _array),
          () => console.log("error fetching")
        );
    });
  }

  let deleteAll = () =>{
    db.transaction((tx) => {
      tx.executeSql(
        'DELETE * FROM table_applications',
        [],
        (tx, results) => {
          console.log('ResultsDeleteAll', results.rowsAffected);
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
      );
    });
  }

 return (
    <View style={styles.container}>
      <TextInput
       placeholder="Enter Job Id"
       onChangeText={(inputJobId) => setJobId(inputJobId)}
       style={{ padding: 10 }}
      />
      <MyButton title="Delete Job Application" customClick={deleteJobApp} />
      <View>
          <MyButton title="Delete All Applications" customClick={deleteAll} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 10,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
export default DeleteApp;
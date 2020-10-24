import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button, Alert,TouchableOpacity,ScrollView, KeyboardAvoidingView } from 'react-native';

import Mytextinput from './components/mytextinput';
import Mybutton from './components/MyButton';

import { openDatabase } from "expo-sqlite";  

const NewApp = ({ navigation }) => {
    const db = openDatabase('table_applications.db')
    let [title, setJobTitle] = useState('');
    let [company, setJobCompany] = useState('');
    let [deadline, setJobDeadline] = useState('');
    let [applied, setJobApplied] = useState('');
    let [link, setJobLink] = useState('');

    let new_app = () => {
    //console.log(title);
     db.transaction(function(tx){
        tx.executeSql(
          //"create table if not exists DataTable (id integer primary key not null, column_1 int, column_2 int, column_3 text);",
          'CREATE TABLE IF NOT EXISTS table_applications(job_id INTEGER PRIMARY KEY AUTOINCREMENT, title VARCHAR(225), company VARCHAR(225), deadline VARCHAR(40), applied VARCHAR(40), link VARCHAR(225));',
          []
        );

        tx.executeSql(
          "INSERT INTO table_applications (title, company, deadline, applied, link) VALUES (?,?,?,?,?)",
          [title, company, deadline, applied, link],
          (tx, results) => {
              if (results.rowsAffected > 0) { 
              console.log('ResultsAdded', results.rowsAffected);
                Alert.alert(
                  'Success',
                  'You\'re Job Application was Successfully Submitted',
                  [
                    {
                      text: 'Ok',
                      onPress: () => navigation.navigate('HomeScreen'),
                    },
                  ],
                  { cancelable: false }
                );
              } else Alert.alert(
              'Error',
              'Submission Failed');
          }
        );

        tx.executeSql(
          "select * from table_applications",
          [],
          (_, { rows: { _array } }) => console.log( _array),
          () => console.log("error fetching")
        );

      });
    };

    return (
      <ScrollView keyboardShouldPersistTaps="handled">
      <KeyboardAvoidingView>
      <>
          <View style={styles.container}>
              <Text style = {styles.header}> Job Title </Text>
              <TextInput
              placeholder = "Enter Job Title"
              style = {styles.input}
              onChangeText={(title) => setJobTitle(title)}  
              />
            </View>
            <View style={styles.container}>
              <Text style = {styles.header}> Company </Text>
              <TextInput
              placeholder = "Enter Company Name"
              style = {styles.input}
              onChangeText={(company) => setJobCompany(company)}  
              />
            </View>
            <View style={styles.container}>
              <Text style = {styles.header}> Deadline </Text>
              <TextInput
              placeholder = "Enter Application Deadline"
              style = {styles.input}
              onChangeText={(deadline) => setJobDeadline(deadline)}  
              />
            </View>
            <View style={styles.container}>
              <Text style = {styles.header}> Applied </Text>
              <TextInput
              placeholder = "Enter Date Application was Submitted"
              style = {styles.input}
              onChangeText={(applied) => setJobApplied(applied)}  
              />
            </View>
            <View style={styles.container}>
              <Text style = {styles.header}> Job Link </Text>
              <TextInput
              placeholder = "Enter Link to Application"
              style = {styles.input}
              onChangeText={(link) => setJobLink(link)}  
              />
              <Mybutton title = "Submit" customClick = {new_app} />
            </View>
            </>
        </KeyboardAvoidingView>
        </ScrollView>
        
      );
}

const styles = StyleSheet.create({
  container: {
    flex: 10,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  input:{
    backgroundColor: '#fff', 
    padding:10, 
    margin:10,
    fontSize: 16
    },
    header:{
     marginTop: 8,
     textAlign: 'center',
     fontSize: 24,
     fontWeight: '600',
     color: '#000'
    },
    button: {
    alignItems: "center",
    backgroundColor: "#DDDDDD",
    padding: 10
  },
});
export default NewApp

import React, { useState } from 'react';
import {
  View,
  ScrollView,
  KeyboardAvoidingView,
  Alert,
  SafeAreaView,
  Text,
} from 'react-native';
import Mytextinput from './components/mytextinput';
import Mybutton from './components/MyButton';
import { openDatabase } from "expo-sqlite";

const UpdateApp = ({ navigation }) => {
	const db = openDatabase('table_applications.db')
    let [inputJobId, setJobId] = useState('');
	let [title, setJobTitle] = useState('');
    let [company, setJobCompany] = useState('');
    let [deadline, setJobDeadline] = useState('');
    let [applied, setJobApplied] = useState('');
    let [link, setJobLink] = useState('');
    //let [resume, setJobResume] =
    //let [coverletter, setJobCoverLetter] = useState('');

    let updateAllStates = (title, company, deadline, applied, link) => { //Resume, Coverletter
      setJobTitle(title);
      setJobCompany(company);
      setJobDeadline(deadline);
      setJobApplied(applied);
      setJobLink(link);
      //setResume(deadline);
      //setCoverLetter(deadline);
    };

    let searchApps = () => {
        console.log(inputJobId);
        db.transaction((tx) => {
          tx.executeSql(
            'SELECT * FROM table_user where user_id = ?',
            [inputJobId],
            console.log(inputJobId),
            (tx, results) => {
              var len = results.rows.length;
              if (len > 0) {
                let res = results.rows.item(0);
                updateAllStates(res.title, res.company, res.deadline, res.applied, res.link); //resume coverletter
              } else {
                alert('No user found');
                updateAllStates('', '', '');
              }
            }
          );
        });
    }
    let updateApp = () => {
      console.log(inputJobId, title, company, deadline, applied, link);

      if (!inputJobId) {
         alert('Please fill Job Title');
         return;
      }
      db.transaction((tx) => {
          tx.executeSql(
            'UPDATE table_applications set title=?, company=? , deadline=?, applied=?, link=? WHERE job_id=?',
            [title, company, deadline, applied, link],
            (tx, results) => {
              console.log('Results', results.rowsAffected);
              if (results.rowsAffected > 0) {
                Alert.alert(
                  'Success',
                  'Application updated successfully',
                  [
                    {
                      text: 'Ok',
                      onPress: () => navigation.navigate('HomeScreen'),
                    },
                  ],
                  { cancelable: false }
                );
              } else alert('Update Failed');
            }
          );
      });
    }
     return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={{ flex: 1, backgroundColor: 'white' }}>
        <View style={{ flex: 1 }}>
          <ScrollView keyboardShouldPersistTaps="handled">
            <KeyboardAvoidingView>
              behavior="padding"
              style={{ flex: 1, justifyContent: 'space-between' }}>
              <Mytextinput
                placeholder="Enter Job Id"
                style={{ padding: 10 }}
                onChangeText={(inputJobId) => setJobId(inputJobId)}
              />
              <Mybutton title="Search User" customClick={searchApps} />
              <Mytextinput
                placeholder="Enter Job Title"
                value={title}
                style={{ padding: 10 }}
                onChangeText={(title) => setJobTitle(title)}
              />
              <Mytextinput
                placeholder="Enter Company's Name"
                value={company}
                onChangeText={(company) => setJobCompany(company)}
                maxLength={10}
                style={{ padding: 10 }}
              />
              <Mytextinput
                value={deadline}
                placeholder="Enter Deadline for Application"
                onChangeText={(deadline) => setJobDeadline(deadline)}
                style={{ padding: 10 }}
              />
              <Mytextinput
                value={applied}
                placeholder="Enter Date when Application was Submitted"
                onChangeText={(applied) => setJobApplied(applied)}
                style={{ padding: 10 }}
              />
              <Mytextinput
                value={link}
                placeholder="Enter Date when Application was Submitted"
                onChangeText={(applied) => setJobApplied(applied)}
                maxLength={225}
                numberOfLines={5}
                multiline={true}
                style={{ textAlignVertical: 'top', padding: 10 }}
              />
              <Mybutton title="Update Application" customClick={updateApp} />
            </KeyboardAvoidingView>
          </ScrollView>
        </View>
      </View>
    </SafeAreaView>
  );
};
export default UpdateApp;
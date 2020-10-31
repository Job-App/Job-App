import React, { useState } from "react";
import {
  View,
  StyleSheet,
  Dimensions,
  Button,
  TextInput,
  Alert,
} from "react-native";
// import { withNavigation } from 'react-navigation';
// import { NavigationContainer } from '@react-navigation/native';
import { useNavigation } from "@react-navigation/native";
// import { Formik } from 'formik';
// import { StatusBar } from 'expo-status-bar';
import { openDatabase } from "react-native-sqlite-storage";

const { width, height } = Dimensions.get("screen");

const UpdateJob = (props) => {
  const navigation = useNavigation();

  const db = openDatabase("table_applications.db");

  let [company, setCompany] = useState(props.company);
  let [title, setTitle] = useState(props.title);
  let [deadline, setDeadline] = useState(props.deadline);
  let [applied, setApplied] = useState(props.applied);
  let [link, setLink] = useState(props.link);

  let updateJob = () => {
    db.transaction((tx) => {
      tx.executeSql(
        `UPDATE table_applications
        SET title=?, company=?, deadline=?, applied=?, link=?
        WHERE job_id="` +
          props.id +
          `"`,
        [title, company, deadline, applied, link],
        (txR, results) => {
          if (results.rowsAffected > 0) {
            //CHECK: alert isn't working insert console.log here
            console.log("ResultsAdded", results.rowsAffected);
            Alert.alert(
              "Success",
              "Your job application was successfully updated",
              [
                {
                  text: "Ok",
                  onPress: () =>
                    navigation.navigate("JobDetails", {
                      id: props.id,
                    }),
                },
              ],
              {
                cancelable: false,
              }
            );
          } else Alert.alert("Error", "Submission Failed");
        }
      );

      tx.executeSql(
        "select * from table_applications",
        [],
        (_, { rows: { _array } }) => console.log(_array),
        () => console.log("error fetching")
      );
    });
  };

  return (
    <>
      <View>
        <TextInput
          styles={styles.input}
          placeholder="company"
          // onBlur={handleBlur('company')}
          // value={values.company}
          defaultValue={props.company}
          onChangeText={(companyI) => setCompany(companyI)}
          clearButtonMode="always"
        />
        <TextInput
          styles={styles.input}
          placeholder="title"
          // onBlur={handleBlur('title')}
          // value={values.title}
          defaultValue={props.title}
          onChangeText={(titleI) => setTitle(titleI)}
          clearButtonMode="always"
        />
        <TextInput
          styles={styles.input}
          placeholder="deadline"
          // onBlur={handleBlur('deadline')}
          // value={values.deadline}
          defaultValue={props.deadline}
          onChangeText={(deadlineI) => setDeadline(deadlineI)}
          clearButtonMode="always"
        />
        <TextInput
          styles={styles.input}
          placeholder="applied"
          // onBlur={handleBlur('applied')}
          // value={values.applied}
          defaultValue={props.applied}
          onChangeText={(appliedI) => setApplied(appliedI)}
          clearButtonMode="always"
        />
        <TextInput
          styles={styles.input}
          placeholder="link"
          // onBlur={handleBlur('link')}
          // value={values.link}
          defaultValue={props.link}
          onChangeText={(linkI) => setLink(linkI)}
          clearButtonMode="always"
        />
        <Button onPress={updateJob} title="Submit" />
      </View>
    </>
  );
};

const styles = StyleSheet.create({
    input: {
        height: 25,
        fontSize: 18,
    },
})

export default UpdateJob;

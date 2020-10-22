import React, {Component} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
  Button,
  TextInput,
} from 'react-native';
// import { withNavigation } from 'react-navigation';
// import { NavigationContainer } from '@react-navigation/native';
// import { useNavigation } from '@react-navigation/native';
import { Formik } from 'formik';
// import { StatusBar } from 'expo-status-bar';
import { openDatabase } from "react-native-sqlite-storage";

const {width, height} = Dimensions.get('screen');

const styles = StyleSheet.create({
    container: {
    },
    input: {
        height: 25,
        fontSize: 18
    }
});

const emptyInput = {
    company: '',
    title: '',
    deadline: '',
    applied: '',
    link: ''
}

class JobForm extends Component {

    submit = (values) => {
        if (values !== emptyInput) {
            console.log(values);
            const db = openDatabase('table_applications.db')
            db.transaction(function(tx){
                tx.executeSql(
                  //"create table if not exists DataTable (id integer primary key not null, column_1 int, column_2 int, column_3 text);",
                  'CREATE TABLE IF NOT EXISTS table_applications(job_id INTEGER PRIMARY KEY AUTOINCREMENT, title VARCHAR(225), company VARCHAR(225), deadline VARCHAR(40), applied VARCHAR(40), link VARCHAR(225));',
                  []
                );
        
                tx.executeSql(
                  "INSERT INTO table_applications (title, company, deadline, applied, link) VALUES (?,?,?,?,?)",
                  [values.title, values.company, values.deadline, values.applied, values.link],
                  (tx, results) => {
                      if (results.rowsAffected > 0) { //CHECK: alert isn't working insert console.log here
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
                );s
            });
        }
    }

    renderForm = () => {
        return (
            <>
            <Formik
                initialValues={ emptyInput }
                onSubmit={values => this.submit(values)}>
                {({ handleChange, handleBlur, handleSubmit, values }) => (
                <View>
                    <TextInput
                    styles={styles.input}
                    placeholder="company"
                    onChangeText={handleChange('company')}
                    onBlur={handleBlur('company')}
                    value={values.company}
                    />
                    <TextInput
                    styles={styles.input}
                    placeholder="title"
                    onChangeText={handleChange('title')}
                    onBlur={handleBlur('title')}
                    value={values.title}
                    />
                    <TextInput
                    styles={styles.input}
                    placeholder="deadline"
                    onChangeText={handleChange('deadline')}
                    onBlur={handleBlur('deadline')}
                    value={values.deadline}
                    />
                    <TextInput
                    styles={styles.input}
                    placeholder="applied"
                    onChangeText={handleChange('applied')}
                    onBlur={handleBlur('applied')}
                    value={values.applied}
                    />
                    <TextInput
                    styles={styles.input}
                    placeholder="link"
                    onChangeText={handleChange('link')}
                    onBlur={handleBlur('link')}
                    value={values.link}
                    />
                    <Button onPress={handleSubmit} title="Submit" />
                </View>
                )}
            </Formik>
            </>
        )
    }

    render() {
        
        return(
            <View style={styles.container}>
                {this.renderForm()}
            </View>
        )
    }
}

export default JobForm;
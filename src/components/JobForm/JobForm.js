import React, { useState } from 'react'
import {
    View,
    StyleSheet,
    Dimensions,
    Button,
    TextInput,
    Alert,
    ScrollView,
    KeyboardAvoidingView,
    SafeAreaView
} from 'react-native'
// import { withNavigation } from 'react-navigation';
// import { NavigationContainer } from '@react-navigation/native';
import { useNavigation } from '@react-navigation/native'
// import { Formik } from 'formik';
// import { StatusBar } from 'expo-status-bar';
import { openDatabase } from 'react-native-sqlite-storage'

const { width, height } = Dimensions.get('screen')

const styles = StyleSheet.create({
    container: {},
    input: {
        height: 25,
        fontSize: 18,
    },
})

const emptyInput = {
    company: '',
    title: '',
    deadline: '',
    applied: '',
    link: '',
}

const JobForm = () => {
    const navigation = useNavigation()

    const db = openDatabase('table_applications.db')

    let [company, setCompany] = useState('')
    let [title, setTitle] = useState('')
    let [deadline, setDeadline] = useState('')
    let [applied, setApplied] = useState('')
    let [link, setLink] = useState('')
    let [filelink, setFLink] = useState('')


    let jobForm = () => {

        if (!company) {
            alert('Please fill in company name');
            return;
        }
        if (!title) {
            alert('Please fill in job title');
            return;
        }
            
        db.transaction((tx) => {
            tx.executeSql(
                //"create table if not exists DataTable (id integer primary key not null, column_1 int, column_2 int, column_3 text);",
                'CREATE TABLE IF NOT EXISTS table_applications(job_id INTEGER PRIMARY KEY AUTOINCREMENT, title VARCHAR(225), company VARCHAR(225), deadline VARCHAR(40), applied VARCHAR(40), link VARCHAR(225), flink VARCHAR(225));',
                []
            )

            tx.executeSql(
                'INSERT INTO table_applications (title, company, deadline, applied, link, flink) VALUES (?,?,?,?,?,?)',
                [title, company, deadline, applied, link, filelink],
                (txR, results) => {
                    if (results.rowsAffected > 0) {
                        //CHECK: alert isn't working insert console.log here
                        console.log('ResultsAdded', results.rowsAffected)
                        Alert.alert(
                            'Success',
                            'Your job application was successfully submitted',
                            [
                                {
                                    text: 'Add another',
                                },
                                {
                                    text: 'Ok',
                                    onPress: () =>
                                        navigation.push('Homepage'),
                                },
                            ],
                            { cancelable: false }
                        );

                        setCompany('')
                    } else Alert.alert('Error', 'Submission Failed')
                }
            )

            tx.executeSql(
                'select * from table_applications',
                [],
                (_, { rows: { _array } }) => console.log(_array),
                () => console.log('error fetching')
            )
        })
    }

    return (   

          <ScrollView keyboardShouldPersistTaps="handled">
            <KeyboardAvoidingView>
            <>
            <View>
                <TextInput
                    testID="add-company"
                    styles={styles.input}
                    placeholder="company"
                    // onBlur={handleBlur('company')}
                    // value={values.company}
                    onChangeText={(companyI) => setCompany(companyI)}
                    clearButtonMode="always"
                    style={{ padding: 10 }}
                />
            </View>
            <View>
                <TextInput
                    testID="add-title"
                    styles={styles.input}
                    placeholder="title"
                    // onBlur={handleBlur('title')}
                    // value={values.title}
                    onChangeText={(titleI) => setTitle(titleI)}
                    clearButtonMode="always"
                    style={{ padding: 10 }}
                />
            </View>
            <View>
                <TextInput
                    testID="add-deadline"
                    styles={styles.input}
                    placeholder="deadline"
                    // onBlur={handleBlur('deadline')}
                    // value={values.deadline}
                    onChangeText={(deadlineI) => setDeadline(deadlineI)}
                    clearButtonMode="always"
                    style={{ padding: 10 }}
                />
            </View>
            <View>
                <TextInput
                    testID="add-applied"
                    styles={styles.input}
                    placeholder="applied"
                    // onBlur={handleBlur('applied')}
                    // value={values.applied}
                    onChangeText={(appliedI) => setApplied(appliedI)}
                    clearButtonMode="always"
                />
            </View>
            <View>
                <TextInput
                    testID="add-link"
                    styles={styles.input}
                    placeholder="link"
                    // onBlur={handleBlur('link')}
                    // value={values.link}
                    onChangeText={(linkI) => setLink(linkI)}
                    clearButtonMode="always"
                    style={{ padding: 10 }}
                />
            </View>
            <View>
                <TextInput
                    testID="add-file"
                    styles={styles.input}
                    placeholder="file url"
                    // onBlur={handleBlur('link')}
                    // value={values.link}
                    onChangeText={(flinkI) => setFLink(flinkI)}
                    clearButtonMode="always"
                    style={{ padding: 10 }}
                />
                <Button
                    testID="add-submit"
                    onPress={jobForm}
                    title="Submit" />
            </View>
            </>
            </KeyboardAvoidingView>   
            </ScrollView>           
            
    )
}

export default JobForm

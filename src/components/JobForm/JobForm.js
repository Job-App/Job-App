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

const {width, height} = Dimensions.get('screen');

const styles = StyleSheet.create({
    container: {
    },
    input: {
        height: 25,
        fontSize: 18
    }
  });

class JobForm extends Component {

    submit = (values) => {
        console.log(values);
    }

    renderForm = () => {
        return (
            <>
            <Formik
                initialValues={{ company: '', title: '', deadline: '', applied: '', link: ''}}
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
    handleSubmit = () => {

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
import React from 'react';
import { Text, View, StyleSheet, Dimensions } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import JobForm from './../../components/JobForm/JobForm'
import HeaderBar from './../../components/HeaderBar/Headerbar'

const {width, height} = Dimensions.get('screen');

const AddJob = ({navigation}) => {

  const Stack = createStackNavigator()
  return (
    <>
      <HeaderBar
         navigation={Stack}
         left="" leftNav=""
         right="" rightNav="" />
      <Text style={styles.text}>Add Job</Text>
      <View style={styles.formContainer}>
        <JobForm />
      </View>
    </>
  )
}

const styles = StyleSheet.create({
  text: {
    fontSize: 36,
    fontWeight: 'bold',
    margin: 12
  },
  formContainer: {
    width: width - 24,
    alignSelf: 'center',
  }
});

export default AddJob;


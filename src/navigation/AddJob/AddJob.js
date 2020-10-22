import React from 'react';
import { Text, View } from 'react-native';
import JobForm from './../../components/JobForm/JobForm'

const AddJob = ({navigation}) => {

  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
      }}>
      <JobForm />
    </View>
  )
}

export default AddJob;


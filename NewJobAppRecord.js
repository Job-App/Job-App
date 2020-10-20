import React, {Component, useState, useEffect} from 'react';
import { StatusBar } from 'react-native'
import { AsyncStorage, Text, View, TextInput, StyleSheet, TouchableOpacity } from 'react-native'

export default class App extends Component<Props> {

  state = {
    'age' : '',
    'setAge' : ''
  }
  [age, setAge] = useState('')
  STORAGE_KEY = '@save_age'

  saveData = async () => {
    try {
         await AsyncStorage.setItem(STORAGE_KEY, age)
         setAge(age)
         alert('Data successfully saved')
       } catch (e) {
         alert('Failed to save the data to the storage')
       }
  }

  onChangeText = age => setAge(age)


  readData = async () => {
      try {
        const age = await AsyncStorage.getItem(STORAGE_KEY)
        if (age !== null) {
          setAge(age)
        }
      } catch (e) {
        alert('Failed to fetch the data from storage')
      }
    }

  onSubmitEditing = () => {
        if (!age) return
        saveData(age)
        setAge('')
      }


  render() {
    return (
        <View style={styles.container}>
          <View style={styles.header}>
            <Text style={styles.title}>Android App</Text>
          </View>
          <View style={styles.panel}>
            <Text>Enter your age here:</Text>
            <TextInput
              style={styles.input}
              value={age}
              placeholder="Age is just a number"
              onChangeText={onChangeText}
              onSubmitEditing={onSubmitEditing}
            />
            <Text style={styles.text}>Your age is {age}</Text>
            <TouchableOpacity onPress={clearStorage} style={styles.button}>
              <Text style={styles.buttonText}>Clear Storage</Text>
            </TouchableOpacity>
          </View>
        </View>
      );
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  header: {
    width: '100%',
    backgroundColor: '#dcdcdc',
    padding: 20,
    borderBottomWidth: StyleSheet.hairlineWidth,
    alignItems: 'center'
  },
  title: {
    fontSize: 22,
    color: '#333',
    fontWeight: 'bold'
  },
  panel: {
    paddingTop: 40,
    alignItems: 'center'
  },
  text: {
    fontSize: 24,
    padding: 10,
    backgroundColor: '#dcdcdc'
  },
  input: {
    padding: 15,
    height: 50,
    borderBottomWidth: 1,
    borderBottomColor: '#333',
    margin: 10
  },
  button: {
    margin: 10,
    padding: 10,
    backgroundColor: 'yellow'
  },
  buttonText: {
    fontSize: 18,
    color: '#444'
  }
})

import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
} from 'react-native';
import { withNavigation } from 'react-navigation';
import { NavigationContainer } from '@react-navigation/native';
import { useNavigation } from '@react-navigation/native';

const {width, height} = Dimensions.get('screen');

function HeaderBar(){
    const navigation = useNavigation();
    return(
        <View style={styles.container}>
            <View style={[styles.buttonContainer,styles.buttonContainerLeft]}>
                <TouchableOpacity
                    activeOpacity={.8}
                    style={styles.button}
                    onPress={() => navigation.navigate('AddJob')}>
                        <Text style={styles.plus}>Add</Text>
                </TouchableOpacity>
            </View>
            <View style={[styles.buttonContainer,styles.buttonContainerRight]}>
                <TouchableOpacity
                    activeOpacity={.8}
                    style={styles.button}
                    onPress={() => navigation.navigate('Login')}>
                        <Text style={styles.plus}>Login</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        width: width,
        height: height/12,
        backgroundColor: '#3D348B',
        flexDirection: 'row'
    },
    buttonContainer: {
        flex: 1,
        marginTop: 'auto',
        marginBottom: 10
    },
    buttonContainerLeft: {
        alignItems: 'flex-start',
    },
    buttonContainerRight: {
        alignItems: 'flex-end'
    },
    button: {
        // backgroundColor: '#E6AF2E',
        justifyContent: 'center',
        alignItems: 'center',
        // borderRadius:98,
        // width: 49,
        // height: 49,
        marginLeft: 24,
        marginRight: 24,
    },
    plus: {
        color: '#E0E2DB',
        fontSize: 24

    }
  });

export default withNavigation(HeaderBar);
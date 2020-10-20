import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
} from 'react-native';

import Cards from './../Cards/Cards';

const {width, height} = Dimensions.get('screen');

const Folders = (props) => {
    return(
        <View style={styles.container}>
            <Text style={[styles.text,styles.title]}>{props.name}</Text>
            <Cards />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        width: width - 48,
        alignSelf: 'center',
        marginTop: 24,
        borderWidth: 1,
        paddingBottom: 24
    },
    text: {
        margin: 12,
        marginBottom: 0
    },
    title: {
        fontSize: 36,
        fontWeight: 'bold'
    }
});

export default Folders;
import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
} from 'react-native';

import Cards from './../Cards/Cards';

const {width, height} = Dimensions.get('screen');

const mapCards = () => {
    const arr = [{
        id: 1,
        company: "Apple",
        title: "Software Engineer",
        closing: "10/22/2020"
    },{
        id: 2,
        company: "Google",
        title: "SWE",
        closing: "10/23/2020"
    },{
        id: 3,
        company: "Netflix",
        title: "SDE",
        closing: "10/24/2020"
    }]

    return arr.map((item) => {
        return (
            <Cards
            id={item.id}
            company={item.company}
            title={item.title}
            closing={item.closing} />
        );
    });
}

const Folders = (props) => {
    return(
        <View style={styles.container}>
            <Text style={[styles.text,styles.title]}>{props.name}</Text>
            {mapCards()}
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
import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
} from 'react-native';
import { withNavigation } from 'react-navigation'
import { NavigationContainer } from '@react-navigation/native'
import { useNavigation } from '@react-navigation/native'

import JobDetails from '../../navigation/JobDetails/JobDetails';

const {width, height} = Dimensions.get('screen');

const Cards = (props) => {
    const navigation = useNavigation()
    
    return(
        <TouchableOpacity
            activeOpacity={.8}
            onPress={() => navigation.navigate('JobDetails', { id: props.id })}>
            <View style={cardStyles.container}>
                <View style={cardStyles.companyContainer}>
                    <Text style={cardStyles.jobText}>{props.company || 'N/A'}</Text></View>
                <View style={cardStyles.jobInfoContainer}>
                    <Text style={cardStyles.text}>{props.title || 'N/A'}</Text>
                    <Text style={cardStyles.text}>{props.closing || 'N/A'}</Text>
                </View>
            </View>
        </TouchableOpacity>
    )
}

const cardStyles = StyleSheet.create({
    container: {
        width: width - 48,
        alignSelf: 'center',
        marginTop: 12,
        height: 80,
        backgroundColor: '#CCCCCC',
        flexDirection: 'row'
    },
    text: {
        flex: 1,
        textAlignVertical: 'center',
        marginLeft: 12,
    },
    jobText: {
        margin: 12,
        fontSize: 24,
        flex: 1
    },
    companyContainer: {
        alignItems: 'flex-start',
        flex: 1.5,
        margin: 12,
        marginRight: 6,
    },
    jobInfoContainer: {
        alignItems: 'flex-start',
        flex: 2,
        margin: 12,
        marginLeft: 6,
        flexDirection: 'column'
    }
});

export default Cards;
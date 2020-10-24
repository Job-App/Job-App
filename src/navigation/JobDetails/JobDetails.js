import React from 'react'
import {
    TouchableOpacity,
    Text,
    View
} from 'react-native'

const JobDetails = ({ route }) => {
    return (
        <View>
            <Text>ID: {route.key}</Text>
        </View>
    )
}

export default JobDetails

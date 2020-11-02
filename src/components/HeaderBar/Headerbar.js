import React from 'react'
import {
    View,
    Text,
    TouchableOpacity,
    StyleSheet,
    Dimensions,
} from 'react-native'
import { withNavigation } from 'react-navigation'
import { useNavigation } from '@react-navigation/native'

const { width, height } = Dimensions.get('screen')

const HeaderBar = (props) => {
    const navigation = useNavigation()

    return (
        <View style={styles.container}>
            <View style={[styles.buttonContainer, styles.buttonContainerLeft]}>
                <TouchableOpacity
                    testID="headerbar-left-button"
                    activeOpacity={0.8}
                    style={styles.button}
                    onPress={() => navigation.navigate(props.leftNav)}>
                    <Text style={styles.plus}>{props.left}</Text>
                </TouchableOpacity>
            </View>
            <View style={[styles.buttonContainer, styles.buttonContainerRight]}>
                <TouchableOpacity
                    testID="headerbar-right-button"
                    activeOpacity={0.8}
                    style={styles.button}
                    onPress={() => navigation.navigate(props.rightNav)}>
                    <Text style={styles.plus}>{props.right}</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        width: width,
        height: height / 12,
        backgroundColor: '#3D348B',
        flexDirection: 'row',
    },
    buttonContainer: {
        flex: 1,
        marginTop: 'auto',
        marginBottom: 10,
    },
    buttonContainerLeft: {
        alignItems: 'flex-start',
    },
    buttonContainerRight: {
        alignItems: 'flex-end',
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
        fontSize: 24,
    },
})

export default withNavigation(HeaderBar)

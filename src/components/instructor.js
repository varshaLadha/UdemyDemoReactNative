import React from 'react'
import {
    View,
    Text,
    Image
} from 'react-native'

const instructor = () => {

    return(
        <View style={styles.container}>
            <Text style={styles.textStyle}>Become an Instructor</Text>
        </View>
    )
}

const styles = {
    container: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#FFF',
        padding: 10,
        marginTop: 10,
    },
    textStyle: {
        fontSize: 20,
        color: '#D53149',
    }
}

export default instructor
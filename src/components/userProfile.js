import React from 'react'
import {
    View,
    Text,
    Image
} from 'react-native'

const userProfile = (props) => {

    return(
        <View style={styles.container}>
            <Image style={styles.imageContainer} source={require('../images/profile1.png')}/>
            <Text style={styles.textStyle}>{props.userData.userName}</Text>
        </View>
    )
}

const styles = {
    container: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#FFF',
        padding: 10,
    },
    imageContainer: {
        width: 100,
        height: 100
    },
    textStyle: {
        fontSize: 20,
        color: '#000',
        marginTop: 10,

    }
}

export default userProfile
import React from 'react'
import {
    View,
    Linking,
    Text,
    TouchableOpacity,
    AsyncStorage
} from 'react-native'

const Links = (props) => {
    return(
        <View style={styles.containerStyle}>
            <Text style={styles.textStyle}>Support</Text>

            <TouchableOpacity onPress={() => {props.shareApp()}}>
                <Text style={styles.textStyle}>Share the Udemy App</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => Linking.openURL('https://www.udemy.com/terms/privacy/')}>
                <Text style={styles.textStyle}>View privacy policy</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => Linking.openURL('https://www.udemy.com/terms/')}>
                <Text style={styles.textStyle}>Terms of Use</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => Linking.openURL('https://www.udemy.com/terms/copyright/')}>
                <Text style={styles.textStyle}>View Intellectual Property Policy</Text>
            </TouchableOpacity>

            {
                (props.userLoggedIn) &&
                <TouchableOpacity style={{alignItems: 'center'}} onPress={() =>{
                    props.logout()
                }}>
                    <Text style={{fontSize: 16, color: '#D53149', fontWeight: 'bold', padding: 10}}>SIGN OUT</Text>
                </TouchableOpacity>
            }
            {
                (!props.userLoggedIn) &&
                <TouchableOpacity style={{alignItems: 'center'}} onPress={() =>{
                    props.login()
                }}>
                    <Text style={{fontSize: 16, color: '#D53149', fontWeight: 'bold', padding: 10}}>SIGN IN</Text>
                </TouchableOpacity>
            }

            <View style={{alignItems: 'center'}}>
                <Text style={[styles.textStyle, {color: '#696969'}]}>Udemy v1.0.0</Text>
            </View>
        </View>
    )
}

const styles = {
    containerStyle: {
        backgroundColor: '#FFF',
        padding: 10,
        marginTop: 10
    },
    textStyle: {
        color: '#000',
        padding: 10,
        fontSize: 16,
    }
}

export default Links
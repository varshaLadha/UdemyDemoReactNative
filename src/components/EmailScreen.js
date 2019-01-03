import React, {Component} from 'react'
import {
    View,
    Text,
    TouchableOpacity,
    Alert
} from 'react-native'

import LinearGradient from 'react-native-linear-gradient';
import FloatingLabel from 'react-native-floating-labels';

export default class EmailScreen extends Component {

    constructor(props){
        super(props)

        this.state={
            email: ''
        }
    }

    validate() {
        let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/ ;
        if(reg.test(this.state.email) === false)
        {
            Alert.alert("Invalid Email","Please enter a valid email address")
        }
        else {
            this.props.navigation.navigate('PasswordScreen', {
                email: this.state.email
            })
        }
    }

    render(){
        return(
            <LinearGradient colors={['#D53149', '#84164E']} style={styles.containerView}>
                <View style={styles.containerView}>
                    <Text style={styles.greetingView}>
                        Welcome Back
                    </Text>

                    <Text style={styles.messageView}>
                        Enter your email and sign in to your account
                    </Text>

                    <FloatingLabel
                        labelStyle={styles.labelInput}
                        inputStyle={styles.input}
                        style={styles.formInput}
                        autoCapitalize="none"
                        keyboardType="email-address"
                        onChangeText={(data) => this.setState({email : data})}
                    >
                        Email
                    </FloatingLabel>

                    <TouchableOpacity style={styles.nextButton} onPress={this.validate.bind(this)}>
                        <Text style={{color: '#000', fontSize: 20, padding: 5, backgroundColor: '#FFF'}}>
                            Next
                        </Text>
                    </TouchableOpacity>
                </View>
            </LinearGradient>
        )
    }
}

const styles = {
    containerView: {
        flex: 1
    },
    greetingView: {
        alignSelf: 'center',
        fontSize: 25,
        color: '#FFF',
        marginTop: 30,
    },
    messageView: {
        alignSelf: 'center',
        fontSize: 20,
        color: '#FFF',
        marginTop: 10
    },
    labelInput: {
        color: '#FFF',
    },
    input: {
        color: '#FFF',
        fontSize: 20,
    },
    formInput: {
        marginTop: 20,
        marginRight: 20,
        marginLeft: 20,
    },
    nextButton: {
        flex: 1,
        alignSelf: 'flex-end',
        marginTop: 10,
        marginRight: 20
    },
}
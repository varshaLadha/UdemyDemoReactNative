import React, {Component} from 'react'
import {
    View,
    Text,
    ScrollView,
    Dimensions,
    TouchableOpacity,
    Alert,
    Platform,
    AsyncStorage
} from 'react-native'
import LinearGradient from 'react-native-linear-gradient';
import FloatingLabel from 'react-native-floating-labels';
import axios from 'axios'

import {baseURL, urls} from './const'

const requiredField = 'This field is required'
const invalidEmail = 'Please enter a valid email address'
const passwordLength = 'Your password must be at least 6 characters long'

export default class createAccount extends Component {

    constructor(props){
        super(props)

        this.state={
            username:'',
            email: '',
            password: '',
            usernameError: false,
            emailError: false,
            passwordError: false,
            usernameErrMsg: requiredField,
            emailErrMsg: requiredField,
            passwordErrMsg: requiredField
        }
    }

    validateData() {
        let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/ ;

        const {username, email, password} =  this.state

        if(username.length == 0){
            this.setState({usernameError: true})
        }

        if(email.length == 0){
            this.setState({
                emailError: true,
                emailErrMsg: requiredField
            })
        }
        else if(reg.test(email) === false){
            this.setState({
                emailError: true,
                emailErrMsg: invalidEmail
            })
        }

        if(password.length == 0){
            this.setState({
                passwordError: true,
                passwordErrMsg: requiredField
            })
        }
        else if(password.length < 6){
            this.setState({
                passwordError: true,
                passwordErrMsg: passwordLength
            })
        }

        if(username.length > 0 && reg.test(email) && password.length > 0){
            axios.post(baseURL+urls.userSignUp, {
                userName: username,
                email: email,
                password: password,
                loginType: 'email'
            }).
            then(async (response) => {
                //console.log(response.data)
                if(response.data.success == 0){
                    Alert.alert(response.data.error)
                    //console.log(response.data.error)
                    this.setState({showEmail: true})
                }else {
                    //console.log(response.data.response)
                    await AsyncStorage.setItem("userData", JSON.stringify(response.data.response))
                    this.props.navigation.navigate("Browse",{
                        allowBack:false,
                    })
                }
            }).
            catch((err) => {
                //console.log(err)
            })
        }
    }

    render(){
        return(
            <LinearGradient colors={['#D53149', '#84164E']} style={styles.containerView}>
                <ScrollView bounces={false}>
                    <View>
                        <Text style={styles.createAccountText}>Create an account</Text>

                        <FloatingLabel
                            labelStyle={styles.labelInput}
                            inputStyle={styles.input}
                            style={styles.formInput}
                            onChangeText={(data) => this.setState({username : data.trim(), usernameError: false})}
                        >
                            Enter your name
                        </FloatingLabel>

                        {
                            (this.state.usernameError) &&
                            <Text style={styles.errorView}>{this.state.usernameErrMsg}</Text>
                        }

                        <FloatingLabel
                            labelStyle={styles.labelInput}
                            inputStyle={styles.input}
                            style={styles.formInput}
                            onChangeText={(data) => this.setState({email: data.trim(), emailError: false})}
                        >
                            Enter your email
                        </FloatingLabel>

                        {
                            (this.state.emailError) &&
                            <Text style={styles.errorView}>{this.state.emailErrMsg}</Text>
                        }

                        <FloatingLabel
                            labelStyle={styles.labelInput}
                            inputStyle={styles.input}
                            password={true}
                            style={styles.formInput}
                            onChangeText={(data) => this.setState({password: data.trim(), passwordError: false})}
                        >
                            Password (6+ character)
                        </FloatingLabel>

                        {
                            (this.state.passwordError) &&
                            <Text style={styles.errorView}>{this.state.passwordErrMsg}</Text>
                        }

                        <View style={styles.accountHandler}>
                            <TouchableOpacity onPress={() => this.props.navigation.navigate('EmailScreen')}>
                                <Text style={{color: '#FFF', fontSize: 20}}>
                                    {`Have an account?\nSign In`}
                                </Text>
                            </TouchableOpacity>

                            <TouchableOpacity onPress={this.validateData.bind(this)}>
                                <Text style={{backgroundColor: '#FFF', color: '#000', fontSize: 18, padding: 10}}>
                                    Create account
                                </Text>
                            </TouchableOpacity>
                        </View>

                        <Text style={styles.termsView}>
                            {`By clicking on \'Sign in\' you agree to \nour Terms of Use and Privacy Policy`}
                        </Text>
                    </View>
                </ScrollView>
            </LinearGradient>
        )
    }
}

const styles = {
    containerView: {
        flex: 1
    },
    createAccountText: {
        fontSize: 25,
        color: '#FFF',
        marginTop: 55,
        width: null,
        flex: 1,
        alignSelf: 'center',
    },
    formInput: {
        marginTop: 20,
        marginRight: 20,
        marginLeft: 20,
    },
    labelInput: {
        color: '#FFF',
    },
    input: {
        color: '#FFF',
        fontSize: 20,
    },
    accountHandler: {
        flexDirection: 'row',
        marginTop: 10,
        marginLeft: 20,
        marginRight: 20,
        width: Dimensions.get('window').width - 40,
        flex: 1,
        justifyContent: 'space-between'
    },
    termsView: {
        alignSelf: 'center',
        marginTop: 20,
        width: null,
        flex: 1,
        fontSize: 16,
        color: "#FFF"
    },
    errorView: {
        marginLeft: 20,
        marginRight: 20,
        fontSize: 16,
        color: '#FFFF00'
    }
}
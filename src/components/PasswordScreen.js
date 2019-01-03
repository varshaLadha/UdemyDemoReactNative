import React, {Component} from 'react'
import {
    View,
    Text,
    TouchableOpacity,
    Alert,
    AsyncStorage,
} from 'react-native'

import LinearGradient from 'react-native-linear-gradient';
import FloatingLabel from 'react-native-floating-labels';
import { StackActions,NavigationActions } from 'react-navigation'
import {connect} from 'react-redux'

import {userLogin} from '../Actions/UserActions'

class PasswordScreen extends Component {

    constructor(props){
        super(props)

        this.state={
            email: this.props.navigation.getParam('email',''),
            password: '',
            showEmail:false
        }
    }

    signIn() {
        debugger
        let data = {
            email: this.state.email,
            password: this.state.password,
            loginType: 'email'
        }

        this.props.userLogin(data)
    }

    componentWillReceiveProps = async (nextProps) =>{
        debugger
        if(nextProps.status == 0){
            Alert.alert("Problem signing in", nextProps.error)

            this.setState({showEmail: true})
        }else {
            await AsyncStorage.setItem("userData", JSON.stringify(nextProps.userData))

            const resetAction = StackActions.reset({
                index: 0,
                actions: [NavigationActions.navigate({ routeName: 'Slider' })],
            });
            this.props.navigation.dispatch(resetAction);
        }
    }

    render(){
        return(
            <LinearGradient colors={['#D53149', '#84164E']} style={styles.containerView}>
                <View style={styles.containerView}>
                    <Text style={styles.greetingView}>
                        Almost there
                    </Text>

                    <Text style={styles.messageView}>
                        Enter your password to sign in with
                    </Text>
                    {
                        (this.state.showEmail) &&
                        <FloatingLabel
                            labelStyle={styles.labelInput}
                            inputStyle={styles.input}
                            style={styles.formInput}
                            autoCapitalize="none"
                            keyboardType="email-address"
                            onChangeText={(data) => this.setState({email : data})}
                            value={this.state.email}
                        >
                            Email
                        </FloatingLabel>
                    }


                    <FloatingLabel
                        labelStyle={styles.labelInput}
                        inputStyle={styles.input}
                        password={true}
                        style={styles.formInput}
                        onChangeText={(data) => this.setState({password: data})}
                    >
                        Password (6+ character)
                    </FloatingLabel>

                    <TouchableOpacity style={styles.signInButton} onPress={this.signIn.bind(this)}>
                        <Text style={{color: '#000', fontSize: 20, padding: 5, backgroundColor: '#FFF'}}>
                            Sign in
                        </Text>
                    </TouchableOpacity>

                    <Text style={styles.termsView}>
                        {`By clicking on \'Sign in\' you agree to \nour Terms of Use and Privacy Policy`}
                    </Text>
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
    signInButton: {
        flex: 1,
        alignSelf: 'flex-end',
        marginTop: 10,
        marginRight: 20
    },
    termsView: {
        alignSelf: 'center',
        width: null,
        flex: 1,
        fontSize: 16,
        color: "#FFF"
    },
}

const mapStateToProps = state => {
    return{
        status: state.User.status,
        userData: state.User.userData,
        error: state.User.error
    }
}

export default connect(mapStateToProps,{
    userLogin
})(PasswordScreen)
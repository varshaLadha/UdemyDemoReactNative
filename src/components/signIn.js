import React, {Component} from 'react'
import {
    Text,
    View,
    TouchableOpacity,
    ScrollView,
    Image,
    Dimensions,
    Linking
} from 'react-native'
import LinearGradient from 'react-native-linear-gradient';

const width = Dimensions.get("window").width
const viewWidth = (width / 2) - 50

export default class signIn extends Component {
    render() {
        return (
            <LinearGradient colors={['#D53149', '#84164E']} style={styles.containerView}>
                <ScrollView bounces={false}>
                    <View>
                        <TouchableOpacity style={styles.emailLoginView}
                                          onPress={() => this.props.navigation.navigate('EmailScreen')}>
                            <View style={{flexDirection: 'row'}}>
                                <Image
                                    style={styles.imageView}
                                    source={require('../images/mail.png')}
                                />
                                <Text style={{fontSize: 16, color: '#000', marginLeft: 16}}>
                                    Sing in with email
                                </Text>
                            </View>
                        </TouchableOpacity>

                        <View style={styles.seperatorView}>
                            <View style={styles.seperatorLine}/>
                            <Text style={styles.orText}>or</Text>
                            <View style={styles.seperatorLine}/>
                        </View>

                        <TouchableOpacity onPress={() => this.props.navigation.navigate('CreateAccount')}
                                          style={styles.createAccountView}>
                            <Text style={styles.createAccountText}>New here? Create an account</Text>
                        </TouchableOpacity>

                        <TouchableOpacity onPress={() => Linking.openURL('https://www.udemy.com/terms/')}
                                          style={styles.createAccountView}>
                            <Text style={styles.createAccountText}>Terms of use</Text>
                        </TouchableOpacity>


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
    emailLoginView: {
        height: 55,
        flex: 1,
        width: null,
        marginTop: 70,
        marginRight: 20,
        marginLeft: 20,
        alignItems: 'center',
        backgroundColor: '#FFF',
        justifyContent: 'center'
    },
    imageView: {
        width: 25,
        height: 25
    },
    seperatorView: {
        marginTop: 55,
        marginLeft: 20,
        marginRight: 20,
        flexDirection: 'row',
        justifyContent: 'center',
        height: 30,
        width: null,
        flex: 1
    },
    seperatorLine: {
        width: viewWidth,
        height: 1,
        marginTop: 15,
        backgroundColor: '#FFF'
    },
    orText: {
        fontSize: 20,
        color: '#FFF',
        marginLeft: 20,
        marginRight: 20
    },
    createAccountView: {
        width: null,
        flex: 1,
        alignSelf: 'center',
        marginTop: 100
    },
    createAccountText: {
        color: '#FFF',
        fontSize: 20
    }
}
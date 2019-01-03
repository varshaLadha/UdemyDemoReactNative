import React from 'react'
import {
    Text,
    View,
    Dimensions,
    Image,
    TouchableOpacity,
    Platform
} from 'react-native'
import {NavigationActions, StackActions} from "react-navigation";

const height = Dimensions.get("window").height
const headerHeight = (height*8)/100

const Header = (props) => {

    return(
        <View style={[styles.headerStyle, {justifyContent: 'space-between'}]}>
            <View style={{flexDirection: 'row', alignItems: 'center' }}>
                {
                    (props.showBack) &&
                        <View>
                            <TouchableOpacity onPress={() => props.navigation.goBack()}>
                                <Image style={styles.backButton} source={require('../../images/backarrow.png')}/>
                            </TouchableOpacity>
                        </View>
                }

                <Text style={[styles.textStyle, {marginLeft: 10}]}>{props.children}</Text>
            </View>
            {
                (!props.loggedIn) &&
                    <View>
                        <TouchableOpacity onPress={() => props.onSignIn()}>
                            <Text style={[styles.textStyle, {fontSize: 16}]}>SIGN IN</Text>
                        </TouchableOpacity>
                    </View>
            }
        </View>
    )
}

const styles = {
    headerStyle: {
        alignSelf: 'stretch',
        height: headerHeight,
        backgroundColor: '#D53149',
        flexDirection: 'row',
        marginTop: Platform.OS === 'ios'? 24 : 0,
        alignItems: 'center'
    },
    textStyle: {
        alignSelf: 'center',
        color: '#FFF',
        fontSize: 20,
        fontWeight: '600',
        paddingTop: 10,
        paddingBottom: 10,
        marginRight: 10,
    },
    backButton: {
        alignSelf: 'center',
        padding: 5,
        marginLeft: 20,
        tintColor: '#FFF',
    }
}

export default Header
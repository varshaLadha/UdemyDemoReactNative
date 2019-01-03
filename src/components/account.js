import React, {Component} from 'react'
import {
    View,
    Image,
    Text,
    ScrollView,
    AsyncStorage,
    TouchableOpacity,
    Alert
} from 'react-native'
import Share, {ShareSheet, Button} from 'react-native-share';

import Header from './GlobalHeader/globalHeader.index'
import UserProfile from './userProfile'
import Instructor from './instructor'
import Preferences from './preferences'
import Links from './links'
import {NavigationActions, StackActions} from "react-navigation";

var userData

export default class Account extends Component{

    state = {
        userLoggedIn: false,
        first:false,
        second: false,
        third: false,
        videoQuality: '360p',
        visible: false

    }

    constructor(props){
        super(props)
        this.userLoggedIn()
    }

    onCancel() {
        this.setState({visible:false});
    }
    onOpen() {
        this.setState({visible:true});
    }

    userLoggedIn = async () => {
        userData = await AsyncStorage.getItem("userData")
        userData = JSON.parse(userData)

        if(userData){
            this.setState({userLoggedIn: true})
        }else {
            this.setState({userLoggedIn: false})
        }

    }

    shareApp(){
        const shareOptions = {
            title: 'Share Udemy app',
            url: 'some share url',
        };

        Share.open(shareOptions);
    }

    toggleSwitch(switchKey,value) {
        debugger
        switch(switchKey){
            case 'first':
                this.setState({first: value})
                break
            case 'second':
                this.setState({second: value})
                break
            case 'third':
                this.setState({third: value})
                break
        }
    }

    videoQuality(value){
        this.setState({videoQuality: value})
    }

    logout = async () =>{
        debugger
        await AsyncStorage.removeItem("userData")

        const resetAction = StackActions.reset({
            index: 0,
            actions: [NavigationActions.navigate({ routeName: 'Slider' })],
            key: null
        });
        this.props.navigation.dispatch(resetAction);
        //this.props.navigation.dispatch(StackActions.popToTop());

    }

    signIn(){
        const resetAction = StackActions.reset({
            index: 0,
            actions: [NavigationActions.navigate({ routeName: 'EmailScreen' })],
            key: null
        });
        this.props.navigation.dispatch(resetAction);
    }

    render(){
        return(
            <View style={styles.parentContainer}>
                <Header showBack={false} loggedIn={true}>Account</Header>
                <ScrollView bounces={false}>
                    <View style={{margin: 10}}>
                        {
                            (this.state.userLoggedIn) &&
                                <View>
                                    <UserProfile userData={userData}/>
                                    <Instructor/>
                                    <Preferences
                                        firstSwitch={this.state.first}
                                        secondSwitch={this.state.second}
                                        thirdSwitch={this.state.third}
                                        videoQuality={this.state.videoQuality}
                                        onEdit={(switchKey,switchValue)=>this.toggleSwitch(switchKey,switchValue)}
                                        videoQualityChange={(value) => this.videoQuality(value)}
                                    />
                                </View>
                        }

                        <Links
                            userLoggedIn={this.state.userLoggedIn}
                            logout={() => {this.logout()}}
                            login={() => this.signIn()}
                            shareApp={() => this.shareApp()}
                        />
                    </View>
                </ScrollView>
            </View>
        )
    }
}

const styles = {
    parentContainer: {
        flex: 1
    },
    titleText:{
        fontSize: 20,
        marginTop: 10
    },
}
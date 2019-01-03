import React, {Component} from 'react'
import {
    View,
    Text,
    TouchableOpacity,
    AsyncStorage,
    ScrollView,
    Dimensions,
    Image,
    Alert
} from 'react-native'

const height = Dimensions.get("window").height
const viewContainerHeight = (height * 90)/100
const bottomBarHeight = height - viewContainerHeight
const width = Dimensions.get("window").width
const barWidth = width/5

export default class Browse extends Component {

    render(){
        debugger
        return(
            <View style={styles.container}>
                <ScrollView style={styles.viewContainer} bounces={false}>
                    <View>
                        <TouchableOpacity onPress={async () =>{
                            await AsyncStorage.removeItem("userData")
                            this.props.navigation.navigate("Slider")
                        }}>
                            <Text>Log out</Text>
                        </TouchableOpacity>
                    </View>
                </ScrollView>
                {/*<View style={styles.bottomBar}>
                    <TouchableOpacity style={styles.tabs} onPress={() => Alert.alert("Featured")}>
                        <View style={{alignItems: 'center'}}>
                            <Image source={require('../images/feature_focused.png')}/>
                            <Text style={{color: '#FFF'}}>Featured</Text>
                        </View>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.tabs} onPress={() => Alert.alert("Search")}>
                        <View style={{alignItems: 'center'}}>
                            <Image source={require('../images/search.png')}/>
                            <Text style={{color: '#a6a2a2'}}>Search</Text>
                        </View>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.tabs} onPress={() => Alert.alert("My course")}>
                        <View style={{alignItems: 'center'}}>
                            <Image source={require('../images/play.png')}/>
                            <Text style={{color: '#a6a2a2'}}>Mycourse</Text>
                        </View>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.tabs} onPress={() => Alert.alert("Wishlist")}>
                        <View style={{alignItems: 'center'}}>
                            <Image source={require('../images/heart.png')}/>
                            <Text style={{color: '#a6a2a2'}}>Wishlist</Text>
                        </View>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.tabs} onPress={() => Alert.alert("Account")}>
                        <View style={{alignItems: 'center'}}>
                            <Image source={require('../images/profile.png')}/>
                            <Text style={{color: '#a6a2a2'}}>Account</Text>
                        </View>
                    </TouchableOpacity>
                </View>*/}
            </View>
        )
    }
}

const styles = {
    container: {
        flex: 1
    },
    viewContainer: {
        width: width,
        height: viewContainerHeight
    },
    bottomBar: {
        height: bottomBarHeight,
        width: width,
        backgroundColor: '#24262e',
        flexDirection: 'row',
        paddingTop: 10
    },
    tabs: {
        flex: 0.2,
        height: bottomBarHeight,
        width: barWidth,
        flexDirection: 'column',
    },
}
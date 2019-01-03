import React, {Component} from 'react'
import {
    View,
    Image,
    Dimensions,
    AsyncStorage,
    Platform
} from 'react-native'
import Slick from 'react-native-slick';
import SplashScreen from 'react-native-splash-screen'

import Button from './Button'
import {NavigationActions, StackActions} from "react-navigation";

const height = Dimensions.get("window").height
const bottomBarHeight = Platform.OS === 'ios'? 60 :75
const sliderHeight = height - bottomBarHeight
const width = Dimensions.get("window").width
const barWidth = width/2

const images = [
    require('../images/image1.jpg'),
    require('../images/image2.jpg'),
    require('../images/image3.jpg')
]

class Slider extends Component{

    constructor(props){
        //Alert.alert(bottomBarHeight+"")
        super(props)
        console.disableYellowBox = true;
        this.userLoggedIn()
    }

    componentDidMount(){
        SplashScreen.hide()
    }

    static navigationOptions = {
        header: null
    };

    userLoggedIn = async () => {
        const userData = await AsyncStorage.getItem("userData")

        if(userData){

            const resetAction = StackActions.reset({
                index: 0,
                actions: [NavigationActions.navigate({ routeName: 'Browse' })],
            });
            this.props.navigation.dispatch(resetAction);
        }
    }

    render() {
        var slider = []
        for (let i = 0; i < images.length; i++) {
            slider.push(
                <View style={styles.slide1} key={i}>
                    <Image key={`images${i}`}
                           source={images[i]}
                           style={{width: width, height: sliderHeight, resizeMode: 'contain'}}/>
                </View>
            )
        }

        return (
            <View style={styles.container}>
                <View>
                    <Slick style={styles.wrapper} height={sliderHeight}
                           dot={<View style={{
                               backgroundColor: '#696969',
                               width: 8,
                               height: 8,
                               borderRadius: 4,
                               marginLeft: 3,
                               marginRight: 3,
                               marginTop: 3,
                               marginBottom: 3
                           }}/>}
                           activeDot={<View style={{
                               backgroundColor: '#D53149',
                               width: 8,
                               height: 8,
                               borderRadius: 4,
                               marginLeft: 3,
                               marginRight: 3,
                               marginTop: 3,
                               marginBottom: 3
                           }}/>}
                    >
                        {slider}
                    </Slick>
                </View>
                <View style={styles.bottomBarContainer}>
                    <Button onPress={() => this.props.navigation.navigate("Browse")}>
                        Browse
                    </Button>
                    <Button onPress={() => this.props.navigation.navigate('SignIn')}>
                        Sign In
                    </Button>
                </View>
            </View>
        )
    }
}

const styles = {
    wrapper:{
    },
    container: {
        flex: 1
    },
    sliderImage: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    bottomBarContainer: {
        backgroundColor: '#054a89',
        height: bottomBarHeight,
        flexDirection: 'row',
        alignItems: 'center',
    }
}

export default Slider

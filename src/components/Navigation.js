import React, { Component } from 'react';
import {
    createStackNavigator,
    TabNavigator,
    createBottomTabNavigator
} from 'react-navigation';
import {Image} from 'react-native'
import Slider from "./Slider";
import signIn from "./signIn";
import createAccount from "./createAccount";
import EmailScreen from "./EmailScreen";
import PasswordScreen from "./PasswordScreen";
import Featured from "./featured";
import Search from "./Search";
import Mycourse from "./Mycourse";
import Wishlist from "./wishlist";
import Account from "./account";
import CourseDetail from './courseDetail'
import subCategoryData from "./subCategoryData";

const FeaturedNavigator = createStackNavigator({
    Featured: {screen: Featured},
    CourseDetail: {screen: CourseDetail},
    SubCategoryData: {screen: subCategoryData}
}, {
    navigationOptions: {
        header: null,
        headerMode: 'none',
        headerStyle: {
            backgroundColor: '#D53149',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
            fontWeight: 'bold',
        },
    }
});

const MycourseNavigator = createStackNavigator({
    Mycourse: {screen: Mycourse},
    CourseDetail: {screen: CourseDetail},
    SubCategoryData: {screen: subCategoryData}
}, {
    navigationOptions: {
        header: null,
        headerMode: 'none',
        headerStyle: {
            backgroundColor: '#D53149',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
            fontWeight: 'bold',
        },
    }
});

const WishlistNavigator = createStackNavigator({
    Wishlist: {screen: Wishlist},
    CourseDetail: {screen: CourseDetail},
    SubCategoryData: {screen: subCategoryData}
}, {
    navigationOptions: {
        header: null,
        headerMode: 'none',
        headerStyle: {
            backgroundColor: '#D53149',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
            fontWeight: 'bold',
        },
    }
});

const SearchNavigator = createStackNavigator({
    Search: {screen: Search},
    SubCategoryData: {screen: subCategoryData},
    CourseDetail: {screen: CourseDetail},
}, {
    navigationOptions: {
        header: null,
        headerMode: 'none',
        headerStyle: {
            backgroundColor: '#D53149',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
            fontWeight: 'bold',
        },
    }
});

const BrowseNavigator = createBottomTabNavigator({
    Featured: {
        screen: FeaturedNavigator,
        navigationOptions: ({ navigation }) => ({
            title: 'Featured',
            tabBarIcon: ({tintColor}) => (
                <Image
                    style={{tintColor: tintColor}}
                    source={require('../images/feature.png')}
                />
            )
        }),
    },
    Search: {
        screen: SearchNavigator,
        navigationOptions: ({ navigation }) => ({
            title: 'Search',
            tabBarIcon: ({tintColor}) => (
                <Image
                    style={{tintColor: tintColor}}
                    source={require('../images/search.png')}
                />
            )
        }),
    },
    Mycourse: {
        screen: MycourseNavigator,
        navigationOptions: ({ navigation }) => ({
            title: 'Mycourse',
            tabBarIcon: ({tintColor}) => (
                <Image
                    style={{tintColor: tintColor}}
                    source={require('../images/play.png')}
                />
            )
        }),
    },
    Wishlist: {
        screen: WishlistNavigator,
        navigationOptions: ({ navigation }) => ({
            title: 'Wishlist',
            tabBarIcon: ({tintColor}) => (
                <Image
                    style={{tintColor: tintColor}}
                    source={require('../images/heart.png')}
                />
            )
        }),
    },
    Account: {
        screen: Account,
        navigationOptions: ({ navigation }) => ({
            title: 'Account',
            tabBarIcon: ({tintColor}) => (
                <Image
                    style={{tintColor: tintColor}}
                    source={require('../images/profile.png')}
                />
            )
        }),
    },
}, {
    tabBarOptions: {
        activeTintColor: '#FFF', // active icon color
        inactiveTintColor: '#a6a2a2',  // inactive icon color
        style: {
            paddingTop: 10,
            backgroundColor: '#24262e' // TabBar background
        },labelStyle: {
            fontSize: 14,
        },
    }
},{
    navigationOptions: {
        header:null,
        headerMode: 'none',
        headerStyle: {
            backgroundColor: '#D53149',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
            fontWeight: 'bold',
        },
    },
})

const Navigator = createStackNavigator({
    Slider: {screen: Slider},
    SignIn: {screen: signIn},
    CreateAccount: {screen: createAccount},
    EmailScreen: {screen: EmailScreen},
    PasswordScreen: {screen: PasswordScreen},
    Browse: {
        screen: BrowseNavigator
    }
},{
    navigationOptions: {
        header:null,
        headerMode: 'none',
        headerStyle: {
            backgroundColor: '#D53149',
        },
        headerTintColor: '#fff',
            headerTitleStyle: {
            fontWeight: 'bold',
        },
    },
})

export default Navigator

/*
export default class Navigation extends Component{
    render(){
        return(
            <Navigator/>
        )
    }
}*/

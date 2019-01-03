import React, {Component} from 'react'
import {
    View,
    Image,
    Text,
    ScrollView,
    Dimensions,
    Alert,
    AsyncStorage
} from 'react-native'
import axios from 'axios'

import Header from './GlobalHeader/globalHeader.index'
import CategoryData from './categoryData'
import PopularCourse from './popularCourse'

import {baseURL, urls} from './const'
import {NavigationActions, StackActions} from "react-navigation";
import {connect} from 'react-redux'

import {getCategoryData} from '../Actions/CategoryAction'

var loggedIn = false

class Featured extends Component{

    state = {
        categoryData: [],
        popularCourses: []
    }

    static navigationOptions = ({navigation}) => ({
        headerLeft: null
    })

    constructor(props){
        super(props)
        this.userLoggedIn()
    }

    signIn(){
        const resetAction = StackActions.reset({
            index: 0,
            actions: [NavigationActions.navigate({ routeName: 'EmailScreen' })],
            key: null
        });
        this.props.navigation.dispatch(resetAction);
    }

    userLoggedIn = async () => {
        const userData = await AsyncStorage.getItem("userData")

        if(userData){
            loggedIn = true
        }else {
            loggedIn = false
        }
    }

    componentWillReceiveProps(nextProps){
        debugger
        if(nextProps.status == 0){
            Alert.alert("Error", "No data found")
        }else {
            this.setState({categoryData: nextProps.categoryData})
        }
    }

    componentDidMount(){
        debugger
        this.props.getCategoryData()

        axios.get(baseURL+urls.popularCourses).
        then((response) => {
            if(response.data.success == 1){
                this.setState({popularCourses: response.data.response})
            }else {
                Alert.alert("Error", "No data found")
            }
        }).catch((err) => {
            console.log(err)
            //Alert.alert(err)
        })
    }

    renderCategoryData(){
        return this.state.categoryData.map(categoryData =>
            <CategoryData key={categoryData.id} category={categoryData} navigation={this.props.navigation}/>
        )
    }

    renderPopularCourseData(){
        return this.state.popularCourses.map(popularCourse =>
            <PopularCourse key={popularCourse.id} course={popularCourse}/>
        )
    }

    render(){
        return(
            <View style={styles.parentContainer}>
                <Header showBack={false} loggedIn={loggedIn} onSignIn={() => this.signIn()}>Featured</Header>
                <ScrollView bounces={false}>
                    <View style={{marginLeft: 10}}>
                        <Text style={styles.titleText}>Courses Channel</Text>
                        <ScrollView style={{marginTop: 10}} horizontal={true} showsHorizontalScrollIndicator={false} bounces={false}>
                            {this.renderCategoryData()}
                        </ScrollView>

                        <Text style={styles.titleText}>Advance Your career</Text>
                        <ScrollView style={{marginTop: 10}} horizontal={true} showsHorizontalScrollIndicator={false} bounces={false}>
                            {this.renderPopularCourseData()}
                        </ScrollView>
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
    }
}

mapStateToProps = state => {
    return{
        status: state.Category.status,
        categoryData: state.Category.categoryData
    }
}

export default connect(mapStateToProps, {
    getCategoryData
})(Featured)
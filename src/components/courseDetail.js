import React, {Component} from 'react'
import {
    View,
    Text,
    ScrollView,
    Alert,
} from 'react-native'

import Header from './GlobalHeader/globalHeader.index'
import axios from "axios/index";
import {baseURL, urls} from "./const";
import PopularCourse from './popularCourse'
import SubCategoryList from "./subCategoryList";

var id, title, url

export default class courseDetail extends Component{

    state = {
        subcategoryData: [],
        categoryPopularCourse: []
    }

    constructor(props){
        super(props)
        const {navigation} = this.props
        id = navigation.getParam('id','')
        title = navigation.getParam('title','')
    }

    componentWillMount(){
        url=baseURL+urls.categoryPopularCourse+id

        axios.get(url).then((response) => {
            if(response.data.success == 1){
                this.setState({categoryPopularCourse: response.data.response})
            }else {
                Alert.alert("Error", response.data.error)
            }
        })

        axios.get(baseURL+urls.subcategory+id).then((response) => {
            if(response.data.success == 1){
                this.setState({subcategoryData: response.data.response})
            }else {
                Alert.alert("Error",response.data.error)
            }
        })
    }

    renderPopularCourseData(){
        return this.state.categoryPopularCourse.map(popularCourse =>
            <PopularCourse key={popularCourse.id} course={popularCourse}/>
        )
    }

    renderSubcourseListData(){
        debugger
        return this.state.subcategoryData.map(subCategoryList =>
            <SubCategoryList key={subCategoryList.id} categoryData={false} course={subCategoryList} navigation={this.props.navigation}/>
        )
    }

    render(){
        //console.log(this.state.categoryPopularCourse)

        return(
            <View style={styles.parentContainer}>
                <Header showBack={true} loggedIn={true} navigation={this.props.navigation}>{title}</Header>
                <ScrollView bounces={false}>
                    <View>
                        <Text style={styles.textStyle}>Popular Courses</Text>
                        <ScrollView bounces={false} style={{backgroundColor: '#FFF', paddingBottom: 10}} horizontal={true} showsHorizontalScrollIndicator={false}>
                            {this.renderPopularCourseData()}
                        </ScrollView>

                        <Text style={styles.textStyle}>Browse Subcategories</Text>
                        <ScrollView bounces={false} style={{backgroundColor: '#FFF'}}>
                            {this.renderSubcourseListData()}
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
    textStyle: {
        marginTop: 10,
        marginBottom: 10,
        paddingLeft: 18,
        color: '#696969'
    }
}
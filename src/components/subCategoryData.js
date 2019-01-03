import React, {Component} from 'react'
import {
    View,
    ScrollView,
    Alert,
    Dimensions,
    TouchableOpacity,
    Text,
    Image,
    Platform,
    FlatList
} from 'react-native'

import Header from './GlobalHeader/globalHeader.index'
import axios from "axios/index";
import {baseURL, urls} from "./const";
import SubCategoryDataView from './subCategoryDataView'
import CategoryData from './categoryData'

const height = Dimensions.get("window").height
const searchBarHeight = (height*10)/100

var id, title, url, categoryData, searchKeyword

export default class subCategoryData extends Component {

    state = {
        subCategoryDetailData: [],
        categoryData: []
    }

    constructor(props){
        super(props)
        const {navigation} = this.props
        id = navigation.getParam('id','')
        title = navigation.getParam('title','')
        categoryData = navigation.getParam('categoryData', '')
        searchKeyword = navigation.getParam('searchKeyword', '')
        //alert(searchKeyword)
    }

    componentWillMount(){
        debugger
        if(categoryData && searchKeyword){
            url = baseURL+urls.searchData+title
        }else if(categoryData){
            url = baseURL+urls.allCoursesData+id
        }else{
            url=baseURL+urls.subCategoryDetailData+id
        }

        axios.get(url).then((response) => {
            if(response.data.success == 1){
                this.setState({subCategoryDetailData: response.data.response})
            }else {
                if(categoryData && searchKeyword){
                     axios.get(baseURL+urls.categoryData).
                     then((response) =>{
                         if(response.data.success == 1){
                             this.setState({categoryData: response.data.response})
                         }else {
                             Alert.alert("Error", "No data found")
                         }
                     })
                }else {
                    Alert.alert("Sorry", response.data.error)
                }
            }
        }).catch((err) => {
            console.log(err)
        })
    }

    renderSubCategoryDetailData(){
        debugger
        return this.state.subCategoryDetailData.map(subCategoryList =>
            <SubCategoryDataView key={subCategoryList.id} course={subCategoryList} />
        )
    }

    renderCategoryData({item,index})
    {
        return <CategoryData key={item.id} category={item} navigation={this.props.navigation}/>
    }


    render(){
        return(
            <View style={styles.parentContainer}>
                {
                    (categoryData) &&
                    <View style={styles.searchBarContainer}>
                        <View style={styles.searchBar}>
                            <TouchableOpacity onPress={() => this.props.navigation.goBack()}>
                                <Image
                                    source={require('../images/backarrow.png')}
                                />
                            </TouchableOpacity>
                            <Text style={styles.textStyle}>{title}</Text>
                        </View>
                    </View>
                }
                {
                    (!categoryData) &&
                    <Header showBack={true} loggedIn={true} navigation={this.props.navigation}>{title}</Header>
                }

                {
                    (this.state.subCategoryDetailData.length > 0) &&
                    <ScrollView style={{backgroundColor: '#FFF', paddingBottom: 10}} bounces={false}>
                        {this.renderSubCategoryDetailData()}
                    </ScrollView>
                }
                {
                    (this.state.subCategoryDetailData.length == 0 && searchKeyword == true) &&
                        <ScrollView bounces={false}>
                            <View style={styles.noDataViewContainer}>
                                <Text style={styles.noDataTextStyle}>No data found for your search {title}</Text>
                                <FlatList
                                    numColumns={2}
                                    style={{marginTop: 20, flexDirection: 'row', flexWrap: 'wrap'}}
                                    data={this.state.categoryData}
                                    renderItem={(item) => this.renderCategoryData(item)}
                                />
                            </View>
                        </ScrollView>
                }

            </View>
        )
    }
}

const styles = {
    parentContainer: {
        flex: 1,
    },
    searchBarContainer: {
        height: searchBarHeight,
        backgroundColor: '#D53149',
        marginTop: Platform.OS === 'ios'? 24 : 0,
    },
    searchBar: {
        flex: 1,
        margin: 10,
        flexDirection: 'row',
        padding: 2,
        backgroundColor: '#FFF',
        alignItems: 'center'
    },
    textStyle: {
        marginLeft: 10,
        fontSize: 16,
    },
    noDataTextStyle: {
        fontSize: 16,
        fontWeight: 'bold'
    },
    noDataViewContainer: {
        alignItems: 'center',
        marginTop: 30,
    }
}
import React, {Component} from 'react'
import {
    View,
    Image,
    Text,
    ScrollView,
    Dimensions,
    Platform,
    TouchableOpacity,
    TextInput,
    Alert
} from 'react-native'

import {connect} from 'react-redux'

import {getCategoryData} from '../Actions/CategoryAction'
import SubCategoryList from "./subCategoryList";
import SubCategoryData from './subCategoryData'

const searchBarHeight = 65

class Search extends Component{

    state = {
        searchKeyword: '',
        image: 1,
        uri: require('../images/backarrow.png'),
        categoryData: [],
        searchedData: []
    }

    changeImage(){
        debugger
        if(this.state.image === 1){
            this.setState({
                uri: require('../images/search.png'),
                image: 2
            })
        }else {
            this.setState({
                uri: require('../images/backarrow.png'),
                image: 1
            })
        }

    }

    static navigationOptions = ({navigation}) => ({
        headerLeft: null
    })

    constructor(props){
        super(props)
    }

    search(){
        debugger
        this.props.navigation.navigate("SubCategoryData", {
            searchKeyword: true,
            categoryData: true,
            title: this.state.searchKeyword
        })
    }

    componentWillMount() {
        debugger
        this.setState({categoryData: this.props.categoryData})
    }

    renderCategoryData(){
        return this.state.categoryData.map(categoryList =>
            <SubCategoryList key={categoryList.id}
                             course={categoryList}
                             navigation={this.props.navigation}
                             categoryData={true}/>
        )
    }

    render(){
        debugger
        return(
            <View style={styles.parentContainer}>
                <View style={styles.searchBarContainer}>
                    <View style={styles.searchBar}>
                        <TouchableOpacity onPress={() => this.changeImage()}>
                            <Image
                                source={this.state.uri}
                                style={styles.imageContainer}
                            />
                        </TouchableOpacity>
                        <TextInput
                            style={styles.textStyle}
                            placeholder="Search all courses"
                            returnKeyType="search"
                            onChangeText={(search) => this.setState({searchKeyword: search})}
                            onSubmitEditing={this.search.bind(this)}
                        />
                    </View>
                </View>
                <ScrollView style={styles.listStyle} bounces={false}>
                    {this.renderCategoryData()}
                </ScrollView>
            </View>
        )
    }
}

const styles = {
    parentContainer: {
        flex: 1,
        marginTop: Platform.OS === 'ios'? 24 : 0,
    },
    searchBarContainer: {
        height: searchBarHeight,
        backgroundColor: '#D53149',
    },
    searchBar: {
        flex: 1,
        margin: 10,
        flexDirection: 'row',
        padding: 2,
        backgroundColor: '#FFF',
        alignItems: 'center'
    },
    imageContainer: {
        padding: 5,
        tintColor: '#424242',
    },
    textStyle: {
        marginLeft: 10,
        fontSize: 16,
    },
    listStyle: {
        margin: 10,
        backgroundColor: '#FFF'
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
})(Search)
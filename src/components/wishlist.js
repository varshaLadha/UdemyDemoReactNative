import React, {Component} from 'react'
import {
    View,
    Image,
    Text,
    ScrollView,
    Alert,
    ListView,
    FlatList
} from 'react-native'

import {connect} from 'react-redux'

import {getCategoryData} from '../Actions/CategoryAction'
import Header from './GlobalHeader/globalHeader.index'
import CategoryData from './categoryData'

class Wishlist extends Component{
    state = {
        categoryData: [],
    }

    static navigationOptions = ({navigation}) => ({
        headerLeft: null
    })

    constructor(props){
        super(props)
        debugger

    }

    componentWillMount(){
        this.setState({categoryData: this.props.categoryData})
    }

    renderCategoryData({item,index}){
        return  <CategoryData key={item.id} category={item} navigation={this.props.navigation}/>
    }

    render(){
        debugger
        return(
            <View style={styles.parentContainer}>
                <Header showBack={false} loggedIn={true}>Wishlist</Header>
                <ScrollView bounces={false}>
                    <View>
                        <View style={{height: 200, alignItems: 'center', justifyContent: 'center'}}>
                            <Text style={{fontSize: 20, color: '#000'}}>Save courses for later</Text>
                            <Text style={{fontSize: 18, color: '#696969'}}>Courses added to your wishlist will be kept here</Text>
                        </View>

                        <FlatList
                            numColumns={2}
                            style={{marginTop: 10, flexDirection: 'row', flexWrap: 'wrap'}}
                            data={this.state.categoryData}
                            renderItem={(item) => this.renderCategoryData(item)}
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
}

const mapStateToProps = state => {
    return{
        status: state.Category.status,
        categoryData: state.Category.categoryData
    }
}

export default connect(mapStateToProps, {
    getCategoryData
})(Wishlist)
import React from 'react'
import {
    View,
    TouchableOpacity,
    Text,
    Image,
} from 'react-native'

import IMAGES from '../Images'

const subCategoryList = (props) => {

    debugger
    const {id, categoryId, subCategoryName, categoryName} = props.course
    let icon, name, categoryData =''
    if(props.categoryData){
        icon = categoryName.toLowerCase().replace(/ /g,"_")
        name = categoryName
        categoryData = true
    }else {
        icon = subCategoryName.toLowerCase().replace(/ /g,"_")
        name = subCategoryName
        categoryData = false
    }
    //replace all occurrences of space with _ we need to provide global flag specified through g
    return(
        <TouchableOpacity onPress={() => props.navigation.push("SubCategoryData", {
            id: id,
            title: name,
            categoryData: categoryData,
            searchKeyword: false
        })}>
            <View style={styles.containerStyle}>
                <Image style={styles.imageContainer} source={IMAGES(icon)} defaultSource={require(`../images/other.png`)}></Image>
                <Text style={styles.textContainer}>{name}</Text>
            </View>
        </TouchableOpacity>
    )
}

const styles = {
    containerStyle: {
        marginTop: 10,
        marginBottom: 5,
        marginLeft: 20,
        flexDirection: 'row'
    },
    imageContainer: {
        padding: 5,
        height: 40,
        width: 40
    },
    textContainer: {
        marginLeft: 30,
        color: '#000',
        fontSize: 16,
        paddingTop: 10,
    }
}

export default subCategoryList
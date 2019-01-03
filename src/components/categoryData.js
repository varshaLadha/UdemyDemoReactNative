import React from 'react'
import {
    View,
    Text,
    Image,
    Dimensions,
    TouchableOpacity,
    Alert
} from 'react-native'

const width = Dimensions.get("window").width
const imageWidth = (width-30)/2

const categoryData = (props) => {
    const {id, categoryName, imageUrl} = props.category

    return(
        <TouchableOpacity onPress={() => props.navigation.navigate("CourseDetail",{
            id: id,
            title: categoryName
        })}>
            <View style={styles.containerStyle}>
                <Image style={styles.imageContainer} source={{uri: imageUrl}}/>
                <View style={styles.textContainer}>
                    <Text style={styles.textStyle}>{categoryName}</Text>
                </View>
            </View>
        </TouchableOpacity>
    )
}

const styles = {
    containerStyle: {
        marginLeft: 5,
        marginRight: 5,
        height: 120
    },
    imageContainer: {
        width: imageWidth,
        height: 100,
        alignSelf: 'center'
    },
    textContainer: {
        width: imageWidth,
        height: 100,
        alignSelf: 'center',
        backgroundColor:'rgba(0,0,0,0.5)',
        position:'absolute',
        justifyContent: 'center',
        alignItems: 'center'
    },
    textStyle: {
        fontSize: 18,
        color: '#FFF',
        fontWeight: 'bold'
    },
}

export default categoryData
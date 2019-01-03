import React from 'react'
import {View, Text, Image} from 'react-native'
import { Rating } from 'react-native-elements';

const popularCourse = (props) => {
    const {title, peopleRated, averageRating, imageUrl, cost} = props.course

    return(
        <View style={styles.containerStyle}>
            <Image style={styles.imageContainer} source={{uri:imageUrl}}/>
            <View style={{padding: 10}}>
                <Text style={styles.textStyle}>{title}</Text>

                <View style={{flexDirection: 'row', justifyContent: 'center', marginTop: 10}}>
                    <Rating
                        type="star"
                        startingValue={averageRating}
                        readonly
                        imageSize={20}
                        ratingCount={5}
                        style={{marginLeft: -15}}
                    />
                    <Text style={styles.textStyle2}>({peopleRated})</Text>
                </View>

                <Text style={[styles.textStyle2, {marginTop: 10,}]}>Rs. {cost}</Text>
            </View>
        </View>
    )
}

const styles = {
    containerStyle: {
        marginLeft: 5,
        marginRight: 5,
        marginTop: 10,
        height: 300,
        backgroundColor: '#FFF',
        width: 200,
        borderWidth: 1,
        borderRadius: 2,
        borderColor: '#ddd',
        borderBottomWidth: 0,
        shadowColor: '#000',
        shadowOffset: {width: 0, height: 2},
        shadowOpacity: 0.1,
        shadowRadius: 2,
        elevation: 1,
    },
    imageContainer: {
        width: 196,
        height: 150,
        margin: 2
    },
    textStyle: {
        color: '#000',
        fontSize: 18
    },
    textStyle2: {
        color: '#000',
        fontSize: 16,
        fontWeight: 'bold'
    }
}

export default popularCourse
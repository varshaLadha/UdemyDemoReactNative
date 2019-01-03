import React from 'react'
import {View, Text, Image, Dimensions} from 'react-native'
import { Rating } from 'react-native-elements';

const width = Dimensions.get("window").width - 20

const subCategoryDataView = (props) => {
    const {title, peopleRated, averageRating, imageUrl, cost, instructorName, tag} = props.course

    return(
        <View style={styles.containerStyle}>
            <Image style={styles.imageContainer} source={{uri:imageUrl}}/>
            <View style={{padding: 10, width: width-120,}}>
                <Text style={styles.textStyle}>{title}</Text>
                {
                    (tag) &&
                        <Text style={styles.tagStyle}>{tag}</Text>
                }
                <Text style={styles.textStyle3}>{instructorName}</Text>

                <View style={{flexDirection: 'row', marginTop: 10, overflow: 'hidden'}}>
                    <Rating
                        type="star"
                        startingValue={averageRating}
                        readonly
                        imageSize={20}
                        ratingCount={5}
                    />
                    <Text style={styles.textStyle2}>{averageRating}({peopleRated})</Text>
                </View>

                <Text style={[styles.textStyle2, {marginTop: 10,}]}>Rs. {cost}</Text>
            </View>
        </View>
    )
}

const styles = {
    containerStyle: {
        marginLeft: 10,
        marginRight: 5,
        marginTop: 10,
        height: 180,
        backgroundColor: '#FFF',
        width: width,
        borderWidth: 1,
        borderRadius: 2,
        borderColor: '#ddd',
        borderBottomWidth: 0,
        shadowColor: '#000',
        shadowOffset: {width: 0, height: 2},
        shadowOpacity: 0.1,
        shadowRadius: 2,
        elevation: 1,
        flexDirection: 'row'
    },
    imageContainer: {
        width: 120,
        height: 120,
        marginTop: 10,
        marginLeft:10,
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
    textStyle: {
        color: '#000',
        fontSize: 18
    },
    textStyle2: {
        color: '#000',
        fontSize: 16,
        fontWeight: 'bold'
    },
    textStyle3: {
        color: '#696969',
        fontSize: 16
    },
    tagStyle: {
        color: '#D4AF37',
        fontSize: 16
    },
}

export default subCategoryDataView
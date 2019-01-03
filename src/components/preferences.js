import React, {Component} from 'react'
import {
    View,
    Text,
    Switch,
    TouchableOpacity,
    Alert
} from 'react-native'

const preferences = (props) => {

    const showAlertDialog = () => {
        Alert.alert('Select video download quality',
            '',
            [
                {text: '360p', onPress: () => props.videoQualityChange('360p')},
                {text: '720p', onPress: () => props.videoQualityChange('720p')},
                {text: '1024p', onPress: () => props.videoQualityChange('1024p')}
            ]
        )
    }

    return (
        <View style={styles.container}>
            <Text style={styles.titleTextStyle}>Preferences</Text>

            <Text style={[styles.textStyle, {marginTop: 10, color: '#696969'}]}>Lecture playback</Text>
            <View style={styles.switchContainer}>
                <Text style={styles.textStyle}>Continue lecture in background</Text>
                <Switch
                    style={{thumbTintColor: '#D53149'}}
                    onValueChange={(value) => props.onEdit("first",value)}
                    value={props.firstSwitch}
                />
            </View>

            <Text style={[styles.textStyle, {marginTop: 10, color: '#696969'}]}>Lecture playback</Text>
            <View style={styles.switchContainer}>
                <Text style={styles.textStyle}>Download via Wi-fi only</Text>
                <Switch
                    style={{onTintColor: '#D53149'}}
                    onValueChange={(value) => props.onEdit("second",value)}
                    value={props.secondSwitch}
                />
            </View>
            <View style={styles.switchContainer}>
                <Text style={styles.textStyle}>Download to SD card</Text>
                <Switch
                    style={{onTintColor: '#D53149'}}
                    onValueChange={(value) => props.onEdit("third",value)}
                    value={props.thirdSwitch}
                />
            </View>
            <TouchableOpacity onPress={showAlertDialog}>
                <View>
                    <Text style={styles.textStyle}>Video download quality</Text>
                    <Text style={[styles.textStyle, {color: '#696969'}]}>{props.videoQuality}</Text>
                </View>
            </TouchableOpacity>

        </View>
    )
}

const styles = {
    container: {
        backgroundColor: '#FFF',
        padding: 10,
        marginTop: 10,
    },
    titleTextStyle: {
        fontSize: 20,
        color: '#000',
        marginTop: 10,
        fontWeight: 'bold',
    },
    textStyle: {
        fontSize: 16,
        color: '#000',
    },
    switchContainer: {
        marginTop: 10,
        flexDirection: 'row',
        justifyContent: 'space-between',
    }
}

export default preferences
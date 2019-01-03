import React from 'react'
import {Text, TouchableOpacity, Alert} from 'react-native'

const Button = (props) => {
    return(
        <TouchableOpacity onPress={props.onPress} style={style.buttonStyle}>
            <Text style={style.textStyle}>{props.children}</Text>
        </TouchableOpacity>
    )
}

const style = {
    buttonStyle: {
        flex: 1,
        alignSelf: 'stretch',
    },
    textStyle: {
        alignSelf: 'center',
        color: '#FFF',
        fontSize: 16,
        fontWeight: '600',
        paddingTop: 10,
        paddingBottom: 10
    }
}

export default Button
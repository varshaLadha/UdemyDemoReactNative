/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';

import {Provider} from 'react-redux'
import {createStore, applyMiddleware} from 'redux'
import thunk from 'redux-thunk'

import Navigation from './src/components/Navigation'
import AppReducer from './src/Reducers/index'

export default class App extends Component {
    render(){
        return(
            <Provider store={(createStore(AppReducer, applyMiddleware(thunk)))}>
                <Navigation/>
            </Provider>
        )
    }
}
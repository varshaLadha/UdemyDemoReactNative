import {baseURL, urls} from '../components/const'
import axios from 'axios'
import {LOGIN, SIGNUP} from './ActionTypes'

export const userLogin = (data) => {
    debugger
    return((dispatch, getState) => {
        return axios.post(baseURL+urls.userLogin, data).
        then((response) => {
            dispatch({
                type: LOGIN,
                payload: response.data.response,
                status: response.data.success,
                error: response.data.error
            })
        }).
        catch((err) => {
            alert(err)
            console.log(err)
        })
    })
}
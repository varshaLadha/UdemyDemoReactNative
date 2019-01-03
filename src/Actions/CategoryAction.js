import {baseURL, urls} from '../components/const'
import axios from 'axios'
import {GET_CATEGORIES, GET_SUBCATEGORIES} from './ActionTypes'

export const getCategoryData = () => {
    debugger
    return((dispatch, getState) => {
        return axios.get(baseURL+urls.categoryData).
        then((response) =>{
            dispatch({
                type: GET_CATEGORIES,
                payload: response.data.response,
                status: response.data.success
            })
        }).catch((err) => {
            console.log(err)
            //Alert.alert(err)
        })
    })
}
import {GET_CATEGORIES, GET_SUBCATEGORIES} from '../Actions/ActionTypes'

let INITIAL_STATE = {
    status: 0,
    categoryData: []
}

let CategoryReducer = (state = INITIAL_STATE, action) => {
    debugger
    switch (action.type){
        case GET_CATEGORIES:
            return{
                ...state,
                categoryData: action.payload || [],
                status: action.status
            }
        default:
            return state;
    }
}

export default CategoryReducer
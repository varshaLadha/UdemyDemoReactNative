import {LOGIN, SIGNUP} from '../Actions/ActionTypes'

let INITIAL_STATE = {
    status: 0,
    userData: {},
    error: ''
}

let UserReducer = (state = INITIAL_STATE, action) => {
    debugger
    switch (action.type){
        case LOGIN:
            return {
                ...state,
                userData: action.payload || null,
                error: action.error || '',
                status: action.status
            }
        default:
            return state
    }
}

export default UserReducer
import {combineReducers} from 'redux'
import UserReducer from './UserReducer'
import CategoryReducer from './CategoryReducer'

let AppReducer = combineReducers({
    User: UserReducer,
    Category: CategoryReducer,
})

export default AppReducer
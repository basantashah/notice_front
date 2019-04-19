import {combineReducers,createStore} from 'redux'
import Token from '../component/loginPage/reducer'
const rootReducer = combineReducers({
    Token
})
export const store = createStore(rootReducer)
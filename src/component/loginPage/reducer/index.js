import {TOKEN} from '../action'
const INITIAL_STATE = {
    loggedIn:false,
    token:null
}

function storeToken(state=INITIAL_STATE,action)
{
    switch(action.type){
        case TOKEN:
            let loggedIn = true
            let token = action.payload.token
            return {...state,loggedIn,token}
        default:
            return state
    }
}

export default storeToken
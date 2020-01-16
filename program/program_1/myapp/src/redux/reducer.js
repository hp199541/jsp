import {AUTH_SUCCESS, ERR_MSG} from './action-type'
import {combineReducers} from 'redux';
const inituser = {
    'userneme':'',
    'password':''
}
function user (state = inituser, action) {
     switch (action.type) {
        case AUTH_SUCCESS:
            console.log('success',action)
        return {...state,...action.data}
        case ERR_MSG:
            console.log(action)
        return {...state,msg:action.data}
        default:
        return state
     }
}
export default combineReducers({
    user
})
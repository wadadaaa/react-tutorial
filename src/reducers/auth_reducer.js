import { USER_TYPES } from '../actions/user_types'

export default function(state = null, action) {
    switch(action.type){
        case USER_TYPES.LOGIN_USER: {
            return {...state, ...action.payload}
        }
        case USER_TYPES.LOGOUT_USER: {
            return null
        }
        case USER_TYPES.AUTO_LOGIN: {
            return action.payload ? {...action.payload} : null
        }
        default:
            return state

    }
}


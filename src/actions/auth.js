import {USER_TYPES} from '../actions/user_types'
import localSrorageService from './../services/localStorageService'

export function loginUser (user) {
    localSrorageService.saveUsertoLocalStorage(user)
    return {
        type: USER_TYPES.LOGIN_USER,
        payload: user
    }
}

export function logoutUser () {
    localSrorageService.removeUserFromLocalStorage()
    return {
        type: USER_TYPES.LOGOUT_USER
    }
}

export function autoLogin () {
    const user = localSrorageService.getUserFromLocalStorage()

    return {
        type: USER_TYPES.AUTO_LOGIN,
        payload: user
    }
}

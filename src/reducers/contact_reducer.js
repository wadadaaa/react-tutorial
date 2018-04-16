import { TYPES } from "../actions/types";

export default function(state = {}, action) {
    switch(action.type){
        case TYPES.LOAD_CONTACT: {
            return {...state, ...action.payload}
        }
        default:
            return state
        
    }
}
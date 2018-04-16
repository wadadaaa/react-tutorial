import { TYPES } from "../actions/types";

export default function(state = [], action) {
    switch(action.type){
        case TYPES.LOAD_CONTACTS: {
            return [...action.payload]   
        }
        case TYPES.ADD_CONTACT: {
            return [...state, action.payload]
        }
        case TYPES.SAVE_CONTACT: {
            return state.map(contact => {
                return (contact.id === action.payload.id)? contact : action.payload
            })
        }
        case TYPES.DELETE_CONTACT: {
            return state.filter(contact => contact.id !== action.payload)
        }
        default:
            return state
        
    }
}
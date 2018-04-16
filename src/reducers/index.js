import { combineReducers } from 'redux';

import ContactsReducer from './contacts_reducer';
import ContactReducer from './contact_reducer';

const rootReducer = combineReducers({
  contacts: ContactsReducer,
  contact: ContactReducer
});

export default rootReducer;
import { combineReducers } from 'redux';

import ContactsReducer from './contacts_reducer';
import ContactReducer from './contact_reducer';
import AuthReducer from './auth_reducer';

const rootReducer = combineReducers({
  contacts: ContactsReducer,
  contact: ContactReducer,
  user: AuthReducer
});

export default rootReducer;
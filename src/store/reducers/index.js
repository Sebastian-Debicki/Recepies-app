import { combineReducers } from 'redux';
import auth from './auth';
import open from './open';
import recepies from './recepies';

export default combineReducers({
  auth,
  open,
  recepies
})
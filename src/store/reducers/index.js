import { combineReducers } from 'redux';
import auth from './auth';
import open from './open';

export default combineReducers({
  auth,
  open
})
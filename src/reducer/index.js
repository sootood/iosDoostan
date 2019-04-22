//combine reducers

import { combineReducers } from 'redux';
import authReducer from './AuthReducer';
import ProductReducer from './ProuductReducer';

export default combineReducers({
  auth: authReducer,
  ProuductRe: ProductReducer
  });


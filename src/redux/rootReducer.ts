import { combineReducers } from 'redux';
import { usersReducer } from './users';
import { userReducer } from './user';

export default combineReducers({ usersReducer, userReducer });

import {combineReducers} from 'redux'
import authReducer from './authReducer';
import userReducers from './userReducer';

const reducers = combineReducers( {
    user: userReducers,
    auth: authReducer
})


export default reducers;

export type State = ReturnType<typeof reducers>
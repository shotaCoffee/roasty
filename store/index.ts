import { createStore, combineReducers } from "redux";
import authReducer from './reducers/user';
import {composeWithDevTools} from 'redux-devtools-extension';

const rootReducer = combineReducers({
  user: authReducer
})

const store = createStore(rootReducer, composeWithDevTools());

export default store;

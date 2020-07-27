import { createStore, combineReducers } from "redux";
import authReducer from './reducers/user';
import {composeWithDevTools} from 'redux-devtools-extension';
import {User} from '../firebase/user/user.http.service';

const rootReducer = combineReducers({
  user: authReducer
})

export interface RootState {
  user: User
}

const store = createStore(rootReducer, composeWithDevTools());

export default store;

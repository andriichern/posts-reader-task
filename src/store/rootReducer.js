import { combineReducers } from 'redux';
import { authReducer } from './auth';
import { postsReducer } from './posts';

const rootReducer = combineReducers({
  _auth: authReducer,
  posts: postsReducer,
});

export default rootReducer;

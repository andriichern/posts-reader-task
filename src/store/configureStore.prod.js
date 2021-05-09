import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

export default rootReducer => createStore(rootReducer, applyMiddleware(thunk));

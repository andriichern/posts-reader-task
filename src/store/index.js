import { persistStore, persistReducer } from 'redux-persist';
import storageSession from 'redux-persist/lib/storage/session';
import rootReducer from './rootReducer';

let storeConfigFn;

const persistConfig = {
  key: 'root',
  storage: storageSession,
  whitelist: ['_auth'],
};

if (process.env.NODE_ENV === 'production') {
  storeConfigFn = require('./configureStore.prod').default;
} else {
  storeConfigFn = require('./configureStore.dev').default;
}

const persistedReducer = persistReducer(persistConfig, rootReducer);
const store = storeConfigFn(persistedReducer);

export default {
  store,
  persistor: persistStore(store),
};

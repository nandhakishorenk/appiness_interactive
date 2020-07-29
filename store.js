import {createStore, combineReducers} from 'redux'
import {applyMiddleware} from 'redux';
import { persistReducer} from 'redux-persist';
import AsyncStorage from '@react-native-community/async-storage';
import loginReducer from './LoginReducer.js'

const persistConfig = {
    key: 'root',
    storage: AsyncStorage,
  };

const AppReducer = combineReducers({
    loginUser: loginReducer
})

const persistedReducer = persistReducer(persistConfig, AppReducer);

const configureStore = createStore(persistedReducer);

export default configureStore;

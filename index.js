/**
 * @format
 */

import React from 'react'; 
import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import { Provider } from 'react-redux'
import configureStore from './store'
import { PersistGate } from "redux-persist/es/integration/react";
import {persistStore} from 'redux-persist';

const store = configureStore;
const persistor = persistStore(store);

const Appiness = () => (
    
    <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
            <App/>
        </PersistGate>
    </Provider>
)

AppRegistry.registerComponent(appName, () => Appiness);

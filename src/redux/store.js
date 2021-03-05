import {createStore, compose, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';

import tableReducer from './reducers/table';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(tableReducer, composeEnhancers(applyMiddleware(thunk)));

export default store;
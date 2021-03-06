import { createStore, applyMiddleware } from "redux";
import { persistStore } from 'redux-persist'; 
import logger from 'redux-logger';
import allReducers from './reducers';

const middlewares = [logger];

export const myStore = createStore(
    allReducers,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    );
    //applyMiddleware(...middlewares)
    

export const persistor = persistStore(myStore);

export default { myStore, persistor };
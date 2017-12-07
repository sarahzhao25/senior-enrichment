import { createStore, applyMiddleware } from 'redux';
import rootReducer from './reducers';
import loggingMiddleware from 'redux-logger'; // https://github.com/evgenyrodionov/redux-logger
import thunkMiddleware from 'redux-thunk'; // https://github.com/gaearon/redux-thunk

export default createStore(rootReducer, applyMiddleware(thunkMiddleware, loggingMiddleware))

export * from './reducers/Students';
export * from './reducers/Campuses';
export * from './reducers/firstNameChange';
export * from './reducers/lastNameChange';
export * from './reducers/emailChange';
export * from './reducers/selectValueChange';
export * from './reducers/gpaChange';

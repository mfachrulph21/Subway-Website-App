import { legacy_createStore as createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import itemReducer from './reducer/itemReducer';


let store = createStore(itemReducer, applyMiddleware(thunk))

export default store;
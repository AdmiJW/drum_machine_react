import { createStore, applyMiddleware } from 'redux'
import Thunk from 'redux-thunk';
import Reducer from '../Reducers/Reducer';

const store = createStore( Reducer, applyMiddleware(Thunk) );

export default store;
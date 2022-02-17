import { createStore, combineReducers, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import { todoReducers } from './reducers/todoReducers';


const reducer = combineReducers({
	todos: todoReducers
});

const itemsFromLocalStorage = localStorage.getItem('todoItems') ? JSON.parse(localStorage.getItem('todoItems')) : [];

const initialState = {
	todos: { todoItems: itemsFromLocalStorage }
};

const midlleware = [ thunk ];

export const store = createStore(reducer, initialState, composeWithDevTools(applyMiddleware(...midlleware)));

export default store;



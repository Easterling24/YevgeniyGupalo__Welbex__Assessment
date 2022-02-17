import {
	LIST_TODO_ITEMS_REQUEST,
	LIST_TODO_ITEMS_SUCCESS,
	LIST_TODO_ITEMS_FAIL,
	ADD_TODO_ITEM,
	COMPLETE_TODO_ITEM,
	REMOVE_TODO_ITEM
} from '../constants/todoConstants';
import axios from 'axios';

export const listTodos = () => async (dispatch) => {
	const { data } = await axios.get('https://jsonplaceholder.typicode.com/todos');

	try {
		dispatch({
			type: LIST_TODO_ITEMS_REQUEST
		});

		dispatch({
			type: LIST_TODO_ITEMS_SUCCESS,
			payload: data
		});
	} catch (error) {
		dispatch({
			type: LIST_TODO_ITEMS_FAIL,
			payload: error.response && error.response.data.message ? error.response.data.message : error.message
		});
	}
};

export const addNewTodo = (title) => async (dispatch, getState) => {
	dispatch({
		type: ADD_TODO_ITEM,
		payload: title
	});

	localStorage.setItem('todoItems', JSON.stringify(getState().todos.todoItems));
};

export const completeTodoItem = (id) => async (dispatch, getState) => {
	dispatch({
		type: COMPLETE_TODO_ITEM,
		payload: id
	});
	localStorage.setItem('todoItems', JSON.stringify(getState().todos.todoItems));
};

export const removeTodoItem = (id) => async (dispatch, getState) => {
	dispatch({
		type: REMOVE_TODO_ITEM,
		payload: id
	});
	localStorage.setItem('todoItems', JSON.stringify(getState().todos.todoItems));
};

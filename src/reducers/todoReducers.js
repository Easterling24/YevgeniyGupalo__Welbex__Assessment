import {
	LIST_TODO_ITEMS_REQUEST,
	LIST_TODO_ITEMS_SUCCESS,
	LIST_TODO_ITEMS_FAIL,
	ADD_TODO_ITEM,
	REMOVE_TODO_ITEM,
	COMPLETE_TODO_ITEM
} from '../constants/todoConstants';

export const todoReducers = (state = { todoItems: [] }, action) => {
	switch (action.type) {
		case LIST_TODO_ITEMS_REQUEST:
			return {
				loading: true,
				todoItems: []
			};

		case LIST_TODO_ITEMS_SUCCESS:
			return { loading: false, todoItems: action.payload };

		case LIST_TODO_ITEMS_FAIL:
			return { loading: false, error: action.payload };

		case ADD_TODO_ITEM:
			return {
				...state,
				todoItems: [
					{ userId: 1, id: Math.random(), title: action.payload, completed: false },
					...state.todoItems
				]
			};

		case COMPLETE_TODO_ITEM:
			return {
				...state,

				todoItems: state.todoItems.map(
					(item) => (item.id === action.payload ? { ...item, completed: !item.completed } : item)
				)
			};

		case REMOVE_TODO_ITEM:
			return {
				...state,
				todoItems: state.todoItems.filter((elt) => elt.id !== action.payload)
			};

		default:
			return state;
	}
};

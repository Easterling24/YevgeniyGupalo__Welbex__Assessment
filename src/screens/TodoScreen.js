import React, { useEffect, useState } from 'react';
import Pagination from '../components/Pagination';
import styled from 'styled-components';
import { useContext } from 'react';
import { ThemeContext } from '../utils/context';
import { useDispatch, useSelector } from 'react-redux';
import { listTodos, addNewTodo } from '../actions/todoActions';

const TodoWrapper = styled.div`
	width: 80%;
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
	min-height:80vh;
`;

const AddingTaskWrapper = styled.div`
	display: flex;
	justify-content: space-between;
	align_items: center;
	margin-bottom: 2rem;
`;

const TaskInput = styled.input`
	outline: none;
	padding: 10px;
	border: 2px solid rgba(19, 0, 0, 0.09);
	border-radius: 5px;
	transition: 300ms all;
	margin-right: 1rem;
	&:hover {
		background: #bbd1ff;
	}
`;

const AddTaskButton = styled.button`cursor:pointer;
outline:none;
font-size: 15px;
font-weight:600;
background transparent;
border:2px solid transparent;
padding:10px;
transition:300ms all;
border-radius:5px;
${props => props.darkMode && "color:#1886E6;"}
&:hover {
  background: #19243f;
  color:white;

}

`;

function TodoScreen() {
	const dispatch = useDispatch();
	const todoList = useSelector((state) => state.todos);
	const data = todoList.todoItems;
	const [ todoValue, setTodoValue ] = useState('');
	const { theme } = useContext(ThemeContext);

	useEffect(
		() => {
			dispatch(listTodos());
		},
		[ dispatch ]
	);

	const onFromHnadler = (e) => {
		e.preventDefault();
		if (todoValue === '') {
			return;
		}

		dispatch(addNewTodo(todoValue));
		setTodoValue('');
	};

	return (
		<TodoWrapper>
			<AddingTaskWrapper>
				<form onSubmit={onFromHnadler}>
					<TaskInput onChange={(e) => setTodoValue(e.target.value)} value={todoValue} />
					<AddTaskButton type="submit" darkMode={theme === 'dark'}>
						Add a new task
					</AddTaskButton>
				</form>
			</AddingTaskWrapper>

			{data.length > 0 ? <Pagination data={data} title={'TODOS'} dataLimit={5} pageLimit={5} /> : null}
		</TodoWrapper>
	);
}

export default TodoScreen;

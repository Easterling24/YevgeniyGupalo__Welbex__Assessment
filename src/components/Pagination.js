import React, { useState } from 'react';
import styled from 'styled-components';
import { useDispatch } from 'react-redux';
import { removeTodoItem, completeTodoItem } from '../actions/todoActions';
import { ThemeContext } from '../utils/context';
import { useContext } from 'react';

const DataContainer = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	height: 300px;
	width: 100%;
	border-radius: 10px;
`;

const TodoCard = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
	padding: 20px;
	width: 100%;
	background: #19243f;
	color: white;
	font-weight: 600;
	border-radius: 10px;
	transition: all 300ms;
	cursor: pointer;
	margin-bottom: 1rem;
	&:hover {
		box-shadow: 6px 5px 8px gray;
	}

	${(props) => props.completed && 'text-decoration:line-through; opacity: 0.4;'};
	${(props) => props.darkMode && 'color:#1886E6;'};
`;

const Actions = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-around;
	width: 60px;
	& > button {
		background: #19243f;
		color: #fff;
		border: none;
		padding: 8px;
		cursor: pointer;
		transition: 300ms all;
		border-radius: 5px;
		&:hover {
			background: gray;
		}
	}
`;

const PaginationWrapper = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	width: 80%;
	& > h3 {
		margin-bottom: 1rem;
	}
`;

const PaginationContainer = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-around;
	width: 60%;
	margin-top: 12rem;
	${(props) => props.darkMode && 'color:#1886E6;'};
`;

const NextBtn = styled.button`
	font-size: 20px;
	padding: 10px;
	border: none;
	outline: none;
	background: #19243f;
	color: white;
	cursor: pointer;
	border-radius: 10px;
	&:disabled {
		background: gray;
	}
`;

const PrevBtn = styled.button`
	font-size: 20px;
	padding: 10px;
	border: none;
	outline: none;
	background: #19243f;
	color: white;
	cursor: pointer;
	border-radius: 10px;
	&:disabled {
		background: gray;
	}
`;

const PageItem = styled.button`
	cursor: pointer;
	outline: none;
	height: 40px;
	width: 40px;
	color: white;
	border: none;
	background: gray;
	transition: all 300ms;
	border-radius: 50%;

	${(props) => props.current === props.item && '	background:#19243f; color:#fff; '};
`;

function Pagination({ data, title, dataLimit, pageLimit }) {
	const { theme } = useContext(ThemeContext);

	// Setting up the dispatch to fire off the actions
	const dispatch = useDispatch();

	// Setting up the total amount of pages and current page

	const [ pages ] = useState(data.length / dataLimit);
	const [ currentPage, setCurrentPage ] = useState(1);

	//Pagination functions

	const nextPage = () => {
		setCurrentPage((page) => page + 1);
	};

	const prevPage = () => {
		setCurrentPage((page) => page - 1);
	};

	const changePage = (e) => {
		const pageNumber = Number(e.target.textContent);
		setCurrentPage(pageNumber);
	};

	const getPaginationData = () => {
		const startIndex = currentPage * dataLimit - dataLimit;
		const endIndex = startIndex + dataLimit;
		return data.slice(startIndex, endIndex);
	};

	let start = Math.floor((currentPage - 1) / pageLimit) * pageLimit;

	let range = new Array(pageLimit).fill().map((_, idx) => start + idx + 1);

	//*********

	// Removing & Editing existing todo items functions

	const completeTodoHandler = (id) => {
		dispatch(completeTodoItem(id));
	};

	const removeToodoHandler = (id) => {
		dispatch(removeTodoItem(id));
	};

	//*********

	return (
		<PaginationWrapper>
			<h3>{title}</h3>

			<DataContainer>
				{getPaginationData().map((elt) => (
					<TodoCard darkMode={theme === 'dark'} key={elt.id} completed={elt.completed}>
						{elt.title}

						<Actions>
							<button onClick={() => completeTodoHandler(elt.id)}>
								<i className="fa-solid fa-check" />{' '}
							</button>

							<button onClick={() => removeToodoHandler(elt.id)}>
								<i className="fas fa-trash" />
							</button>
						</Actions>
					</TodoCard>
				))}
			</DataContainer>

			<PaginationContainer darkMode={theme === 'dark'}>
				<PrevBtn onClick={prevPage} disabled={currentPage === 1}>
					<i className="fa-solid fa-angle-left" />
				</PrevBtn>

				{range.map((elt, index) => (
					<PageItem key={index} onClick={changePage} current={currentPage} item={elt}>
						<span>{elt}</span>
					</PageItem>
				))}

				<NextBtn onClick={nextPage} disabled={currentPage === pages}>
					<i className="fa-solid fa-angle-right" />
				</NextBtn>
			</PaginationContainer>
		</PaginationWrapper>
	);
}

export default Pagination;

import React from 'react';
import styled from 'styled-components';

const TodoContainer = styled.div`
	width: 100%;

    display:flex;
    justify-contnet:flex-start;
    align-items:center;
    border:1px solid black;
    padding:10px;
    margin:1rem 0;
`;

function TodoCard({todo}) {
	return <TodoContainer>{todo}</TodoContainer>;
}

export default TodoCard;

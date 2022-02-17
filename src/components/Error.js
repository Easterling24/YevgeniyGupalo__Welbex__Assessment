import React from 'react';
import styled from 'styled-components';
import { NavLink as Link } from 'react-router-dom';
import { ThemeContext } from '../utils/context';
import { useContext } from 'react';

const ErrorWrapper = styled.div`
	display: flex;
	justify-content: center;
	flex-direction: column;
	align-items: center;
	transition: all 300ms;
	min-height:80vh;
	> h2 {
		font-size: 20px;
	}
`;

const ErrorMessage = styled.h1`
	font-size: 20rem;
	margin: 0;
`;

const BackToHome = styled(Link)`
text-decoration:none;
color: #000;
font-weight:600;
margin-top:5rem;
font-size:18px;
border-bottom: 1px solid black;
${props => props.$darkMode&& "color:#1886E6; border-bottom: 1px solid #1886E6 ;"}
`;

function Error() {
	const { theme } = useContext(ThemeContext);
	return (
		<ErrorWrapper>
			<ErrorMessage>404</ErrorMessage>
			<h2>Yikes, looks like you ve ran into an error :/</h2>

			<BackToHome $darkMode={theme === 'dark'} to="/">
				Back To Home
			</BackToHome>
		</ErrorWrapper>
	);
}

export default Error;

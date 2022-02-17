import React from 'react';
import styled from 'styled-components';
import { ThemeContext } from '../utils/context';
import { useContext } from 'react';

const FooterContainer = styled.footer`
	display: flex;
	justify-content: center;
	flex-direction: column;
	align-items: center;
	background: #19243f;
	padding: 20px;
	color: #fff;

	${props => props.darkMode && "color:#1886E6;"}
	
`;

const RightsWrapper = styled.div`
	display: flex;
	align-items: center;
`;

const ModeChanger = styled.button`
	outline: none;
	border: none;
	background: transparent;
	margin-bottom: 1rem;
	font-size: 15px;
	cursor: pointer;
	transition: all 300ms;
	border: 2px solid transparent;
	padding: 10px;
	border-radius: 10px;
	color:#fff;
	${props => props.darkMode && "color:#1886E6;"}
	&:hover {
		border: 2px solid #1886e6;
	}
`;

function Footer() {
	const { theme, toggleTheme } = useContext(ThemeContext);
	return (
		<FooterContainer darkMode ={theme === "dark"}>
			<ModeChanger darkMode ={theme === "dark"} onClick={() => toggleTheme()}>Change Mode: {theme === 'light' ? '☀️' : '🌙'}</ModeChanger>
			<RightsWrapper>Copyright &copy; Welbex</RightsWrapper>
		</FooterContainer>
	);
}

export default Footer;

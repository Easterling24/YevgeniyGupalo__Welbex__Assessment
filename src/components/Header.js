import React from 'react';
import styled from 'styled-components';
import { useContext } from 'react';
import { ThemeContext } from '../utils/context';
import { NavLink as Link } from 'react-router-dom';
import '../styles/nav.css';

const HeaderContainer = styled.header`
	display: flex;
	align-items: center;
	justify-content: space-between;
	transition: all 300ms;
`;

const Navigation = styled.nav`
	height: 130px;
	display: flex;

	> ul {
		display: flex;

		height: 100%;
		> li {
			height: 100%;
			display: flex;
			align-items: center;

			list-style: none;
		}
	}
`;

const StyledLink = styled(Link)`
text-decoration:none;
font-size:25px;
font-weight: 600;
height:100%;
display:flex;
align-items:center;
padding: 0 10px;
border-bottom: 3px solid transparent;
color: ${(props) => (props.$DarkMode ? '#1886E6' : 'black')};

transition: all 300ms;



`;

function Header() {
	const { theme } = useContext(ThemeContext);
	return (
		<HeaderContainer>
			<StyledLink to="/" $DarkMode={theme === 'dark'}>
				<h1>Welbex</h1>
			</StyledLink>

			<Navigation>
				<ul>
					<li>
						{' '}
						<StyledLink to="/" $DarkMode={theme === 'dark'}>
							Home
						</StyledLink>{' '}
					</li>

					<li>
						<StyledLink to="todos/" $DarkMode={theme === 'dark'}>
							Todos
						</StyledLink>
					</li>
				</ul>
			</Navigation>
		</HeaderContainer>
	);
}

export default Header;

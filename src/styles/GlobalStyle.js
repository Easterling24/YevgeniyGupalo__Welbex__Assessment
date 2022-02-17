import React from 'react';
import { createGlobalStyle } from 'styled-components';
import { useContext } from 'react';
import { ThemeContext } from '../utils/context';

const Style = createGlobalStyle`
*{
    box-sizing:border-box;
    padding:0;
    margin:0;
    font-family: 'Noto Sans', sans-serif;
}
body{
    max-width: 1400px;
    margin:auto;
    background-color: ${(props) => (props.isDarkMode ? '#2F2E41' : '#e2e2e2')};
    color: ${(props) => (props.isDarkMode ? '#1886E6' : 'black')};

}
`;

function GlobalStyle() {
	const { theme } = useContext(ThemeContext);
	return <Style isDarkMode={theme === 'dark'} />;
}

export default GlobalStyle;

import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Error from './components/Error';
import HomeScreen from './screens/HomeScreen';
import TodoScreen from './screens/TodoScreen';
import GlobalStyle from './styles/GlobalStyle';
import { ThemeProvider } from './utils/context';
import "./styles/index.css"

function App() {
	return (
		<Router>
			<ThemeProvider>
				<GlobalStyle />
				<Header />
				<main
					className=""
					style={{  display: 'flex', alignItems: 'center', justifyContent: 'center', borderTop: "1px solid rgba(0,0,0,0.17) "}}
				>
					<Routes>
						<Route path="/" element={<HomeScreen />} />
						<Route path="todos/" element={<TodoScreen />} />
						<Route path="/*" element={<Error />} />
					</Routes>
				</main>

				<Footer />
			</ThemeProvider>
		</Router>
	);
}

export default App;

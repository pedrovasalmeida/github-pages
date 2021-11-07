import { BrowserRouter } from 'react-router-dom';
import { Routes } from './routes';

import { Header } from './components/Header';
import { Footer } from './components/Footer';

import GlobalStyles from './styles/global';
import { ThemeProvider } from 'styled-components';
import { Theme } from './styles/theme';

function App() {
	return (
		<ThemeProvider theme={Theme}>
			<GlobalStyles />

			<Header />
			<BrowserRouter>
				<Routes />
			</BrowserRouter>
			<Footer />
		</ThemeProvider>
	);
}

export default App;

import { Fragment } from 'react';
import { ThemeProvider } from 'styled-components';

import { BrowserRouter } from 'react-router-dom';
import { Routes } from './routes';

import { Header } from './components/Header';
import { Footer } from './components/Footer';

import GlobalStyles from './styles/global';
import { Theme } from './styles/theme';

function App() {
	return (
		<Fragment>
			<ThemeProvider theme={Theme}>
				<GlobalStyles />
				<Header />

				<BrowserRouter>
					<Routes />
				</BrowserRouter>

				<Footer />
			</ThemeProvider>
		</Fragment>
	);
}

export default App;

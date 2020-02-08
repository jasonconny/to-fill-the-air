import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Helmet } from 'react-helmet';
import ErrorBoundary from './components/ErrorBoundary';
import { BrowserRouter } from 'react-router-dom';
import ScrollToTop from './routing/ScrollToTop';
import Routes from './routing/Routes';

const ToFillTheAir: React.FC = () => {
	return (
		<ErrorBoundary>
			<Helmet>
				<title>
					To Fill The Air | Grateful Dead set lists
				</title>
			</Helmet>

			<BrowserRouter forceRefresh={false}>
				<ScrollToTop/>

				<Routes/>
			</BrowserRouter>
		</ErrorBoundary>
	);
};

const rootElement = document.getElementById('to-fill-the-air');
ReactDOM.render(<ToFillTheAir/>, rootElement);

export default ToFillTheAir;

import * as React from 'react';
import * as ReactDOM from 'react-dom';
import ErrorBoundary from './components/ErrorBoundary';
import { BrowserRouter } from 'react-router-dom';
import Routes from './routing/Routes';

const ToFillTheAir: React.FC = () => {
	return (
		<ErrorBoundary>
			<BrowserRouter forceRefresh={false}>
				<Routes/>
			</BrowserRouter>
		</ErrorBoundary>
	);
};

const rootElement = document.getElementById('to-fill-the-air');
ReactDOM.render(<ToFillTheAir/>, rootElement);

export default ToFillTheAir;

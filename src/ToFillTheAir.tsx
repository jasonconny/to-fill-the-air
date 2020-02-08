import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import Routes from './routing/Routes';

const ToFillTheAir: React.FC = () => {
	return (
		<BrowserRouter forceRefresh={false}>
			<Routes/>
		</BrowserRouter>
	);
};

const rootElement = document.getElementById('to-fill-the-air');
ReactDOM.render(<ToFillTheAir/>, rootElement);

export default ToFillTheAir;

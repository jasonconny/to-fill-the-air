import * as React from 'react';
import * as ReactDOM from 'react-dom';

const ToFillTheAir: React.FC = () => {
	return (
		<div>
			<h1>To Fill The Air</h1>
		</div>
	);
};

const rootElement = document.getElementById("to-fill-the-air");
ReactDOM.render(<ToFillTheAir/>, rootElement);

export default ToFillTheAir;

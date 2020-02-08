import * as React from 'react';
import * as log from 'loglevel';

type State = {
	hasError: boolean;
}

class ErrorBoundary extends React.Component<{}, State> {
	constructor(props: Readonly<{}>) {
		super(props);
		this.state = { hasError: false };
	}

	static getDerivedStateFromError(error: any) {
		return { hasError: true };
	}

	componentDidCatch(error: any, errorInfo: any) {
		log.info(error, errorInfo);
	}

	render() {
		if (this.state.hasError) {
			return <h1>Something went wrong.</h1>;
		}

		return this.props.children;
	}
}
export default ErrorBoundary;

import * as React from 'react';
import * as log from 'loglevel';

type State = {
    hasError: boolean;
}

class ErrorBoundary extends React.Component<Record<string, unknown>, State> {
    constructor(props: Readonly<Record<string, unknown>>) {
        super(props);
        this.state = { hasError: false };
    }

    // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
    static getDerivedStateFromError(error: any) {
        log.info(error);
        return { hasError: true };
    }

    // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
    componentDidCatch(error: any, errorInfo: any) {
        log.info(error, errorInfo);
    }

    // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
    render() {
        if (this.state.hasError) {
            return <h1>Something went wrong.</h1>;
        }

        return this.props.children;
    }
}
export default ErrorBoundary;

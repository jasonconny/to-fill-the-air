import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Helmet } from 'react-helmet';
import ErrorBoundary from './components/ErrorBoundary';
import GlobalStyles from './components/GlobalStyles/GlobalStyles';
import AppProvider from './providers/AppProvider';
import AppRouter from './routes/AppRouter';

const ToFillTheAir: React.FC = () => {
    return (
        <ErrorBoundary>
            <Helmet>
                <title>
					To Fill The Air | Grateful Dead set lists
                </title>
            </Helmet>

            <GlobalStyles/>

            <AppProvider>
                <AppRouter/>
            </AppProvider>
        </ErrorBoundary>
    );
};

const rootElement = document.getElementById('to-fill-the-air');
ReactDOM.render(<ToFillTheAir/>, rootElement);

export default ToFillTheAir;

import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Helmet } from 'react-helmet';
import ArtistProvider from './providers/ArtistProvider';
import ShowsProvider from './providers/ShowsProvider';
import ErrorBoundary from './components/ErrorBoundary';
import GlobalStyles from './components/GlobalStyles/GlobalStyles';
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

            <ArtistProvider>
                <ShowsProvider>
                    <AppRouter/>
                </ShowsProvider>
            </ArtistProvider>
        </ErrorBoundary>
    );
};

const rootElement = document.getElementById('to-fill-the-air');
ReactDOM.render(<ToFillTheAir/>, rootElement);

export default ToFillTheAir;

import {ApolloClient, ApolloProvider, NormalizedCacheObject} from '@apollo/client';
import { apolloCache } from './apolloCache';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import env from 'react-dotenv';
import { Helmet } from 'react-helmet';
import ErrorBoundary from './components/ErrorBoundary';
import GlobalStyles from './components/GlobalStyles/GlobalStyles';
import AppProvider from './providers/AppProvider';
import Router from './router';

const { APOLLO_SERVER_URI } = env;

const apolloClient: ApolloClient<NormalizedCacheObject> = new ApolloClient({
    cache: apolloCache,
    uri: APOLLO_SERVER_URI
});

const ToFillTheAir: React.FC = () => {
    return (
        <ApolloProvider client={apolloClient}>
            <ErrorBoundary>
                <Helmet>
                    <title>
                        To Fill The Air | Grateful Dead set lists
                    </title>
                </Helmet>

                <GlobalStyles/>

                <AppProvider>
                    <Router/>
                </AppProvider>
            </ErrorBoundary>
        </ApolloProvider>
    );
};

const rootElement = document.getElementById('to-fill-the-air');
ReactDOM.render(<ToFillTheAir/>, rootElement);

export default ToFillTheAir;

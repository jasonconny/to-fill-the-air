import { Auth0Provider} from '@auth0/auth0-react';
import {ApolloClient, ApolloProvider, NormalizedCacheObject} from '@apollo/client';
import { apolloCache } from './apolloCache';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Helmet } from 'react-helmet';
import ErrorBoundary from './components/ErrorBoundary';
import GlobalStyles from './components/GlobalStyles/GlobalStyles';
import AppProvider from './providers/AppProvider';
import Router from './router';
import { authConfig } from './authConfig';

const apolloClient: ApolloClient<NormalizedCacheObject> = new ApolloClient({
    cache: apolloCache,
    uri: process.env.APOLLO_SERVER_URI
});

const ToFillTheAir: React.FC = () => {
    return (
        <Auth0Provider
            domain={authConfig.domain}
            clientId={authConfig.clientId}
            redirectUri={window.location.origin}
        >
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
        </Auth0Provider>
    );
};

const rootElement = document.getElementById('to-fill-the-air');
ReactDOM.render(<ToFillTheAir/>, rootElement);

export default ToFillTheAir;

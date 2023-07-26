import { Auth0Provider } from '@auth0/auth0-react';
import { ApolloClient, ApolloProvider, NormalizedCacheObject } from '@apollo/client';
import { apolloCache } from './apolloCache';
import * as React from 'react';
import { createRoot } from 'react-dom/client';
import { Helmet } from 'react-helmet';
import GlobalStyles from './components/GlobalStyles/GlobalStyles';
import Router from './router';
import { authConfig } from 'authConfig';

const apolloClient: ApolloClient<NormalizedCacheObject> = new ApolloClient({
    cache: apolloCache,
    uri: process.env.APOLLO_SERVER_URI
});

const ToFillTheAir: React.FC = () => {
    return (
        <Auth0Provider
            domain={authConfig.domain}
            clientId={authConfig.clientId}
            authorizationParams={{
                redirect_uri: window.location.origin
            }}
        >
            <ApolloProvider client={apolloClient}>
                <Helmet>
                    <title>
                        To Fill The Air | Grateful Dead set lists
                    </title>
                </Helmet>

                <GlobalStyles/>

                <Router/>
            </ApolloProvider>
        </Auth0Provider>
    );
};

const container = document.getElementById('to-fill-the-air');
const root = createRoot(container as Element);

root.render(<ToFillTheAir/>);

export default ToFillTheAir;

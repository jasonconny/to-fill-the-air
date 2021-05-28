import * as React from 'react';
import ArtistProvider from './ArtistProvider';
import ShowsProvider from './ShowsProvider';

const AppProvider: React.FC<IProviderProps> = props => {
    const { children } = props;

    return (
        <ArtistProvider>
            <ShowsProvider>
                {children}
            </ShowsProvider>
        </ArtistProvider>
    )
};

export default AppProvider;

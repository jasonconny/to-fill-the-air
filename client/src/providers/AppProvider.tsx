import * as React from 'react';
import ShowsProvider from './ShowsProvider';

const AppProvider: React.FC<IProviderProps> = props => {
    const { children } = props;

    return (
        <ShowsProvider>
            {children}
        </ShowsProvider>
    )
};

export default AppProvider;

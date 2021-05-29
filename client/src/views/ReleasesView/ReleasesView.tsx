import * as React from 'react';
import { useParams } from 'react-router-dom';
import { PrimaryLayout } from 'components/Layouts';

const ReleasesSubNav: React.FC = () => (
    <div>Releases SubNav</div>
);

const ReleasesView: React.FC = () => {
    const { releaseType }: {releaseType: string} = useParams();

    return (
        <PrimaryLayout subNav={<ReleasesSubNav/>}>
            <section>
                <h2>Releases</h2>
 
                {releaseType && (
                    <h3>{releaseType}</h3>
                )}
            </section>
        </PrimaryLayout>
    );
};

export default ReleasesView;

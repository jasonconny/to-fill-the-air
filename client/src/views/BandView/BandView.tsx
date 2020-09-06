import * as React from 'react';
import { ArtistContext } from '../../providers/ArtistProvider';
import { PrimaryLayout } from '../../components/Layouts';
import styles from './BandView.scss';

const BandView: React.FC = () => {
    const { setArtistIdState } = React.useContext(ArtistContext);

    React.useEffect(() => {
        setArtistIdState(246650);
    }, [setArtistIdState]);

    return (
        <ArtistContext.Consumer>
            {({artistData, fetching}) => (
                <PrimaryLayout showLoading={fetching}>
                    <section className={styles.content}>
                        <h2>{artistData?.name} were:</h2>

                        {artistData && artistData.members.length > 0 && (
                            <ul>
                                {artistData.members
                                    .filter(member => !!member)
                                    .map((member, index) => (
                                        <li key={index}>
                                            {member.name}
                                        </li>
                                    ))
                                }
                            </ul>
                        )}
                    </section>
                </PrimaryLayout>

            )}
        </ArtistContext.Consumer>
    );
};

export default BandView;

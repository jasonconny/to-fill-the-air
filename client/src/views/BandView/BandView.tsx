import * as React from 'react';
import { ArtistContext } from '../../providers/ArtistProvider';
import { PrimaryLayout } from '../../components/Layouts';
import styles from './BandView.scss';

const BandView: React.FC = () => {
    const artist = React.useContext(ArtistContext);

    return (
        <PrimaryLayout>
            <section className={styles.content}>
                <h2>{artist?.name} were:</h2>

                {artist && artist.members.length > 0 && (
                    <ul>
                        {artist.members
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
    );
};

export default BandView;

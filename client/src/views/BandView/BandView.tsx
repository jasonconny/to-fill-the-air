import React from 'react';
import { gql, useQuery } from '@apollo/client';
import { ArtistData } from 'types/Artist';
import styles from './BandView.scss';

export const GET_ARTIST = gql`
  query GetArtist($artistId: ID!) {
    artist(artist_id: $artistId) {
      name
      members {
        id
        firstName
        lastName
        name
        middleName
      }
    }
  }
`;

const lineup1 = ['259913', '385240', '260091', '468696', '259912'];
const lineup2 = ['259913', '290364', '385240', '260091', '468696', '259912'];
const lineup3 = [
  '468697',
  '259913',
  '290364',
  '385240',
  '260091',
  '468696',
  '259912',
];
const lineup4 = ['259913', '718937', '385240', '260091', '259912'];
const lineup5 = ['259913', '718937', '385240', '260091', '468696', '259912'];
const lineup6 = [
  '259913',
  '718937',
  '718936',
  '385240',
  '260091',
  '468696',
  '259912',
];
const lineup7 = ['259913', '718937', '718936', '385240', '260091', '259912'];
const lineup8 = [
  '259913',
  '718937',
  '718936',
  '290364',
  '385240',
  '260091',
  '259912',
];
const lineup9 = ['259913', '290364', '385240', '260091', '726040', '259912'];
const lineup10 = ['259913', '290364', '385240', '260091', '259912', '392648'];
const lineup11 = [
  '259913',
  '290364',
  '49172',
  '385240',
  '260091',
  '259912',
  '392648',
];
const lineup12 = [
  '305837',
  '541772',
  '290364',
  '49172',
  '385240',
  '260091',
  '259912',
];

const BandView: React.FC = () => {
  const { data } = useQuery<ArtistData>(GET_ARTIST, {
    variables: { artistId: '246650' },
  });

  return (
    <section>
      <h2>{data?.artist.name} were:</h2>

      {data && data.artist.members.length > 0 && (
        <div className={styles.lineups}>
          <ul>
            <h3>12/14/1965 - 9/24/1967</h3>
            {data.artist.members
              .filter((member) => !!member && lineup1.includes(member.id))
              .map((member) => (
                <li key={member.id}>{member.name}</li>
              ))}
          </ul>

          <ul>
            <h3>9/26/1967 - 11/17/1968</h3>
            {data.artist.members
              .filter((member) => !!member && lineup2.includes(member.id))
              .map((member) => (
                <li key={member.id}>{member.name}</li>
              ))}
          </ul>

          <ul>
            <h3>11/23/1968 - 1/30/1970</h3>
            {data.artist.members
              .filter((member) => !!member && lineup3.includes(member.id))
              .map((member) => (
                <li key={member.id}>{member.name}</li>
              ))}
          </ul>

          <ul>
            <h3>1/31/1970 - 2/18/1971</h3>
            {data.artist.members
              .filter((member) => !!member && lineup2.includes(member.id))
              .map((member) => (
                <li key={member.id}>{member.name}</li>
              ))}
          </ul>

          <ul>
            <h3>2/19/1971 - 8/26/1971</h3>
            {data.artist.members
              .filter((member) => !!member && lineup1.includes(member.id))
              .map((member) => (
                <li key={member.id}>{member.name}</li>
              ))}
          </ul>

          <ul>
            <h3>10/19/1971 - 11/20/1971</h3>
            {data.artist.members
              .filter((member) => !!member && lineup4.includes(member.id))
              .map((member) => (
                <li key={member.id}>{member.name}</li>
              ))}
          </ul>

          <ul>
            <h3>12/1/1971 - 12/15/1971</h3>
            {data.artist.members
              .filter((member) => !!member && lineup5.includes(member.id))
              .map((member) => (
                <li key={member.id}>{member.name}</li>
              ))}
          </ul>

          <ul>
            <h3>12/31/1972 - 6/17/1972</h3>
            {data.artist.members
              .filter((member) => !!member && lineup6.includes(member.id))
              .map((member) => (
                <li key={member.id}>{member.name}</li>
              ))}
          </ul>

          <ul>
            <h3>7/16/1972 - 10/19/1974</h3>
            {data.artist.members
              .filter((member) => !!member && lineup7.includes(member.id))
              .map((member) => (
                <li key={member.id}>{member.name}</li>
              ))}
          </ul>

          <ul>
            <h3>10/20/1974 - 2/17/1979</h3>
            {data.artist.members
              .filter((member) => !!member && lineup8.includes(member.id))
              .map((member) => (
                <li key={member.id}>{member.name}</li>
              ))}
          </ul>

          <ul>
            <h3>4/22/1979 - 7/23/1990</h3>
            {data.artist.members
              .filter((member) => !!member && lineup9.includes(member.id))
              .map((member) => (
                <li key={member.id}>{member.name}</li>
              ))}
          </ul>

          <ul>
            <h3>9/7/1990 - 9/14/1990</h3>
            {data.artist.members
              .filter((member) => !!member && lineup10.includes(member.id))
              .map((member) => (
                <li key={member.id}>{member.name}</li>
              ))}
          </ul>

          <ul>
            <h3>9/15/1990 - 3/24/1992</h3>
            {data.artist.members
              .filter((member) => !!member && lineup11.includes(member.id))
              .map((member) => (
                <li key={member.id}>{member.name}</li>
              ))}
          </ul>

          <ul>
            <h3>5/12/1992 - 7/9/1995</h3>
            {data.artist.members
              .filter((member) => !!member && lineup10.includes(member.id))
              .map((member) => (
                <li key={member.id}>{member.name}</li>
              ))}
          </ul>

          <ul>
            <h3>6/27/2015 - 7/5/2015</h3>
            {data.artist.members
              .filter((member) => !!member && lineup12.includes(member.id))
              .map((member) => (
                <li key={member.id}>{member.name}</li>
              ))}
          </ul>
        </div>
      )}
    </section>
  );
};

export default BandView;

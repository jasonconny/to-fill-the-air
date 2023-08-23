import * as React from 'react';
import { useParams } from 'react-router-dom';

const SubNavLinks: Array<INavLink> = [
  {
    name: 'Box Set',
    slug: 'box-set',
  },
  {
    name: 'Dicks Picks',
    slug: 'dicks-picks',
  },
  {
    name: 'Download Series',
    slug: 'download-series',
  },
  {
    name: 'Road Trips',
    slug: 'road-trips',
  },
  {
    name: 'Daves Picks',
    slug: 'daves-picks',
  },
];

const ReleasesView: React.FC = () => {
  const { releaseType } = useParams();

  return (
    <section>
      <h2>Releases</h2>

      {releaseType && (
        <h3>{SubNavLinks.find((link) => link.slug === releaseType)?.name}</h3>
      )}
    </section>
  );
};

export default ReleasesView;

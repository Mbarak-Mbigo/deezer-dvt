import React from 'react';

interface ArtistProps {
  id: number;
  picture: string; // image url
}

function Artist({ id, picture }: ArtistProps) {
  return id
    ? (
      <div key={id}>
        <img src={picture} alt="artist name" />
      </div>
    ) : <div />;
}

export default Artist;

// TODO: add fans
// TODO: add tests

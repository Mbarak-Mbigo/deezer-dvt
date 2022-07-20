import React, { useState, useEffect } from 'react';

import { useAppSelector, useAppDispatch } from '../../app/hooks';

import { selectArtists, fetchArtists } from './artistsSlice';
import { ReactComponent as Loader } from '../../assets/custom-spinner.svg';
import Artist from '../Components/Artist/Artist';

export function Artists() {
  const artists = useAppSelector(selectArtists);
  const [query, setQuery] = useState('');
  const dispatch = useAppDispatch();

  useEffect(() => {
    // dispatch(fetchArtists('eminem'));
  }, []);

  const initiateSearch = () => {
    dispatch(fetchArtists(query));
  };

  const updateQuery = (
    event: { target: { value: React.SetStateAction<string>; }; },
  ) => {
    setQuery(event.target.value);
  };

  return (
    <div className="container">
      <div className="search-input-wrapper">
        <input
          name="search"
          placeholder="Search Artist"
          value={query}
          onChange={updateQuery}
        />
        <button type="button" onClick={initiateSearch}>Search</button>
      </div>
      <div className="content-wrapper">
        {artists.status === 'loading' && <Loader />}
        {!artists.artistSearchResult.length
        && artists.status === 'success' && 'No Records Found'}
        {!!artists.artistSearchResult.length && (
        <div>
          {
            artists.artistSearchResult.map(
              (artistData) => (
                <Artist
                  id={artistData.artist.id}
                  picture={artistData.artist.picture}
                />
              ),
            )
          }
        </div>
        )}
      </div>
    </div>
  );
}

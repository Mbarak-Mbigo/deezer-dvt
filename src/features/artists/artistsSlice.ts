import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { RootState } from '../../app/store';

import { fetchSearchedArtists } from './artistsAPI';

interface IArtist {
  id: number;
  name: string;
  picture: string;
}

interface IArtistData {
  name: string;
  picture: string;
  numberOfFans: number;
  artist: IArtist;
}

export interface ArtistsState {
  artistSearchResult: IArtistData[],
  status: 'loading'| 'failed' | 'success' | 'initial';
}

const initialState: ArtistsState = {
  artistSearchResult: [],
  status: 'initial',
};

export const fetchArtists = createAsyncThunk(
  'artist/fetch',
  async (queryParam:string) => {
    const response = await fetchSearchedArtists(queryParam);
    return response.data.data;
  },
);

export const searchArtist = createSlice({
  name: 'artistSearchResult',
  initialState,
  reducers: {
    updateArtists: (state, action) => {
      state.artistSearchResult = action.payload;
    },
  },

  extraReducers: (builder) => {
    builder
      .addCase(fetchArtists.pending, (state) => {
        state.status = 'loading';
      })

      .addCase(fetchArtists.fulfilled, (state, action) => {
        state.status = 'success';
        state.artistSearchResult = action.payload;
      })

      .addCase(fetchArtists.rejected, (state) => {
        state.status = 'failed';
      });
  },
});

export const { updateArtists } = searchArtist.actions;

export const selectArtists = (state: RootState) => state.artistSearchResult;

export default searchArtist.reducer;

// TODO: add tests

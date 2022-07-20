import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import searchArtistsReducer from '../features/artists/artistsSlice';

// TODO: Add data persistence middleware
export const store = configureStore({
  reducer: {
    artistSearchResult: searchArtistsReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;

import { configureStore } from '@reduxjs/toolkit';
import playlistsReducer, { playlistsApi } from './playlists/playlistsSlice';

export const store = configureStore({
  reducer: {
    playlists: playlistsReducer,
    [playlistsApi.reducerPath]: playlistsApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(playlistsApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

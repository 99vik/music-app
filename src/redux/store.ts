import { configureStore } from '@reduxjs/toolkit';
import { playlistsApi } from './playlists/playlistsSlice';
import currentViewReducer from './currentMainView/currentMainViewSlice';
import currentSongReducer from './musicPlayer/musicPlayerSlice';
export const store = configureStore({
  reducer: {
    currentView: currentViewReducer,
    currentSong: currentSongReducer,
    [playlistsApi.reducerPath]: playlistsApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(playlistsApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

import { createSlice } from '@reduxjs/toolkit';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { playlistIDs } from './playlistIDs';

interface Playlist {
  name: string;
  songs: object[];
}

interface PlaylistState {
  popular: Playlist | null;
  pop: Playlist | null;
  rock: Playlist | null;
}

const initialState: PlaylistState = {
  popular: null,
  pop: null,
  rock: null,
};

export const playlistsSlice = createSlice({
  name: 'playlists',
  initialState,
  reducers: {
    changePopular: (state) => {
      state.pop = {
        name: 'changed',
        songs: [{}, {}],
      };
    },
  },
});

export const playlistsApi = createApi({
  reducerPath: 'playlistsApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://deezerdevs-deezer.p.rapidapi.com',
    prepareHeaders(headers) {
      headers.set('X-RapidAPI-Key', import.meta.env.VITE_RAPID_API_KEY);
      headers.set('X-RapidAPI-Host', 'deezerdevs-deezer.p.rapidapi.com');
      return headers;
    },
  }),
  endpoints: (builder) => ({
    getPopular: builder.query({
      query: () => `/playlist/${playlistIDs.popular}&limit=10`,
    }),
    getPop: builder.query({
      query: () => `/playlist/${playlistIDs.pop}&limit=10`,
    }),
  }),
});

export const { changePopular } = playlistsSlice.actions;
export default playlistsSlice.reducer;
export const { useGetPopularQuery } = playlistsApi;

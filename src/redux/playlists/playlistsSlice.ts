import { createSlice } from '@reduxjs/toolkit';

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
      state.popular = {
        name: 'changed',
        songs: [{}, {}],
      };
    },
  },
});

export const { changePopular } = playlistsSlice.actions;
export default playlistsSlice.reducer;

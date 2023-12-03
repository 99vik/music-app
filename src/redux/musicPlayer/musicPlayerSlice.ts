import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { SongType } from '../../components/Main/Song/songType';

const initialState: { song: SongType | null } = {
  song: null,
};

export const currentSongSlice = createSlice({
  name: 'musicPlayer',
  initialState,
  reducers: {
    setCurrentSong: (state, action: PayloadAction<SongType>) => {
      state.song = action.payload;
    },
  },
});

export const { setCurrentSong } = currentSongSlice.actions;
export default currentSongSlice.reducer;

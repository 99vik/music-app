import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { SongType } from '../../components/Main/SongCard/songType';

interface initialStateType {
  song: SongType | null;
  songID: number | null;
  isPlaying: boolean;
  volume: number;
}

const initialState: initialStateType = {
  song: null,
  songID: null,
  isPlaying: false,
  volume: 0.25,
};

export const currentSongSlice = createSlice({
  name: 'musicPlayer',
  initialState,
  reducers: {
    setCurrentSong: (state, action: PayloadAction<SongType>) => {
      state.song = action.payload;
      state.songID = action.payload.id;
    },
    setIsPlaying: (state, action: PayloadAction<boolean>) => {
      state.isPlaying = action.payload;
    },
    setVolume: (state, action: PayloadAction<number>) => {
      state.volume = action.payload;
    },
  },
});

export const { setCurrentSong, setIsPlaying, setVolume } =
  currentSongSlice.actions;
export default currentSongSlice.reducer;

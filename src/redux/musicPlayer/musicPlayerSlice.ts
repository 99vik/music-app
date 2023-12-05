import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { SongType } from '../../components/Main/SongCard/songType';

interface Playlist {
  id: number | null;
  tracks: { data: SongType[] };
}

interface initialStateType {
  song: SongType | null;
  playlist: Playlist;
  songID: number | null;
  isPlaying: boolean;
  volume: number;
}

const initialState: initialStateType = {
  song: null,
  playlist: {
    id: null,
    tracks: { data: [] },
  },
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
    setCurrentPlaylist: (state, action: PayloadAction<Playlist>) => {
      state.playlist = action.payload;
    },
    setIsPlaying: (state, action: PayloadAction<boolean>) => {
      state.isPlaying = action.payload;
    },
    setVolume: (state, action: PayloadAction<number>) => {
      state.volume = action.payload;
    },
  },
});

export const { setCurrentSong, setCurrentPlaylist, setIsPlaying, setVolume } =
  currentSongSlice.actions;
export default currentSongSlice.reducer;

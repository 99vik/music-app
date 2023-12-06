import { PayloadAction, createSlice } from '@reduxjs/toolkit';

interface curretMainViewState {
  view: 'Discover' | 'Pop' | 'Hip-Hop' | 'Rock' | 'EDM' | 'Jazz' | 'R&B';
  search: string | null;
}

const initialState: curretMainViewState = {
  view: 'Discover',
  search: null,
};

export const curretViewSlice = createSlice({
  name: 'view',
  initialState,
  reducers: {
    changeToDiscover: (state) => {
      state.view = 'Discover';
    },
    changeToPop: (state) => {
      state.view = 'Pop';
    },
    changeToHipHop: (state) => {
      state.view = 'Hip-Hop';
    },
    changeToRock: (state) => {
      state.view = 'Rock';
    },
    changeToRnB: (state) => {
      state.view = 'R&B';
    },
    changeToJazz: (state) => {
      state.view = 'Jazz';
    },
    changeToEDM: (state) => {
      state.view = 'EDM';
    },
    setSearchQuery: (state, action: PayloadAction<string | null>) => {
      state.search = action.payload;
    },
  },
});

export const {
  changeToDiscover,
  changeToPop,
  changeToHipHop,
  changeToRock,
  changeToRnB,
  changeToEDM,
  changeToJazz,
  setSearchQuery,
} = curretViewSlice.actions;
export default curretViewSlice.reducer;

import { createSlice } from '@reduxjs/toolkit';

interface curretMainViewState {
  view: 'Discover' | 'Pop' | 'Hip-Hop' | 'Rock';
}

const initialState: curretMainViewState = {
  view: 'Discover',
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
  },
});

export const { changeToDiscover, changeToPop, changeToHipHop, changeToRock } =
  curretViewSlice.actions;
export default curretViewSlice.reducer;

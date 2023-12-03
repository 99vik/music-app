import { createSlice } from '@reduxjs/toolkit';

interface curretMainViewState {
  view: 'discover' | 'pop' | 'hipHop' | 'rock';
}

const initialState: curretMainViewState = {
  view: 'discover',
};

export const curretViewSlice = createSlice({
  name: 'view',
  initialState,
  reducers: {
    changeToDiscover: (state) => {
      state.view = 'discover';
    },
    changeToPop: (state) => {
      state.view = 'pop';
    },
    changeToHipHop: (state) => {
      state.view = 'hipHop';
    },
    changeToRock: (state) => {
      state.view = 'rock';
    },
  },
});

export const { changeToDiscover, changeToPop, changeToHipHop, changeToRock } =
  curretViewSlice.actions;
export default curretViewSlice.reducer;

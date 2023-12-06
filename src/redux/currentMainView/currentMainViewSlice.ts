import { PayloadAction, createSlice } from '@reduxjs/toolkit';

interface curretMainViewState {
  view: 'Discover' | 'Pop' | 'Hip-Hop' | 'Rock';
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
  setSearchQuery,
} = curretViewSlice.actions;
export default curretViewSlice.reducer;

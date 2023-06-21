import { createSlice } from "@reduxjs/toolkit";

//slice eka kata aniwaren namak tnna one
const favoritesSlice = createSlice({
  name: "favorites",
  initialState: {
    ids: [],
  },
  //reduser ekak kiyanne state eka matha wadakarana methods
  reducers: {
    addFavorite: (state, action) => {
      state.ids.push(action.payload.id);
    },
    removeFavorite: (state, action) => {
      state.ids.splice(state.ids.indexOf(action.payload.id), 1);
    }
  },
});
export const addFavorite = favoritesSlice.actions.addFavorite;
export const removeFavorite = favoritesSlice.actions.removeFavorite
export default favoritesSlice.reducer;
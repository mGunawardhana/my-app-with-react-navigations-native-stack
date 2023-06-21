import { configureStore } from "@reduxjs/toolkit";
import favoritesReducer from "./favorite"; // Import or define your favoritesReducer

export const store = configureStore({
  reducer: {
    favoriteMeals: favoritesReducer,
  },
});

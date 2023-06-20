import React, { createContext } from "react";
import FavoriteScreen from "../../screens/FavoriteScreen";

export const FavoriteContext = createContext({
  ids: [],
  addFavorite: (id) => {},
  removeFavorite: (id) => {},
});

const FavoriteContextProvider = ({ children }) => {
  <FavoriteContext.Provider>{children}</FavoriteContext.Provider>;
};

export default FavoriteContextProvider;

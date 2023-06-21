import { createContext } from "react";

export const FavoriteContext = createContext({
  ids: [],
  addFavorite: (id) => {},
  removeFavorite: (id) => {},
});

const FavoriteContextProvider = ({ children }) => {
  <FavoriteContext.Provider>{children}</FavoriteContext.Provider>;
};

export default FavoriteContextProvider;
//TODO 45:00 next start

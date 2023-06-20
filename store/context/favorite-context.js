import { createContext } from "react";
import FavoriteScreen from "../../screens/FavoriteScreen";

export const FavoriteContext = createContext({
  ids: [],
  addFavorite: (id) => {},
  removeFavorite: (id) => {},
});

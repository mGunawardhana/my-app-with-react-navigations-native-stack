import { useContext } from "react";
import { Text } from "react-native";
import { FavoriteContext } from "../store/context/favorite-context";
import MealList from "../components/MealList/MealList";

const FavoriteScreen = (props) => {
  const favoriteMealsCtx = useContext(FavoriteContext);

  //meals walin filter karaganna favorite eke tna ids tika  include the meal.id eke kiyala
  const favoriteMeals = MEALS.filter((meal) =>
    favoriteMealsCtx.ids.includes(meal.id)
  );

  if (favoriteMeals.length === 0) {
    return (
      <View>
        <Text>No Favorite Meals Found, start adding some!</Text>
      </View>
    );
  }

  return <MealList items={favoriteMeals} />;
};

export default FavoriteScreen;

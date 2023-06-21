import { useContext } from "react";
import { Text,StyleSheet,View } from "react-native";
import { FavoriteContext } from "../store/context/favorite-context";
import MealList from "../components/MealList/MealList";
import { MEALS } from "../data/dummy-data";

const FavoriteScreen = (props) => {
  const favoriteMealsCtx = useContext(FavoriteContext);

  //meals walin filter karaganna favorite eke tna ids tika  include the meal.id eke kiyala
  const favoriteMeals = MEALS.filter((meal) =>
    favoriteMealsCtx.ids.includes(meal.id)
  );

  if (favoriteMeals.length === 0) {
    return (
      <View style={style.rootContainer}>
        <Text style={style.text}>
          No Favorite Meals Found, start adding some!
        </Text>
      </View>
    );
  }

  return <MealList items={favoriteMeals} />;
};

const style = StyleSheet.create({
  rootContainer: {
    flex: 1,
    justifyContent: "bold",
    alignItems: "center",
  },
  text: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#fff",
  },
});

export default FavoriteScreen;

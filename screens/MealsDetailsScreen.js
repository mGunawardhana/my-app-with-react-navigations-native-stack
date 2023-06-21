import { Text, View, Image, StyleSheet } from "react-native";
import { MEALS } from "../data/dummy-data";
import MealDetail from "../components/MealDetail";
import { useContext, useLayoutEffect } from "react";
import { Button } from "react-native";
import IconButton from "../components/IconButton";
import { FavoriteContext } from "../store/context/favorite-context";


const MealsDetailsScreen = ({ route, navigation }) => {
  const favoriteMealsCtx = useContext(FavoriteContext);

  const mealId = route.params.mealId;

  const selectedMeal = MEALS.find((meal) => meal.id === mealId);

  //meeken balanne tnwada kiyala id eka
  const mealFavorite = favoriteMealsCtx.ids.includes(mealId);

  const changeFavoriteStatusHandler = () => {
    if (mealFavorite) {
      favoriteMealsCtx.removeFavorite(mealId);
    } else {
      favoriteMealsCtx.addFavorite(mealId);
    }
  };

  /** meeka component eka render wenakota eka parak
   * run weno nattam navigation eke change ekak wenakota run
   * weno
   */

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => {
        return (
          <IconButton
            icon={mealFavorite ? "star" : "star-outline"}
            color="white"
            onPress={changeFavoriteStatusHandler}
          />
        );
      },
    });
  }, [navigation, changeFavoriteStatusHandler]);

  return (
    <View>
      <Image source={{ uri: selectedMeal.imageUrl }} />
      <Text>{selectedMeal.title}</Text>
      <View>
        <MealDetail
          textStyle={styles.detailText}
          duration={selectedMeal.duration}
          complexity={selectedMeal.complexity}
          affordability={selectedMeal.affordability}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  detailText: {
    color: "#FFF",
  },
});

export default MealsDetailsScreen;
//TODO 54:58 to next start

import { Text, View, Image, StyleSheet } from "react-native";
import { MEALS } from "../data/dummy-data";
import MealDetail from "../components/MealDetail";
import { useLayoutEffect } from "react";
import { Button } from "react-native";
const MealsDetailsScreen = ({ route, navigation }) => {
  const mealId = route.params.mealId;
  const selectedMeal = MEALS.find((meal) => meal.id === mealId);

  // useLayoutEffect(() => {
  //   navigation.setOptions({
  //     headerRight: () => {
  //       return <Button title="Tap me" />;
  //     },
  //   });
  // });

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
    color: "white",
  },
});

export default MealsDetailsScreen;
//TODO 1:49:35 to next start

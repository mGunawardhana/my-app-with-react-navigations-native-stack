import MealList from "../components/MealList/MealList";
import { MEALS } from "../data/dummy-data";

const MealsOverviewScreen = ({ route }) => {
  const { categoryId } = route.params;
  const displayMeals = MEALS.filter(
    (mealItem) => mealItem.categoryIds.indexOf(categoryId) >= 0
  );

  return <MealList items={displayMeals} />;
};

export default MealsOverviewScreen;

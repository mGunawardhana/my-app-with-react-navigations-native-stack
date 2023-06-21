import { MEALS } from "../data/dummy-data";

const MealsOverviewScreen = ({ route }) => {
  const { categoryId } = route.params;
  const displayMeals = MEALS.filter(
    (mealItem) => mealItem.categoryIds.indexOf(categoryId) >= 0
  );
};

export default MealsOverviewScreen;

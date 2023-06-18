import { FlatList, StyleSheet } from "react-native";
import { CATEGORIES } from "../data/dummy-data";
import CategoryGridTile from "../components/CategoryGridTile";
import { useNavigation } from "@react-navigation/native";

const CategoryScreen = () => {
  const navigation = useNavigation();
  const renderCategoryItem = (itemData) => {
      const pressHandler = () => {
        //we can pass data like this is navigation part
          //we can use first param to navigation path
      navigation.navigate("MealsOverview", { categoryId: itemData.item.id });
    };

    return (
      <CategoryGridTile
        title={itemData.item.title}
        color={itemData.item.color}
        onPress={pressHandler}
      />
    );
  };

  return (
    <FlatList
      data={CATEGORIES}
      keyExtractor={(item) => item.id}
      renderItem={renderCategoryItem}
      numColumns={2} /* we can get two columns */
    />
  );
};

// const styles = StyleSheet.create({
//     item: {
//         marginTop: 50,
//         marginLeft: 30,
//     },
// });

export default CategoryScreen;

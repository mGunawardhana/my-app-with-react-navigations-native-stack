import { FlatList, Text, StyleSheet } from "react-native";
import { CATEGORIES } from "../data/dummy-data";
import CategoryGridTile from "../components/CategoryGridTile";

const renderCategoryItem = (itemData) => {
  return <CategoryGridTile title={itemData.item.title} />;
};

const CategoryScreen = () => {
  return (
    <FlatList
      data={CATEGORIES}
      keyExtractor={(item) => item.id}
      renderItem={renderCategoryItem}
    />
  );
};

const styles = StyleSheet.create({
  item: {
    marginTop: 50,
    marginLeft: 30,
  },
});

export default CategoryScreen;

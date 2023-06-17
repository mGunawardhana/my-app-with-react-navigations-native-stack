import {FlatList, StyleSheet} from "react-native";
import {CATEGORIES} from "../data/dummy-data";
import CategoryGridTile from "../components/CategoryGridTile";

const renderCategoryItem = (itemData) => {
    return <CategoryGridTile title={itemData.item.title}
                             color={itemData.item.color}/>;
};

const CategoryScreen = () => {
    return (
        <FlatList
            data={CATEGORIES}
            keyExtractor={(item) => item.id}
            renderItem={renderCategoryItem}
            numColumns={2}/* we can get two columns */
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

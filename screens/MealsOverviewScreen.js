import {FlatList, StyleSheet, Text, View} from "react-native";
import { MEALS } from "../data/dummy-data";

const MealsOverviewScreen = ({route}) => {

    const { categoryId } = route.params;
    
    const displayMeals = MEALS.filter(mealItem => mealItem.categoryIds.indexOf(categoryId) >= 0);

    const renderMealItems = (itemData) => {
        return <View>
            <Text>{ itemData.item.title}</Text>
    </View>
}

    return <View style={styles.container}>
    <FlatList data={displayMeals} keyExtractor={(item)=>item.id} renderItem={}/>
    </View>
};

const styles = StyleSheet.create({
    container:{
        flex:1,
        padding:16,
    }
});

export default MealsOverviewScreen;
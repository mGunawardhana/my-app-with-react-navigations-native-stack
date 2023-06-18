import {Text} from "react-native";

const MealsDetailsScreen = ({route}) => {

    const mealId = route.params.mealId;

    return <Text>
        This is the meal details screen {mealId}
    </Text>

}

export default MealsDetailsScreen;
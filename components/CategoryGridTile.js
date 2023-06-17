import { Pressable, View, Text,StyleSheet } from "react-native";

const CategoryGridTile = ({ title,color }) => {
  return (
    <View>
      <Pressable>
        <View>
          <Text>{title}</Text>
        </View>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
    gridItems:{
        flex:1,
    }
});

export default CategoryGridTile;
//TODO 17:04 next start
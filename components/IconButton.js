import { Pressable } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { StyleSheet } from "react-native";

const IconButton = ({ onPress,icon,color }) => {
  return (
    <Pressable
      onPress={onPress}
      style={({ pressed }) => pressed && style.pressed}
    >
      <Ionicons name={icon} size={24} color={color} />
    </Pressable>
  );
};

const style = StyleSheet.create({
  pressed: {
    opacity: 0.7,
  },
});

export default IconButton;

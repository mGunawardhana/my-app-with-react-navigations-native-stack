import { Platform, Pressable, StyleSheet, Text, View } from "react-native";

const CategoryGridTile = ({ title, color, onPress }) => {
  return (
    /** mehema denna puluwan me style poduwe ganna habi me color tika
     * list ekak widiyta ganna kiyala */
    <View style={[styles.gridItems, { backgroundColor: color }]}>
      <Pressable
        android_ripple={{ color: "#FFF" }}
        /* android ripple effect is responsible
                 to showing the clickable effect  */
        style={styles.button}
        onPress={onPress}
      >
        <View style={styles.innerContainer}>
          <Text style={styles.title}>{title}</Text>
        </View>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  gridItems: {
    flex: 1,
    margin: 16,
    height: 150,
    borderRadius: 8,
    elevation: 4 /* we can use background (shadows) this one is
        not working for ios app */,
    backgroundColor: "#FFF",
    shadowColor: "black",
    shadowOpacity: "0.25",
    shadowOffset: { width: 0, height: 0 },
    shadowRadius: 8,
    //TODO using cross platform API
    overflow: Platform.OS === "android" ? "hidden" : "visible",
    /**
         * meeka use kare ara animation eka border radius
         eka overflow karana eka stop karanna
         * habi meeka ios waladi shadow ekat hidden karanwa, etakota background
         eka pennanne naha
         * ewenuwata platform api use karanna puluwan apita
         */
  },
  button: {
    flex: 1,
  },
  innerContainer: {
    flex: 1,
    padding: 16,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontWeight: "bold",
    fontSize: 18,
  },
});

export default CategoryGridTile;
//TODO 31:15 to start

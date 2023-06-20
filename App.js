import { StatusBar } from "expo-status-bar";
import React from "react";
import { Text, Button, StyleSheet } from "react-native";
import CategoryScreen from "./screens/CategoryScreen";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import MealsOverviewScreen from "./screens/MealsOverviewScreen";
import MealsDetailsScreen from "./screens/MealsDetailsScreen";
import { createDrawerNavigator } from "@react-navigation/drawer";
import FavoriteScreen from "./screens/FavoriteScreen";

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator(); // Fix: Correct variable name

const DrawerNavigator = () => {
  return (
    // Fix: Use Drawer.Navigator instead of Drawer
    <Drawer.Navigator
      screenOptions={{
        headerStyle: { backgroundColor: "#FE724C" },
        //we can change header font color
        headerTintColor: "#FFF",
        sceneContainerStyle: { backgroundColor: "#fff" },
        //we can use drawer container styles like this
        drawerContentStyle: { backgroundColor: "#2c3e50" },
        //we can change inactive drawer heading color using this
        drawerInactiveTintColor: "#FFF",
      }}
    >
      <Drawer.Screen
        name="Categories"
        component={CategoryScreen}
        options={{ title: "All Categories" }}
      />
      <Drawer.Screen name="Favorite" component={FavoriteScreen} />
    </Drawer.Navigator>
  );
};

export default function App() {
  return (
    <>
      <StatusBar style="light" />
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerStyle: { backgroundColor: "#FE724C" },
            headerTintColor: "#272D2F",
            contentStyle: { backgroundColor: "#fff" },
          }}
        >
          <Stack.Screen
            name="MealsCategories"
            component={DrawerNavigator}
            options={{
              title: "Meal Categories",
              //drawer navigator eke heading eka remove kara
              headerShown: false,
            }}
          />
          <Stack.Screen
            name="MealsOverview"
            component={MealsOverviewScreen}
            options={{
              title: "Meal Overview", // Fix: Correct screen title
            }}
          />
          <Stack.Screen
            name="MealsDetail"
            component={MealsDetailsScreen}
            options={{
              title: "Meal Details",
              // TODO: We can use a button in the header like this
              // headerRight: () => <Button title="Tap me" />,
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

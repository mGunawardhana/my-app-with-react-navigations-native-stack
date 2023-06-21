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
import { Ionicons } from "@expo/vector-icons";
import FavoriteContextProvider from "./store/context/favorite-context";

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
  return (
    <Drawer.Navigator
      screenOptions={{
        headerStyle: { backgroundColor: "#130f40" },
        headerTintColor: "#FFF",
        sceneContainerStyle: { backgroundColor: "#3f2f25" },
        drawerContentStyle: { backgroundColor: "#130f40" },
        drawerActiveTintColor: "#FFF",
        drawerActiveBackgroundColor: "#f39c12",
        drawerInactiveTintColor: "#f1c40f",
      }}
    >
      <Drawer.Screen
        name="Categories"
        component={CategoryScreen}
        options={{
          title: "All Categories",
          drawerIcon: ({ color, size }) => (
            <Ionicons name="list" size={size} color={color} />
          ),
        }}
      />
      <Drawer.Screen
        name="Favorite"
        component={FavoriteScreen}
        options={{
          title: "Favorites",
          drawerIcon: ({ color, size }) => (
            <Ionicons name="swap-horizontal" size={size} color={color} />
          ),
        }}
      />
    </Drawer.Navigator>
  );
};

export default function App() {
  return (
    <>
      <StatusBar style="light" />
      <FavoriteContextProvider>
        <NavigationContainer>
          <Stack.Navigator
            screenOptions={{
              headerStyle: { backgroundColor: "#130f40" },
              headerTintColor: "#FFF",
            }}
          >
            <Stack.Screen
              name="MealsCategories"
              component={DrawerNavigator}
              options={{
                title: "Meal Categories",
                headerShown: false,
              }}
            />
            <Stack.Screen
              name="MealsOverview"
              component={MealsOverviewScreen}
              options={{
                title: "Meal Overview",
              }}
            />
            <Stack.Screen
              name="MealsDetail"
              component={MealsDetailsScreen}
              options={{
                title: "Meal Details",
              }}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </FavoriteContextProvider>
    </>
  );
}

const styles = StyleSheet.create({});

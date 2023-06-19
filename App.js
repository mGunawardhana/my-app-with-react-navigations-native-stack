import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet } from "react-native";
import CategoryScreen from "./screens/CategoryScreen";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import MealsOverviewScreen from "./screens/MealsOverviewScreen";
import MealsDetailsScreen from "./screens/MealsDetailsScreen";
import { Text } from "react-native";
const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <>
      <StatusBar style="light" />
      <NavigationContainer>
        <Stack.Navigator
          /* common ewa tika screenoptions walata danna puluwan */
          screenOptions={{
            headerStyle: { backgroundColor: "#FE724C" },
            headerTintColor: "#272D2F",
            /* header eke tna font color eka denne meken */ contentStyle: {
              backgroundColor: "#fff",
            },
          }}
        >
          <Stack.Screen
            name="MealsCategories"
            component={CategoryScreen}
            options={{
              title: "Meal Categories",
            }}
          />
          <Stack.Screen
            name="MealsOverview"
            component={MealsOverviewScreen}
            options={{
              title: "Meal Categories",
            }}
          />
          <Stack.Screen
            name="MealsDetail"
            component={MealsDetailsScreen}
            options={{
              title: "Meal Details",
              headerRight:() =><Text>In the header</Text>
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
    // padding: 16, // Apply padding to the container
    // marginTop: 100, // Apply margin to the top
  },
});

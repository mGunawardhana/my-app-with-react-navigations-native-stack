import {StatusBar} from "expo-status-bar";
import React from "react";
import {StyleSheet} from "react-native";
import CategoryScreen from "./screens/CategoryScreen";
import {NavigationContainer} from "@react-navigation/native";
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import MealsOverviewScreen from "./screens/MealsOverviewScreen";


const Stack = createNativeStackNavigator();

export default function App() {
    return (
        <>
            <StatusBar style="light"/>
            <NavigationContainer>
                <Stack.Navigator>
                    <Stack.Screen name="MealsCategories" component={CategoryScreen}/>
                    <Stack.Screen name="MealsOverview" component={MealsOverviewScreen}/>


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

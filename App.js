import {StatusBar} from "expo-status-bar";
import React from "react";
import {StyleSheet} from "react-native";
import CategoryScreen from "./screens/CategoryScreen";
import {NavigationContainer} from "@react-navigation/native";

export default function App() {
    return (
        <>
            <StatusBar style='light'/>
            <NavigationContainer>
                <CategoryScreen/>
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

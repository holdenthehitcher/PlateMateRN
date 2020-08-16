import * as React from "react";
import { StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import HomeScreen from "../screens/Home/HomeScreen";
import FoodListScreen from "../screens/FoodList/FoodListScreen";
import CreateMealScreen from "../screens/CreateMeal/CreateMealScreen";
import NotFoundScreen from "../screens/NotFound/NotFoundScreen";
import PortionScreen from "../screens/Portion/PortionScreen";
import SetupProfileScreen from "../screens/Setup/SetupProfileScreen";
import InstructionsScreen from "../screens/Instructions/InstructionsScreen";
import ReviewStatsScreen from "../screens/Setup/ReviewStatsScreen";

const Stack = createStackNavigator();

function MainStackNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="HomeScreen"
        screenOptions={{
          gestureEnabled: true,
        }}
      >
        <Stack.Screen
          name="HomeScreen"
          component={HomeScreen}
          options={{ title: "", headerStyle: {} }}
        />
        <Stack.Screen
          name="FoodListScreen"
          component={FoodListScreen}
          options={{
            title: "All Foods",
            headerStyle: { backgroundColor: "#ef820d" },
            headerTitleStyle: {
              color: "white",
              fontSize: 24,
              fontWeight: "bold",
              alignSelf: "center",
              marginRight: 70,
            },
            headerTintColor: "white",
          }}
        />
        <Stack.Screen
          name="SetupProfileScreen"
          component={SetupProfileScreen}
          options={{
            title: "My Body Stats",
            headerStyle: { backgroundColor: "#008ecc" },
            headerTitleStyle: {
              color: "white",
              fontSize: 24,
              fontWeight: "bold",
              alignSelf: "center",
              marginRight: 50,
            },
            headerTintColor: "white",
          }}
        />
        <Stack.Screen
          name="CreateMealScreen"
          component={CreateMealScreen}
          options={{
            title: "Create A Meal",
            headerStyle: { backgroundColor: "#4cbb17" },
            headerTitleStyle: {
              color: "white",
              fontSize: 22,
              alignSelf: "center",
              marginRight: 90,
            },
            headerTintColor: "white",
          }}
        />
        <Stack.Screen
          name="PortionScreen"
          component={PortionScreen}
          options={{
            title: "Portion Your Meal",
            headerStyle: { backgroundColor: "white" },
          }}
        />
        <Stack.Screen
          name="NotFoundScreen"
          component={NotFoundScreen}
          options={{ title: "", headerStyle: { backgroundColor: "#ffe12b" } }}
        />
        <Stack.Screen
          name="InstructionsScreen"
          component={InstructionsScreen}
          options={{
            title: "Instructions",
            headerStyle: { backgroundColor: "#ff4440" },
            headerTitleStyle: {
              alignSelf: "center",
              marginRight: 57,
              fontSize: 24,
            },
            headerTintColor: "#fff",
          }}
        />
        <Stack.Screen
          name="ReviewStatsScreen"
          component={ReviewStatsScreen}
          options={{ title: "Review Stats Screen" }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({});

export default MainStackNavigator;

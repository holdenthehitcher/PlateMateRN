import * as React from "react";
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
          options={{ title: "", headerStyle: { backgroundColor: "#ffe12b" } }}
        />
        <Stack.Screen
          name="SetupProfileScreen"
          component={SetupProfileScreen}
          options={{
            title: "My Body Stats",
            headerStyle: { backgroundColor: "#0080fe" },
            headerTitleStyle: { color: "white", fontSize: 24, fontWeight: "bold", alignSelf: "center", marginRight: 50},
            headerTintColor: "white",
          }}
        />
        <Stack.Screen
          name="CreateMealScreen"
          component={CreateMealScreen}
          options={{ title: "", headerStyle: { backgroundColor: "#ffe12b" } }}
        />
        <Stack.Screen
          name="PortionScreen"
          component={PortionScreen}
          options={{ title: "", headerStyle: { backgroundColor: "#ffe12b" } }}
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
            title: "",
            headerStyle: { backgroundColor: "#ff4440" },
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

export default MainStackNavigator;

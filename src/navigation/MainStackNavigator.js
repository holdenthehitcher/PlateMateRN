import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import HomeScreen from "../screens/Home/HomeScreen";
import FoodListScreen from "../screens/FoodList/FoodListScreen";
import CreateMealScreen from "../screens/CreateMeal/CreateMealScreen";
import NotFoundScreen from "../screens/NotFound/NotFoundScreen";
import PortionScreen from "../screens/Portion/PortionScreen";
import SetupScreen from "../screens/Setup/SetupScreen";
import InstructionsScreen from "../screens/Instructions/InstructionsScreen";

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
          options={{ title: "Home Screen" }}
        />
        <Stack.Screen
          name="FoodListScreen"
          component={FoodListScreen}
          options={{ title: "List Of Foods" }}
        />
        <Stack.Screen
          name="SetupScreen"
          component={SetupScreen}
          options={{ title: "Your Personal Profile" }}
        />
        <Stack.Screen
          name="CreateMealScreen"
          component={CreateMealScreen}
          options={{ title: "Create a Meal" }}
        />
        <Stack.Screen
          name="PortionScreen"
          component={PortionScreen}
          options={{ title: "Portion Your Foods" }}
        />
        <Stack.Screen
          name="NotFoundScreen"
          component={NotFoundScreen}
          options={{ title: "NotFound Screen" }}
        />
        <Stack.Screen
          name="InstructionsScreen"
          component={InstructionsScreen}
          options={{ title: "How to Use PlateMate" }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default MainStackNavigator;

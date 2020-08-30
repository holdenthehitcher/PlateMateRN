import * as React from "react";
import { StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import {
  createStackNavigator,
  TransitionPresets,
  CardStyleInterpolators,
} from "@react-navigation/stack";
import { AppLoading } from "expo";
import { useFonts, Sniglet_400Regular } from "@expo-google-fonts/sniglet";

import HomeScreen from "../screens/Home/HomeScreen";
import FoodListScreen from "../screens/FoodList/FoodListScreen";
import CreateMealScreen from "../screens/CreateMeal/CreateMealScreen";
import NotFoundScreen from "../screens/NotFound/NotFoundScreen";
import PortionScreen from "../screens/Portion/PortionScreen";
import SetupProfileScreen from "../screens/Setup/SetupProfileScreen";
import InstructionsScreen from "../screens/Instructions/InstructionsScreen";
import ReviewStatsScreen from "../screens/Setup/ReviewStatsScreen";

const Stack = createStackNavigator();

const config = {
  animation: "spring",
  config: {
    stiffness: 1000,
    damping: 800,
    mass: 10,
    overshootClamping: true,
    restDisplacementThreshold: 0.01,
    restSpeedThreshold: 0.01,
  },
};


function MainStackNavigator() {

  let [fontsLoaded] = useFonts({
    Sniglet_400Regular,
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }

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
          options={{
            title: "PlateMate",
            headerStyle: { backgroundColor: "#4cbb17" },
            headerTitleStyle: {
              color: "white",
              fontSize: 28,
              alignSelf: "center",
              marginRight: 8,
              fontFamily: "Sniglet_400Regular"
            },
            headerTintColor: "white",
          }}
        />
        <Stack.Screen
          name="FoodListScreen"
          component={FoodListScreen}
          options={{
            title: "Your Custom Foods List",
            headerStyle: { backgroundColor: "#ef820d", height: 70 },
            headerTitleStyle: {
              color: "white",
              fontSize: 19,
              alignSelf: "center",
              marginRight: 70,
              fontFamily: "Sniglet_400Regular"
            },
            headerTintColor: "white",
            gestureDirection: "horizontal",
            ...TransitionPresets.SlideFromRightIOS,
          }}
        />
        <Stack.Screen
          name="SetupProfileScreen"
          component={SetupProfileScreen}
          options={{
            title: "Your Body Stats",
            headerStyle: { backgroundColor: "#008ecc", height: 74 },
            headerTitleStyle: {
              color: "white",
              fontSize: 23,
              alignSelf: "center",
              marginRight: 50,
              fontFamily: "Sniglet_400Regular"
            },
            headerTintColor: "white",
            gestureDirection: "horizontal",
            ...TransitionPresets.SlideFromRightIOS,
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
              fontSize: 24,
              alignSelf: "center",
              marginRight: 65,
              fontFamily: "Sniglet_400Regular"
            },
            headerTintColor: "white",
            gestureDirection: "horizontal-inverted",
          }}
        />
        <Stack.Screen
          name="PortionScreen"
          component={PortionScreen}
          options={{
            title: "Portion-A-Meal",
            headerStyle: { backgroundColor: "#4cbb17" },
            headerTitleStyle: {
              color: "white",
              alignSelf: "center",
              marginRight: 57,
              fontSize: 22,
              fontFamily: "Sniglet_400Regular"
            },
            gestureDirection: "horizontal",
            ...TransitionPresets.SlideFromRightIOS,
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
            headerStyle: { backgroundColor: "#ff4440", height: 75 },
            headerTitleStyle: {
              alignSelf: "center",
              marginRight: 57,
              fontSize: 22,
              fontFamily: "Sniglet_400Regular"
            },
            headerTintColor: "#fff",
            gestureDirection: "horizontal",
            transitionSpec: {
              open: config,
              close: config,
            },
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

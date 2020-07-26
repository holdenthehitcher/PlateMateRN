import { Ionicons } from "@expo/vector-icons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import * as React from "react";

import SetupScreen from "../screens/Setup/SetupScreen";
import HomeScreen from "../screens/Home/HomeScreen";
import CreateMealScreen from "../screens/CreateMeal/CreateMealScreen";
import FoodListScreen from "../screens/FoodList/FoodListScreen";
import PortionAdjustmentScreen from "../screens/Adjust/AdjustScreen";

const BottomTab = createBottomTabNavigator();

export default function BottomTabNavigator() {
  return (
    <BottomTab.Navigator
      initialRouteName="Setup"
      tabBarOptions={{ activeTintColor: "black" }}
    >
      <BottomTab.Screen
        name="Setup"
        component={SetupNavigator}
        options={{
          tabBarIcon: ({ color }) => (
            <TabBarIcon name="ios-code" color={color} />
          ),
        }}
      />
      <BottomTab.Screen
        name="Home"
        component={HomeNavigator}
        options={{
          tabBarIcon: ({ color }) => (
            <TabBarIcon name="ios-code" color={color} />
          ),
        }}
      />
      <BottomTab.Screen
        name="Create Meal"
        component={CreateMealNavigator}
        options={{
          tabBarIcon: ({ color }) => (
            <TabBarIcon name="ios-code" color={color} />
          ),
        }}
      />
      <BottomTab.Screen
        name="Foods List"
        component={FoodListNavigator}
        options={{
          tabBarIcon: ({ color }) => (
            <TabBarIcon name="ios-code" color={color} />
          ),
        }}
      />
      <BottomTab.Screen
        name="PortionAdjustment"
        component={PortionAdjustmentNavigator}
        options={{
          tabBarIcon: ({ color }) => (
            <TabBarIcon name="ios-code" color={color} />
          ),
        }}
      />
    </BottomTab.Navigator>
  );
}

// You can explore the built-in icon families and icons on the web at:
// https://icons.expo.fyi/
function TabBarIcon(props) {
  return <Ionicons size={30} style={{ marginBottom: -3 }} {...props} />;
}

// Each tab has its own navigation stack, you can read more about this pattern here:
// https://reactnavigation.org/docs/tab-based-navigation#a-stack-navigator-for-each-tab
const SetupStack = createStackNavigator();

function SetupNavigator() {
  return (
    <SetupStack.Navigator>
      <SetupStack.Screen
        name="SetupScreen"
        component={SetupScreen}
        options={{ headerTitle: "Getting Started with PlateMate" }}
      />
    </SetupStack.Navigator>
  );
}

const HomeStack = createStackNavigator();

function HomeNavigator() {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{ headerTitle: "Home" }}
      />
    </HomeStack.Navigator>
  );
}

const CreateMealStack = createStackNavigator();

function CreateMealNavigator() {
  return (
    <CreateMealStack.Navigator>
      <CreateMealStack.Screen
        name="CreateMealScreen"
        component={CreateMealScreen}
        options={{ headerTitle: "Choose Your Foods" }}
      />
    </CreateMealStack.Navigator>
  );
}

const FoodListStack = createStackNavigator();

function FoodListNavigator() {
  return (
    <FoodListStack.Navigator>
      <FoodListStack.Screen
        name="FoodListScreen"
        component={FoodListScreen}
        options={{ headerTitle: "List of Foods" }}
      />
    </FoodListStack.Navigator>
  );
}

const PortionAdjustmentStack = createStackNavigator();

function PortionAdjustmentNavigator() {
  return (
    <PortionAdjustmentStack.Navigator>
      <PortionAdjustmentStack.Screen
        name="PortionAdjustmentScreen"
        component={PortionAdjustmentScreen}
        options={{ headerTitle: "Adjust Your Portion Size" }}
      />
    </PortionAdjustmentStack.Navigator>
  );
}

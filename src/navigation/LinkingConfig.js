import * as Linking from "expo-linking";

export default {
  prefixes: [Linking.makeUrl("/")],
  config: {
    screens: {
      Root: {
        screens: {
          Setup: {
            screens: {
              SetupScreen: "one",
            },
          },
          Home: {
            screens: {
              HomeScreen: "two",
            },
          },
          FoodList: {
            screens: {
              FoodListScreen: "three",
            },
          },
          PortionAdjustment: {
            screens: {
              PortionAdjustmentScreen: "four",
            },
          },
        },
      },
      NotFound: "*",
    },
  },
};

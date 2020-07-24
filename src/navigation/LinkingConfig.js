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
          AddFood: {
            screens: {
              AddFoodScreen: "three",
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

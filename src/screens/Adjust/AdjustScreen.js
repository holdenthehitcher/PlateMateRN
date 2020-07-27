import * as React from "react";
import { StyleSheet, Text, View } from "react-native";

// get dailyCalories from ProfileRedux and display percentage page
// get array of objects for all addedToList === true
// calculate 30% dailyCalories and split up among calories for each food, returning the number of grams for each
// display grams in pie chart
// allow adjustment of grams && calories for each food item that renders in 1. pie chart 2. percentage of dailyCalories left on page.
// submit meal updates redux dailyCalories

export default function PortionAdjustmentScreen() {
  return (
    <View style={styles.container}>
      <View
        style={styles.separator}
        lightColor="#eee"
        darkColor="rgba(255,255,255,0.1)"
      />
      <View>{/* Add an updating pie chart*/}</View>
      <View>{/* Add the items with a portion controller on the side*/}</View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: "80%",
  },
});

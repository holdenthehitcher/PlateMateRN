import * as React from "react";
import { StyleSheet, Text, View } from "react-native";

import AddFoodModal from "./AddFoodModal";
import AllFoodsList from "./AllFoodsList";

export default function AddFoodScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Add Foods</Text>
      <View style={styles.separator} />
      <View style={{ flex: 1 }}>
        <AddFoodModal />
        <AllFoodsList />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    color: "black",
  },
  separator: {
    marginVertical: 20,
    height: 1,
    width: "80%",
  },
});

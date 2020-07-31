import * as React from "react";
import { StyleSheet, Text, View, ScrollView } from "react-native";

import AddFoodModal from "./AddFoodModal";
import AllFoodsList from "./AllFoodsList";

export default function AddFoodScreen() {
  return (
    <ScrollView>
      <View style={styles.headerContainer}>
        <Text style={styles.title}>Foods List</Text>
      </View>
      <View>
        <View style={styles.separator} />
        <View style={{ flex: 1 }}>
          <AddFoodModal />
          <AllFoodsList />
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  headerContainer: {
    flex: 1,
    alignItems: "center",
    marginTop: 20
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

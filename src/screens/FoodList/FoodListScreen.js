import * as React from "react";
import { StyleSheet, Text, View, ScrollView } from "react-native";

import AddFoodModal from "./AddFoodModal";
import AllFoodsList from "./AllFoodsList";

export default function AddFoodScreen(props) {
  const { navigation } = props;

  return (

      <View style={styles.container}>
        <View style={{ flex: 1 }}>
          <AddFoodModal navigation={navigation} />
          <AllFoodsList />
        </View>
      </View>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginBottom: 116
  },
  title: {
    fontSize: 33,
    fontWeight: "bold",
    color: "black",
  },
  separator: {
    marginVertical: 9,
    height: 1,
    width: "80%",
  },
});

import * as React from "react";
import { StyleSheet, Text, View } from "react-native";


export default function PortionAdjustmentScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Adjust your Portion Size</Text>
      <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
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

import * as React from "react";
import { StyleSheet, Text, View, Button } from "react-native";

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Home</Text>
      <View style={styles.separator} />
      <View>
        <Button title="Food List"></Button>
      </View>
      <View>
        <Button title="Portion Calculator"></Button>
      </View>
      <View>
        <Button title="Change Your Settings"></Button>
      </View>
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
    color: "black",
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: "80%",
  },
});

import * as React from "react";
import { StyleSheet, Text, View } from "react-native";

import CreateProfile from "./CreateProfile";

export default function SetupScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Create Your Profile</Text>
      <View style={styles.separator} />
      <CreateProfile path="/screens/SetupScreen.tsx" />
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

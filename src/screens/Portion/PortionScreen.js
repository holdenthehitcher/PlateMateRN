import * as React from "react";
import { StyleSheet, TouchableOpacity, Button, ScrollView, Text, View } from "react-native";
import ChosenFoods from "./ChosenFoods";

export default function PortionScreen() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Menu Portion Calculator</Text>
      <View style={styles.separator} />
      <View>
        <Text>Foods You're Having this Meal</Text>
        <ChosenFoods />
        <TouchableOpacity style={styles.helpLink}>
          <Button title="Add a Food" onPress={() => {}}></Button>
        </TouchableOpacity>
        <TouchableOpacity style={styles.helpLink}>
          <Button title="Portion Your Meal" onPress={() => {}}></Button>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
  },
  regularText: {
    color: "black",
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
  helpLink: {
    paddingVertical: 15,
  },
  helpLinkText: {
    textAlign: "center",
  },
  homeScreenFilename: {
    marginVertical: 7,
  },
  codeHighlightText: {
    color: "rgba(96,100,109, 0.8)",
  },
  codeHighlightContainer: {
    borderRadius: 3,
    paddingHorizontal: 4,
  },
});

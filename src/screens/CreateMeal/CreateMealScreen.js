import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  TouchableOpacity,
  Button,
  ScrollView,
  Text,
  View,
} from "react-native";

import ChooseNewFood from "./ChooseNewFood";
import MealFoodsList from "./MealFoodsList";

function CreateMealScreen(props) {
  const { navigation } = props;

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text h2 style={styles.title}>
        Menu Portion Calculator
      </Text>
      <View style={styles.separator} />
      <View>
        <View style={styles.helpLink}>
          <ChooseNewFood />
        </View>
        <Text>This Meal's Foods</Text>
        <MealFoodsList />
        <View style={styles.helpLink}>
          <Button
            title="Portion Your Meal"
            buttonStyle={styles.button}
            onPress={() => {
              navigation.navigate("PortionScreen");
            }}
          ></Button>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    marginTop: 15,
  },
  title: {
    fontSize: 33,
    fontWeight: "bold",
    color: "black",
  },
  regularText: {
    color: "black",
  },
  separator: {
    marginVertical: 9,
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
  button: {
    width: 300,
    height: 100,
  },
});

export default CreateMealScreen;

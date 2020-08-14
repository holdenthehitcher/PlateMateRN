import React, { useState, useEffect } from "react";
import { StyleSheet, ScrollView, Text, View } from "react-native";
import { Button } from "react-native-elements";

import ChooseNewFood from "./ChooseNewFood";
import MealFoodsList from "./MealFoodsList";

function CreateMealScreen(props) {
  const { navigation } = props;

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View>
        <View style={styles.helpLink}></View>
        <Text style={styles.title}>Chosen Foods</Text>
        <MealFoodsList />
        <ChooseNewFood />
        <View style={styles.helpLink}>
          <Button
            title="Portion Meal"
            buttonStyle={styles.button}
            titleStyle={styles.buttonTitle}
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
    backgroundColor: "#3eb100",
  },
  title: {
    fontSize: 35,
    fontWeight: "700",
    color: "#ffffff",
    alignSelf: "center",
    marginBottom: 18,
  },
  regularText: {
    color: "black",
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
    alignSelf: "center",
    width: 270,
    height: 110,
    backgroundColor: "#b80c00",
    marginVertical: 25,
  },
  buttonTitle: {
    fontSize: 22,
  },
});

export default CreateMealScreen;

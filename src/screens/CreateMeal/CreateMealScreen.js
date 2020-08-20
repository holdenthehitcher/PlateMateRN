import React, { useState, useEffect } from "react";
import { StyleSheet, ScrollView, Text, View, Platform, Animated } from "react-native";
import { Button } from "react-native-elements";

import ChooseNewFood from "./ChooseNewFood";
import MealFoodsList from "./MealFoodsList";

import withPressAnimated from "../../animations/withPressAnimated";
const AnimatedPressButton = withPressAnimated(Button);

function CreateMealScreen(props) {
  const { navigation } = props;

  const animateNavigate = (screen) => {
    setTimeout(() => navigation.navigate(screen), 1100);
  };

  return (
      <View style={{flex: 1, backgroundColor: "white"}}>
        <View style={styles.helpLink}></View>
        {/* <Text style={styles.title}>This Meal's Foods</Text> */}
        <ChooseNewFood />
        <MealFoodsList />
        <View style={styles.helpLink}>
          <AnimatedPressButton
            animation="swing"
            title="Portion Meal"
            buttonStyle={styles.button}
            titleStyle={styles.buttonTitle}
            onPress={() => {
              animateNavigate("PortionScreen");
            }}
          ></AnimatedPressButton>
        </View>
      </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    flex: 1
  },
  title: {
    fontSize: 37,
    fontWeight: "700",
    color: "#3bb143",
    alignSelf: "center",
    marginBottom: 20,
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
  button: {
    alignSelf: "center",
    width: 250,
    height: 90,
    backgroundColor: "#3bb143",
    marginVertical: 25,
  },
  buttonTitle: {
    fontSize: 22,
  },
});

export default CreateMealScreen;

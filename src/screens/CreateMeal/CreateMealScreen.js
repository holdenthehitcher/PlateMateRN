import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  ScrollView,
  Text,
  View,
  Platform,
  Animated,
} from "react-native";
import { Button } from "react-native-elements";
import { connect } from "react-redux";
import Toast from "react-native-simple-toast";

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
    <View style={{ flex: 1, backgroundColor: "white" }}>
      <View style={styles.helpLink}></View>
      <ChooseNewFood />
      <MealFoodsList />
      <View style={styles.helpLink}>
        <AnimatedPressButton
          animation="swing"
          title="Portion Your Meal"
          buttonStyle={styles.button}
          titleStyle={styles.buttonTitle}
          onPress={() => {
            props.foods.some((food) => food.addedToList === true)
              ? animateNavigate("PortionScreen")
              : Toast.show(`Please select at least one Food`);
          }}
        ></AnimatedPressButton>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    flex: 1,
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
    width: 220,
    height: 80,
    backgroundColor: "#b80c00",
    marginVertical: 25,
  },
  buttonTitle: {
    fontSize: 22,
  },
});

const mapStateToProps = (state) => {
  return {
    foods: state.foodsActions.allFoods,
  };
};

export default connect(mapStateToProps)(CreateMealScreen);

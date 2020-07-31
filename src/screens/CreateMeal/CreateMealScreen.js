import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  TouchableOpacity,
  Button,
  ScrollView,
  Text,
  View,
} from "react-native";
import { connect } from "react-redux";

import ChooseNewFood from "./ChooseNewFood";
import MealFoodsList from "./MealFoodsList";

function CreateMealScreen(props) {
  const { navigation } = props;
  const [chosenFoods, setChosenFoods] = useState(props.foods);

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Menu Portion Calculator</Text>
      <View style={styles.separator} />
      <View>
        <TouchableOpacity style={styles.helpLink}>
          <ChooseNewFood
            chosenFoods={chosenFoods}
            setChosenFoods={setChosenFoods}
          />
        </TouchableOpacity>
        <Text>This Meal's Foods</Text>
        <MealFoodsList
          chosenFoods={chosenFoods}
          setChosenFoods={setChosenFoods}
        />
        <TouchableOpacity style={styles.helpLink}>
          <Button
            title="Portion Your Meal"
            onPress={() => {
              navigation.navigate("PortionScreen"),
                {
                  chosenFoods: chosenFoods,
                };
            }}
          ></Button>
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
});

const mapStateToProps = (state) => {
  return {
    foods: state.foodsActions.allFoods,
  };
};

export default connect(mapStateToProps)(CreateMealScreen);

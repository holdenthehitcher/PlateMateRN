import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View } from "react-native";
import PortionPieChart from "./PortionPieChart";
import { connect } from "react-redux";
import PortionListItems from "./PortionListItems";
import { ScrollView } from "react-native-gesture-handler";

function PortionScreen(props) {
  const [chosenFoods, setChosenFoods] = useState(
    props.foods
      .filter((food) => food.addedToList === true)
      .map((item) => ({
        ...item,
        defaultAmount: item.amount,
      }))
      .map((item) => ({
        ...item,
        calorieMultiplier: item.calories / item.defaultAmount,
      }))
      .map((item) => ({
        ...item,
        totalCalories: item.amount * item.calorieMultiplier,
      }))
  );

  const [caloriesLeft, setCaloriesLeft] = useState(
    props.stats.caloriesLeft -
      chosenFoods.map((item) => item.totalCalories).reduce((a, e) => a + e)
  );
  const [percentCaloriesLeft, setPercentCaloriesLeft] = useState(
    Math.ceil((caloriesLeft / props.stats.dailyCalories) * 100)
  );

  const handleFoodCalories = (item, value) => {
    item.amount = value;
    item.totalCalories = item.calorieMultiplier * value;
    setChosenFoods([...chosenFoods], item);
    setCaloriesLeft(
      props.stats.caloriesLeft -
        chosenFoods.map((item) => item.totalCalories).reduce((a, e) => a + e)
    );
    setPercentCaloriesLeft(
      Math.ceil((caloriesLeft / props.stats.dailyCalories) * 100)
    );
  };

  return (
    <View style={styles.container}>
      <View style={styles.separator} />
      <Text>
        {caloriesLeft} {percentCaloriesLeft}%{" "}
      </Text>
      <View style={{ flex: 1 }}>
        <PortionPieChart chosenFoods={chosenFoods} />
        <PortionListItems
          chosenFoods={chosenFoods}
          handleFoodCalories={handleFoodCalories}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
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

const mapStateToProps = (state) => {
  return {
    foods: state.foodsActions.allFoods,
    stats: state.profileActions.stats,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    setProfile: (stats) => dispatch(setProfile(stats)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(PortionScreen);

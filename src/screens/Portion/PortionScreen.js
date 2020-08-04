import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View } from "react-native";
import PortionPieChart from "./PortionPieChart";
import { connect } from "react-redux";
import PortionListItems from "./PortionListItems";
import { ScrollView } from "react-native-gesture-handler";

// get dailyCalories from ProfileRedux and display percentage page
// get array of objects for all addedToList === true
// calculate 30% dailyCalories and split up among calories for each food, returning the number of grams for each
// display grams in pie chart
// allow adjustment of grams && calories for each food item that renders in 1. pie chart 2. percentage of dailyCalories left on page.
// submit meal updates redux dailyCalories

/* functions to be used in Portioning daily calories left  

  const handleSubmit = () => {
    const newCal = calculateDailyCalories(newStats);
    updateStats("dailyCalories", newCal);
    updateStats("caloriesLeft", newCal);
    console.log(newStats);
  };

  
  */

function PortionScreen(props) {
  const [chosenFoods, setChosenFoods] = useState(
    props.foods
      .filter((food) => food.addedToList === true)
      .map((item) => ({
        ...item,
        calorieMultiplier: item.calories / item.amount,
      }))
      .map((item) => ({
        ...item,
        totalCalories: item.amount * item.calorieMultiplier,
      }))
  );

  // const adjustFoods = (() => {
  //   setChosenFoods(
  //     [...chosenFoods]

  //
  //
  //
  //   );
  // })();

  console.log(chosenFoods);
  // const handleFoodCalories = (item, value) => {
  //   item.portionAmount = value;
  //   (item.totalCalories = item.calorieMultiplier * value), console.log(item);
  //   setChosenFoods([...chosenFoods], item);
  //   console.log(chosenFoods)
  // };

  return (
    <View style={styles.container}>
      <View style={styles.separator} />
      <View style={{ flex: 1 }}>
        <PortionPieChart chosenFoods={chosenFoods} />
        <PortionListItems
          chosenFoods={chosenFoods}
          // handleFoodCalories={handleFoodCalories}
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
  };
};

export default connect(mapStateToProps)(PortionScreen);

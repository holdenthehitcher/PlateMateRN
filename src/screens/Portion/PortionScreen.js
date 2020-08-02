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

  const calculateDailyCalories = (stats) => {
    const { weight, feet, inches, age, sex, stressFactor, goalWeight } = stats;
    const weightKg = weight / 2.2;
    const heightCm = feet * 30.48 + inches * 2.54;
    const caloricExpend =
      (10 * weightKg + 6.25 * heightCm - 5 * age + sex) * stressFactor;
    const calculatedCalories =
      weight > goalWeight ? caloricExpend - 500 : caloricExpend + 500;
    console.log(calculatedCalories);
    return calculatedCalories;
  };
  */

function PortionScreen(props) {
  const [chosenFoods, setChosenFoods] = useState(
    props.foods.filter((food) => food.addedToList === true)
  );
  chosenFoods
  .map((item) => (item.calorieMultiplier = item.calories / item.amount))
  .map((newItem) => newItem.portionAmount = newItem.amount)

  const handleFoodCalories = (item, value) => {
    item.portionAmount = value;
    (item.totalCalories = item.calorieMultiplier * value), console.log(item);
    setChosenFoods([...chosenFoods], item);
    console.log(chosenFoods)
  };

  return (
    <View style={styles.container}>
      <View
        style={styles.separator}
        lightColor="#eee"
        darkColor="rgba(255,255,255,0.1)"
      />
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
  };
};

export default connect(mapStateToProps)(PortionScreen);

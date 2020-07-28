import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View } from "react-native";
import PortionPieChart from "./PortionPieChart";
import { connect } from "react-redux";
import PortionList from "./PortionList";

// get dailyCalories from ProfileRedux and display percentage page
// get array of objects for all addedToList === true
// calculate 30% dailyCalories and split up among calories for each food, returning the number of grams for each
// display grams in pie chart
// allow adjustment of grams && calories for each food item that renders in 1. pie chart 2. percentage of dailyCalories left on page.
// submit meal updates redux dailyCalories

const PortionScreen = (props) => {
  const [chosenFoods, setChosenFoods] = useState(
    props.foods.filter((food) => food.addedToList === true)
  );

  useEffect(() => {
    setChosenFoods(chosenFoods);
  }, [chosenFoods]);

  const updateStats = (key, value) =>
    setStats({
      ...stats,
      [key]: value,
    });

  return (
    <View style={styles.container}>
      <View
        style={styles.separator}
        lightColor="#eee"
        darkColor="rgba(255,255,255,0.1)"
      />
      <View style={{ flex: 1 }}>
        <PortionPieChart
          chosenFoods={chosenFoods}
          setChosenFoods={setChosenFoods}
        />
        <PortionList
          chosenFoods={chosenFoods}
          setChosenFoods={setChosenFoods}
        />
      </View>
    </View>
  );
};

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

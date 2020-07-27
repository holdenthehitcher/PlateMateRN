import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View, Dimensions } from "react-native";
import { PieChart } from "react-native-chart-kit";
import { connect } from "react-redux";

// get dailyCalories from ProfileRedux and display percentage page
// get array of objects for all addedToList === true
// calculate 30% dailyCalories and split up among calories for each food, returning the number of grams for each
// display grams in pie chart
// allow adjustment of grams && calories for each food item that renders in 1. pie chart 2. percentage of dailyCalories left on page.
// submit meal updates redux dailyCalories
const chartConfig = {
  backgroundGradientFrom: "#1E2923",
  backgroundGradientFromOpacity: 0,
  backgroundGradientTo: "#08130D",
  backgroundGradientToOpacity: 0.5,
  color: (opacity = 1) => `rgba(26, 255, 146, ${opacity})`,
  strokeWidth: 2, // optional, default 3
  barPercentage: 0.5,
  useShadowColorFromDataset: false, // optional
};

const screenWidth = Dimensions.get("window").width;

const FoodPieChart = ({ chosenFoods }) => {
  const pieStyles = {
    legendFontSize: 15,
    legendFontColor: "#7F7F7F",
  };

  const pieSlices = chosenFoods.map((food) => ({ ...food, ...pieStyles }));
  (function createPieSlices(pieSlices) {
    const pieColors = ["red", "green", "blue", "yellow", "magenta", "cyan"];
    for (let i; i < pieSlices.length; i++) {
      pieSlices[i].color = pieColors[i];
      return pieSlices;
    }
    return pieSlices;
  })(pieSlices);
  console.log(pieSlices);

  return (
    <View>
      <PieChart
        data={pieSlices}
        width={screenWidth}
        height={220}
        chartConfig={chartConfig}
        accessor="calories"
        backgroundColor="transparent"
        paddingLeft="15"
        absolute
      />
    </View>
  );
};

const PortionScreen = (props) => {
  const [chosenFoods, setChosenFoods] = useState(
    props.foods.filter((food) => food.addedToList === true)
  );
  useEffect(() => {
    chosenFoods;
  }, [chosenFoods]);

  return (
    <View style={styles.container}>
      <View
        style={styles.separator}
        lightColor="#eee"
        darkColor="rgba(255,255,255,0.1)"
      />
      <FoodPieChart chosenFoods={chosenFoods} />
      <View>{/* Add the items with a portion controller on the side*/}</View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
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

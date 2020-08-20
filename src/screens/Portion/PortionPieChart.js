import React, { useState, useEffect } from "react";
import { Dimensions, View, Text } from "react-native";
import { PieChart } from "react-native-chart-kit";

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

export default PortionPieChart = ({ chosenFoods }) => {
  const pieStyles = {
    legendFontSize: 15,
    legendFontColor: "#7F7F7F",
  };
  const pieColors = [
    "#3bb143",
    "#008ecc",
    "#ff4440",
    "#ffa32f",
    "#ffe12b",
    "#63ba93",
    "#8481ae",
    "#a9d171",
    "#ff681f",
    "#e4a8e8",
    "#ffae42",
    "#7c36",
  ];

  const pieSlices = chosenFoods.map((food, i) => ({
    ...food,
    ...pieStyles,
    color: pieColors[i],
  }));

  return (
    <View style={{ alignSelf:"center"}}>
      <PieChart
        data={pieSlices}
        width={screenWidth}
        height={200}
        chartConfig={chartConfig}
        accessor="totalCalories"
        backgroundColor="white"
        marginHorizontal="20"
      />
    </View>
  );
};

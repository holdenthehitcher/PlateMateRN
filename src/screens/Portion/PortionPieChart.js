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
  const pieColors = ["red", "green", "blue", "yellow", "magenta", "cyan"];

  const pieSlices = chosenFoods.map((food, i) => ({
    ...food,
    ...pieStyles,
    color: pieColors[i],
  }));

  return (
    <View>
      <Text style={{ paddingLeft: 20 }}>
        Foods By Calorie Percentage
      </Text>
      <PieChart
        data={pieSlices}
        width={screenWidth}
        height={220}
        chartConfig={chartConfig}
        accessor="calories"
        backgroundColor="transparent"
        paddingLeft="20"
      />
    </View>
  );
};

import React, { useState, useEffect } from "react";
import Slider from "@react-native-community/slider";
import { View, Text } from "react-native";

export default function GoalWeightInput(props) {


  return (
    <View>
      <Text>What is your desired goal Weight?: {props.goalWeight} pounds</Text>
      <Slider
        step={2}
        style={{ width: 200, height: 40 }}
        minimumValue={100}
        maximumValue={300}
        onValueChange={(weight) => props.handleGoalWeight(weight)}
        value={props.goalWeight}
        minimumTrackTintColor="#FFFFFF"
        maximumTrackTintColor="#000000"
      />
    </View>
  );
}

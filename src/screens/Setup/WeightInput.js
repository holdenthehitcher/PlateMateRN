import React, { useState, useEffect } from "react";
import Slider from "@react-native-community/slider";
import { View, Text } from "react-native";

export default function WeightInput(props) {
  return (
    <View>
      <Text>What's your Current Weight: {props.weight} pounds</Text>
      <Slider
        step={2}
        style={{ width: 200, height: 40 }}
        minimumValue={80}
        maximumValue={350}
        onValueChange={(pounds) => props.handleWeight(pounds)}
        value={props.weight}
        minimumTrackTintColor="#FFFFFF"
        maximumTrackTintColor="#000000"
      />
    </View>
  );
}

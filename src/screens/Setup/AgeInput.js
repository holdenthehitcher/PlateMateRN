import React, { useState, useEffect } from "react";
import Slider from "@react-native-community/slider";
import { View, Text } from "react-native";

export default function AgeInput(props) {
  return (
    <View>
      <Text>What's your age?: {props.age} years young</Text>
      <Slider
        step={1}
        style={{ width: 200, height: 40 }}
        minimumValue={16}
        maximumValue={90}
        onValueChange={(years) => props.handleAge(years)}
        value={props.age}
        minimumTrackTintColor="#FFFFFF"
        maximumTrackTintColor="#000000"
      />
    </View>
  );
}

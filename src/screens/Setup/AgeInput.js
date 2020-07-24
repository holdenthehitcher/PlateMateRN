import React, { useState, useEffect } from "react";
import Slider from "@react-native-community/slider";
import { View, Text } from "react-native";

export default function AgeInput() {
  const [years, setYears] = useState(35);

  const formulaAge = years * -5;

  return (
    <View>
      <Text>What's your age?: {years} years young</Text>
      <Slider
        step={1}
        style={{ width: 200, height: 40 }}
        minimumValue={16}
        maximumValue={90}
        onValueChange={(years) => setYears(years)}
        value={years}
        minimumTrackTintColor="#FFFFFF"
        maximumTrackTintColor="#000000"
      />
    </View>
  );
}

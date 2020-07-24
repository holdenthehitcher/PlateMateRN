import React, { useState, useEffect } from "react";
import Slider from "@react-native-community/slider";
import { View, Text } from "react-native";

export default function WeightInput() {
  const [pounds, setPounds] = useState(200);
  const weightKg = pounds / 2.2;
  const formulaWeight = weightKg * 10;

  return (
    <View>
      <Text>What's your Current Weight: {pounds} pounds</Text>
      <Slider
        step={2}
        style={{ width: 200, height: 40 }}
        minimumValue={80}
        maximumValue={350}
        onValueChange={(pounds) => setPounds(pounds)}
        value={pounds}
        minimumTrackTintColor="#FFFFFF"
        maximumTrackTintColor="#000000"
      />
    </View>
  );
}

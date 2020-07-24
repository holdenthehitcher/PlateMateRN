import { Text, View } from "react-native";
import { Input } from "react-native-elements";

import React from "react";

export default function MealInput() {
  return (
    <View>
      <Input placeholder="Type of workout / calories burned" label="Have you done any exercise yet today?" />
      <Input placeholder="Breakfast, Lunch, Dinner" label="Which meal are you having?" />
      <Input placeholder="Journal your thoughts" label="How are you feeling?" />
    </View>
  );
}

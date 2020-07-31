import React, { useState, useEffect } from "react";
import { Slider } from "react-native-elements";
import { View, Text, StyleSheet } from "react-native";

export default function GoalWeightInput(props) {
  return (
    <View style={styles.labelSpacing}>
      <Text style={styles.label}>What is your desired Goal Weight?</Text>
      <Slider
        step={2}
        style={{ width: 200, height: 40 }}
        minimumValue={100}
        maximumValue={300}
        onValueChange={(weight) => props.handleGoalWeight(weight)}
        value={props.goalWeight}
        minimumTrackTintColor="#622a0f"
        maximumTrackTintColor="#622a0f"
        thumbTintColor="#997950"
      />
      <Text style={styles.amountLabel}>{props.goalWeight} pounds</Text>
    </View>
  );
}
const styles = StyleSheet.create({
  label: {
    fontSize: 17,
    fontWeight: "bold",
  },
  labelSpacing: {
    marginVertical: 10,
    alignItems: "center",
  },
  amountLabel: {
    fontSize: 15,
    fontWeight: "bold",
  },
});

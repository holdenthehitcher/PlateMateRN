import React, { useState, useEffect } from "react";
import { Slider } from "react-native-elements";
import { View, Text, StyleSheet } from "react-native";

export default function GoalWeightInput(props) {
  return (
    <View>
      <View style={styles.labelSpacing}>
        <Text style={styles.label}>
          Goal Weight: {props.goalWeight} pounds
        </Text>
      </View>
      <View style={styles.sliderSpacing}>
        <Slider
          step={5}
          style={{ width: 290, height: 40 }}
          minimumValue={100}
          maximumValue={300}
          onValueChange={(weight) => props.handleGoalWeight(weight)}
          value={props.goalWeight}
          minimumTrackTintColor="#1c2951"
          maximumTrackTintColor="#1c2951"
          thumbTintColor="#ef820d"
        />
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  label: {
    fontSize: 17,
    fontWeight: "bold",
    color: "#4d516d"
  },
  labelSpacing: {
    marginVertical: 10,
    alignItems: "center",
  },
  sliderSpacing: {
    alignItems: "center",
  },
  amountLabel: {
    fontSize: 15,
    fontWeight: "bold",
  },
});

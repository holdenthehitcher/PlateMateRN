import React, { useState, useEffect } from "react";
import { Slider } from "react-native-elements";
import { View, Text, StyleSheet } from "react-native";

export default function GoalWeightInput(props) {
  return (
    <View>
      <View style={styles.labelSpacing}>
        <Text style={styles.label}>
          My desired weight is {props.goalWeight} pounds
        </Text>
      </View>
      <View style={styles.sliderSpacing}>
        <Slider
          step={2}
          style={{ width: 200, height: 40 }}
          minimumValue={100}
          maximumValue={300}
          onValueChange={(weight) => props.handleGoalWeight(weight)}
          value={props.goalWeight}
          minimumTrackTintColor="#997950"
          maximumTrackTintColor="#997950"
          thumbTintColor="#622a0f"
        />
      </View>
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
  sliderSpacing: {
    alignItems: "center",
  },
  amountLabel: {
    fontSize: 15,
    fontWeight: "bold",
  },
});

import React, { useState, useEffect } from "react";
import { Slider } from "react-native-elements";
import { View, Text, StyleSheet } from "react-native";

export default function WeightInput(props) {
  return (
    <View>
      <View style={styles.labelSpacing}>
        <Text style={styles.label}>
          My current weight is {props.weight} pounds
        </Text>
      </View>
      <View style={styles.sliderSpacing}>
        <Slider
          step={2}
          style={{ width: 200, height: 40 }}
          minimumValue={80}
          maximumValue={350}
          onValueChange={(pounds) => props.handleWeight(pounds)}
          value={props.weight}
          minimumTrackTintColor="#622a0f"
          maximumTrackTintColor="#622a0f"
          thumbTintColor="#997950"
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
  amountLabel: {
    fontSize: 15,
    fontWeight: "bold",
  },
  sliderSpacing: {
    alignItems: "center",
  },
});

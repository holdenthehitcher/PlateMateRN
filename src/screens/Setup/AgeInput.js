import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet } from "react-native";
import { Slider } from "react-native-elements";

export default function AgeInput(props) {
  return (
    <View>
      <View style={styles.labelSpacing}>
        <Text style={styles.label}>My Age is {props.age} years</Text>
      </View>
      <View style={styles.sliderSpacing}>
        <Slider
          step={1}
          style={{ width: 200, height: 40 }}
          minimumValue={16}
          maximumValue={90}
          onValueChange={(years) => props.handleAge(years)}
          value={props.age}
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
    fontSize: 18,
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

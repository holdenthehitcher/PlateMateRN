import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet } from "react-native";
import { Slider } from "react-native-elements";

export default function AgeInput(props) {
  return (
    <View style={styles.labelSpacing}>
      <Text style={styles.label}>What's your age?</Text>
      <Slider
        step={1}
        style={{ width: 200, height: 40 }}
        minimumValue={16}
        maximumValue={90}
        onValueChange={(years) => props.handleAge(years)}
        value={props.age}
        minimumTrackTintColor="#622a0f"
        maximumTrackTintColor="#622a0f"
        thumbTintColor="#997950"
      />
      <Text style={styles.amountLabel}>{props.age} years young</Text>
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
  amountLabel: {
    fontSize: 15,
    fontWeight: "bold",
  },
});

import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet } from "react-native";
import { Slider } from "react-native-elements";

export default function AgeInput(props) {
  return (
    <View>
      <View style={styles.labelSpacing}>
        <Text style={styles.label}>Age: {props.age} years</Text>
      </View>
      <View style={styles.sliderSpacing}>
        <Slider
          step={1}
          style={{ width: 299, height: 40 }}
          minimumValue={16}
          maximumValue={80}
          onValueChange={(years) => props.handleAge(years)}
          value={props.age}
          minimumTrackTintColor="#1c2951"
          maximumTrackTintColor="#1c2951"
          thumbTintColor="#ef820d"
          trackStyle={styles.sliderTrack}
        />
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  label: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#4d516d",
  },
  labelSpacing: {
    marginVertical: 10,
    alignItems: "center",
  },
  sliderSpacing: {
    alignItems: "center",
    width: 400,
  },
  amountLabel: {
    fontSize: 15,
    fontWeight: "bold",
  },
  // sliderTrack: {
  //   width: 200
  // }
});

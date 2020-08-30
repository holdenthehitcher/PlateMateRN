import React from "react";
import { Slider } from "react-native-elements";
import { View, Text, StyleSheet } from "react-native";

export default function WeightInput(props) {
  return (
    <View>
      <View style={styles.labelSpacing}>
        <Text style={styles.label}>Weight: {props.weight} pounds</Text>
      </View>
      <View style={styles.sliderSpacing}>
        <Slider
          step={5}
          style={{ width: 290, height: 40 }}
          minimumValue={80}
          maximumValue={350}
          onValueChange={(pounds) => props.handleWeight(pounds)}
          value={props.weight}
          minimumTrackTintColor="#1c2951"
          maximumTrackTintColor="#1c2951"
          thumbTintColor="#ef820d"
          thumbTouchSize={{ width: 150, height: 150 }}
          allowTouchTrack={true}
        />
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  label: {
    fontSize: 17,
    fontWeight: "bold",
    color: "#4d516d",
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

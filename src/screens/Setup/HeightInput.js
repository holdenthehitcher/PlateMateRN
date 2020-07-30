import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  Modal,
  StyleSheet,
  Picker,
  Button,
  Slider,
} from "react-native";
import { Icon } from "react-native-elements";

const HeightInput = (props) => {
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <>
      <Button
        title="Enter Your Height"
        onPress={() => setModalVisible(!modalVisible)}
      ></Button>
      <Modal
        animated
        transparent
        visible={modalVisible}
        animationType="slide"
        onRequestClose={() => !modalVisible}
      >
        <View style={styles.container}>
          <View style={styles.pickerContainer}>
            <View style={styles.header}>
              <Text>"What's Your Exercise Level?"</Text>
              <Icon
                name="close"
                onPress={() => setModalVisible(!modalVisible)}
              />
            </View>
            <Text>{props.feet} Feet</Text>
            <Slider
              step={1}
              style={{ width: 200, height: 40 }}
              minimumValue={3}
              maximumValue={8}
              onValueChange={(feet) => props.handleFeet(feet)}
              value={props.feet}
              minimumTrackTintColor="#FFFFFF"
              maximumTrackTintColor="#000000"
            />
            <Text>{props.inches} Inches</Text>
            <Slider
              step={1}
              style={{ width: 200, height: 40 }}
              minimumValue={0}
              maximumValue={11}
              onValueChange={(inches) => props.handleInches(inches)}
              value={props.inches}
              minimumTrackTintColor="#FFFFFF"
              maximumTrackTintColor="#000000"
            />
          </View>
        </View>
      </Modal>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "flex-end",
    backgroundColor: "rgba(0,0,0,0.5)",
  },
  pickerContainer: {
    height: 200,
    width: "100%",
    backgroundColor: "white",
  },
  header: {
    justifyContent: "space-between",
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#eee",
  },
});

export default HeightInput;

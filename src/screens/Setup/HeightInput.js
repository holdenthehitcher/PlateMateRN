import React, { useState, useEffect } from "react";
import { View, Text, Modal, StyleSheet, Picker } from "react-native";
import { Icon, Button, Overlay, Slider } from "react-native-elements";

const HeightInput = (props) => {
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <>
      <Button
        buttonStyle={styles.button}
        raised
        title="Enter Your Height"
        onPress={() => setModalVisible(!modalVisible)}
      ></Button>
      <Overlay
        onBackdropPress={() => setModalVisible(!modalVisible)}
        isVisible={modalVisible}
        animationType="slide"
      >
        <View style={styles.overlayContainer}>
          <View style={styles.headerSpacing}>
            <Text style={styles.header}>"What's Your Height?"</Text>
          </View>
          <View style={styles.labelSpacing}>
            <Text style={styles.label}>{props.feet} Feet</Text>
          </View>
          <Slider
            step={1}
            style={{ width: 200, height: 40 }}
            minimumValue={3}
            maximumValue={8}
            onValueChange={(feet) => props.handleFeet(feet)}
            value={props.feet}
            minimumTrackTintColor="#4b3619"
            maximumTrackTintColor="#4b3619"
            thumbTintColor="#5c2c06"
            
          />
          <View style={styles.labelSpacing}>
            <Text style={styles.label}>{props.inches} Inches</Text>
          </View>
          <Slider
            step={1}
            style={{ width: 200, height: 40 }}
            minimumValue={0}
            maximumValue={11}
            onValueChange={(inches) => props.handleInches(inches)}
            value={props.inches}
            minimumTrackTintColor="#4b3619"
            maximumTrackTintColor="#4b3619"
            thumbTintColor="#5c2c06"
          />
        </View>
        <View style={styles.buttonSpacing}>
          <Button
            buttonStyle={styles.okButton}
            raised
            title="Ok"
            onPress={() => setModalVisible(!modalVisible)}
          />
        </View>
      </Overlay>
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
  overlayContainer: {
    height: 300,
    width: "100%",
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "center",
  },
  header: {
    fontSize: 25,
  },
  headerSpacing: {
    justifyContent: "space-between",
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 25,
  },
  label: {
    fontSize: 20,
  },
  labelSpacing: {
    marginVertical: 20,
  },
  button: {
    backgroundColor: "#997950",
    width: 220,
    height: 50,
  },
  okButton: {
    backgroundColor: "#4b3619",
  },
  buttonSpacing: {
    marginTop: 60,
  },
});

export default HeightInput;

import React, { useState } from "react";
import { View, Text, StyleSheet, Picker } from "react-native";
import { Button, Overlay } from "react-native-elements";

const PhysicalActivityInput = (props) => {
  const [modalVisible, setModalVisible] = useState(false);
  const items = [
    { label: "I Am an Extreme Exerciser", stressFactor: 1.9 },
    { label: "I Exercise Everyday", stressFactor: 1.725 },
    { label: "I Do Moderate Exercise", stressFactor: 1.55 },
    { label: "I Sometimes Exercise", stressFactor: 1.375 },
    { label: "I Rarely Exercise", stressFactor: 1.2 },
  ];

  return (
    <>
      <Button
        buttonStyle={styles.button}
        raised
        title={
          items.find((item) => item.stressFactor === props.exerciseValue).label
        }
        onPress={() => setModalVisible(!modalVisible)}
      ></Button>
      <Overlay
        isVisible={modalVisible}
        animationType="slide"
        onBackdropPress={() => setModalVisible(!modalVisible)}
      >
        <View style={styles.overlayContainer}>
          <View style={styles.headerSpacing}>
            <Text style={styles.header}>What's Your Exercise Level?</Text>
          </View>
          <View style={styles.buttonSpacing}>
            <Picker
              selectedValue={props.exerciseValue}
              onValueChange={(value) => props.handleStressFactor(value)}
            >
              {items.map(({ label, stressFactor }) => (
                <Picker.Item
                  key={stressFactor}
                  value={stressFactor}
                  label={label}
                />
              ))}
            </Picker>
          </View>
          <View style={styles.buttonSpacing}>
            <Button
              buttonStyle={styles.okButton}
              raised
              title="Ok"
              onPress={() => setModalVisible(!modalVisible)}
            />
          </View>
        </View>
      </Overlay>
    </>
  );
};
const styles = StyleSheet.create({
  header: {
    justifyContent: "space-between",
    flexDirection: "row",
    alignItems: "center",
    fontSize: 20,
  },
  button: {
    backgroundColor: "#ef820d",
    width: 240,
    height: 63,
    borderRadius: 25
  },
  okButton: {
    backgroundColor: "#008ecc",
    height: 70,
    borderRadius: 25
  },
  buttonSpacing: {
    marginTop: 55,
  },
});

export default PhysicalActivityInput;

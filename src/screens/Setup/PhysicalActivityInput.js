import React, { useState, useEffect } from "react";
import { View, Text, Modal, StyleSheet, Picker } from "react-native";
import { Icon, Button, Overlay } from "react-native-elements";

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
        title="Physical Activity Level"
        onPress={() => setModalVisible(!modalVisible)}
      ></Button>
      <Overlay
        isVisible={modalVisible}
        animationType="slide"
        onBackdropPress={() => setModalVisible(!modalVisible)}
      >
        <View style={styles.overlayContainer}>
          <View style={styles.headerSpacing}>
            <Text style={styles.header}>"What's Your Exercise Level?"</Text>
          </View>
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

  pickerContainer: {
    height: 200,
    width: "100%",
    backgroundColor: "white",
  },
  header: {
    justifyContent: "space-between",
    flexDirection: "row",
    alignItems: "center",
    fontSize: 20,
  },
  button: {
    backgroundColor: "#997950",
    width: 240,
    height: 60,
  },
});

export default PhysicalActivityInput;

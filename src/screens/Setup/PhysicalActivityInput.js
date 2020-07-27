import React, { useState, useEffect } from "react";
import { View, Text, Modal, StyleSheet, Picker, Button } from "react-native";
import { Icon } from "react-native-elements";

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
        title="Physical Activity Level"
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

export default PhysicalActivityInput;

import React, { useState, useEffect } from "react";
import { View, Text, Modal, StyleSheet, Picker, Button, Slider } from "react-native";
import { Icon } from "react-native-elements";

const AddFoodModal = (props) => {
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <>
      <Button title="Add A New Food" onPress={() => setModalVisible(!modalVisible)}></Button>
      <Modal animated transparent visible={modalVisible} animationType="slide" onRequestClose={() => !modalVisible}>
        <View style={styles.container}>
          <View style={styles.pickerContainer}>
            <View style={styles.header}>
              <Text>Add A New Food</Text>
              <Icon style={styles.text} name="close" onPress={() => setModalVisible(!modalVisible)} />
            </View>
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
    justifyContent: "center",
    backgroundColor: "rgba(0,0,0,0.5)",
  },
  pickerContainer: {
    height: "80%",
    width: "100%",
    backgroundColor: "white",
  },
  header: {
    justifyContent: "center",
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#eee",
  },
  text: {
    justifyContent: "flex-end",
    alignItems: "flex-end",
  },
});

export default AddFoodModal;

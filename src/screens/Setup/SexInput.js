import React, { useState, useEffect } from "react";
import { View, Picker, StyleSheet, Text } from "react-native";
import { Button, Overlay } from "react-native-elements";

const SexInput = (props) => {
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <View>
      <Button
        buttonStyle={styles.button}
        raised
        title={`I am a ${props.sex > 0 ? "male" : "female"}`}
        onPress={() => setModalVisible(!modalVisible)}
      />
      <Overlay
        isVisible={modalVisible}
        animationType="slide"
        onBackdropPress={() => setModalVisible(!modalVisible)}
      >
        <View style={styles.overlayContainer}>
          <View style={styles.headerSpacing}>
            <Text style={styles.header}>What's Your Biological Sex?</Text>
          </View>
          <Picker
            selectedValue={props.sex}
            onValueChange={(value) => props.handleSex(value)}
            style={styles.pickerText}
          >
            <Picker.Item label="Male" value={5} style={styles.pickerText} />
            <Picker.Item
              label="Female"
              value={-161}
              style={styles.pickerText}
            />
          </Picker>
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
    </View>
  );
};

const styles = StyleSheet.create({
  overlayContainer: {
    height: 300,
    width: "80%",
    backgroundColor: "white",
  },
  header: {
    justifyContent: "space-between",
    flexDirection: "row",
    alignItems: "center",
    fontSize: 25,
  },
  headerSpacing: {
    justifyContent: "space-between",
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 25,
  },
  button: {
    backgroundColor: "#ef820d",
    width: 200,
    height: 57,
  },
  okButton: {
    backgroundColor: "#008ecc",
    height: 70,
  },
  buttonSpacing: {
    marginTop: 60,
  },
  pickerText: {
    fontSize: 100,
  },
});

export default SexInput;

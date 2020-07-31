import React, { useState, useEffect } from "react";
import { View, Modal, Picker, StyleSheet, Text } from "react-native";
import { Button, Icon, Overlay } from "react-native-elements";

const SexInput = (props) => {
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <View>
      <Button
        buttonStyle={styles.button}
        raised
        title="Choose Your Sex"
        onPress={() => setModalVisible(!modalVisible)}
      />
      <Overlay
        isVisible={modalVisible}
        animationType="slide"
        onBackdropPress={() => setModalVisible(!modalVisible)}
      >
        <View style={styles.overlayContainer}>
          <View style={styles.headerSpacing}>
            <Text style={styles.header}>"What's Your Biological Sex?"</Text>
          </View>
          <Picker
            selectedValue={props.sex}
            onValueChange={(value) => props.handleSex(value)}
          >
            <Picker.Item label="Male" value={5} />
            <Picker.Item label="Female" value={-161} />
          </Picker>
        </View>
      </Overlay>
    </View>
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
  },
  button: {
    backgroundColor: "#4b3619",
    width: 220,
    height: 50,
  },
});

export default SexInput;

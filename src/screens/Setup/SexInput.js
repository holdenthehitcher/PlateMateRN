import React, { useState, useEffect } from "react";
import { Button, View, Modal, Picker, StyleSheet, Text } from "react-native";
import { Icon } from "react-native-elements";

const SexInput = () => {
  const [sex, setSex] = useState(5);
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <View>
      <Button title="Choose Your Sex" onPress={() => setModalVisible(!modalVisible)} />
      <Modal animated transparent visible={modalVisible} animationType="slide" onRequestClose={() => !modalVisible}>
        <View style={styles.container}>
          <View style={styles.pickerContainer}>
            <View style={styles.header}>
              <Text>"What's Your Sex"</Text>
              <Icon name="close" onPress={() => setModalVisible(!modalVisible)} />
            </View>
            <Picker selectedValue={sex} onValueChange={(value) => setSex(value)}>
              <Picker.Item label="Male" value={5} />
              <Picker.Item label="Female" value={-161} />
            </Picker>
          </View>
        </View>
      </Modal>
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
    backgroundColor: "#eee",
  },
});

export default SexInput;

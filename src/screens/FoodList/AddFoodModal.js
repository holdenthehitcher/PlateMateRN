import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  Modal,
  StyleSheet,
  Picker,
  Button,
  TextInput,
} from "react-native";
import { Icon } from "react-native-elements";
import { connect } from "react-redux";
import { addFood } from "../../redux/FoodsListRedux";

const AddFoodModal = (props) => {
  const [modalVisible, setModalVisible] = useState(false);
  const [amountModalVisible, setAmountModalVisible] = useState(false);
  const [foodValues, setFoodValues] = useState({});

  const updateFoodValues = (key, value) =>
    setFoodValues({
      ...foodValues,
      [key]: value,
    });

  const items = [
    { label: "Cups", amountType: "Cups" },
    { label: "Teaspoons", amountType: "tsp." },
    { label: "Tablespoons", amountType: "Tbsp." },
    { label: "Ounces", amountType: "oz." },
    { label: "Pounds", amountType: "Lbs." },
    { label: "Fluid Ounces", amountType: "fl. oz." },
    { label: "Grams", amountType: "g" },
    { label: "KiloGrams", amountType: "Kg" },
    { label: "Milliliters", amountType: "mL" },
    { label: "Liters", amountType: "L" },
  ];

  return (
    <>
      <Button
        title="Add A New Food"
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
              <Text>Add A New Food</Text>
              <Icon
                style={styles.text}
                name="close"
                onPress={() => setModalVisible(!modalVisible)}
              />
            </View>
            <View>
              <TextInput
                placeholder="Food Name"
                style={styles.foodInput}
                onChangeText={(value) => updateFoodValues("name", value)}
              />
              <TextInput
                placeholder="Calories"
                style={styles.foodInput}
                onChangeText={(value) => updateFoodValues("calories", value)}
              />
              <TextInput
                placeholder="Portion Amount"
                style={styles.foodInput}
                onChangeText={(value) => updateFoodValues("amount", value)}
              />
              <Button
                title="Portion Amount Type"
                onPress={() => setAmountModalVisible(!amountModalVisible)}
              ></Button>
              <Modal
                animated
                transparent
                visible={amountModalVisible}
                animationType="slide"
                onRequestClose={() => !amountModalVisible}
              >
                <View style={styles.container}>
                  <View style={styles.pickerContainer}>
                    <View style={styles.header}>
                      <Text>"What Unit of measurement is this Food?"</Text>
                      <Icon
                        name="close"
                        onPress={() =>
                          setAmountModalVisible(!amountModalVisible)
                        }
                      />
                    </View>
                    <Picker
                      selectedValue={foodValues.amountType}
                      onValueChange={(value) =>
                        updateFoodValues("amountType", value)
                      }
                    >
                      {items.map(({ label, amountType }) => (
                        <Picker.Item
                          key={amountType}
                          value={amountType}
                          label={label}
                        />
                      ))}
                    </Picker>
                  </View>
                </View>
              </Modal>
              <Button
                title="Submit Food"
                onPress={() => {
                  props.add(foodValues);
                  setModalVisible(!modalVisible);
                  console.log(foodValues);
                }}
              />
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

const mapStateToProps = (state) => {
  return {
    foods: state.foodsActions.allFoods,
  };
};

// maps actions
const mapDispatchToProps = (dispatch) => {
  return {
    add: (food) => dispatch(addFood(food)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(AddFoodModal);

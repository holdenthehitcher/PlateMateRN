import React, { useState, useEffect } from "react";
import { View, Text, Modal, StyleSheet, Picker } from "react-native";
import { Icon, Overlay, Input, Button } from "react-native-elements";
import { connect } from "react-redux";
import { addFood } from "../../redux/FoodsListRedux";

const AddFoodModal = (props) => {
  const [modalVisible, setModalVisible] = useState(false);
  const [foodValues, setFoodValues] = useState({
    name: "****",
    calories: 0,
    amount: 0,
    amountType: "Cups",
    addedToList: false,
  });

  const updateFoodValues = (key, value) =>
    setFoodValues({
      ...foodValues,
      [key]: value,
    });

  const resetFoodValues = () => {
    setFoodValues({
      name: "****",
      calories: 0,
      amount: 0,
      amountType: "Cups",
      addedToList: false,
    });
  };

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
      <Overlay
        isVisible={modalVisible}
        animationType="slide"
        onBackdropPress={() => setModalVisible(!modalVisible)}
      >
        <View style={styles.overlayContainer}>
          <View style={styles.headerSpacing}>
            <Text style={styles.header}>Add A New Food</Text>
          </View>
          <View style={styles.inputSpacing}>
            <Input
              placeholder="Food Name"
              style={styles.foodInput}
              onChangeText={(value) => updateFoodValues("name", value)}
            />
          </View>
          <View style={styles.inputSpacing}>
            <Input
              keyboardType="decimal-pad"
              placeholder="Calories"
              style={styles.foodInput}
              onChangeText={(value) => updateFoodValues("calories", +value)}
            />
          </View>
          <View style={styles.inputSpacing}>
            <Input
              keyboardType="decimal-pad"
              placeholder="Portion Amount"
              style={styles.foodInput}
              onChangeText={(value) => updateFoodValues("amount", +value)}
            />
          </View>
          <View style={styles.inputSpacing}>
            <Picker
              selectedValue={foodValues.amountType}
              onValueChange={(value) => updateFoodValues("amountType", value)}
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
          <View style={styles.buttonSpacingDouble}>
            <Button
              buttonStyle={styles.button}
              title="Submit Food"
              onPress={() => {
                props.add(foodValues);
                props.foods;
                setModalVisible(!modalVisible);
                resetFoodValues();
              }}
            />
          </View>
          <View style={styles.buttonSpacing}>
            <Button
              title="Cancel"
              onPress={() => {
                setModalVisible(!modalVisible);
                resetFoodValues();
              }}
            />
          </View>
        </View>
      </Overlay>
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
  overlayContainer: {
    height: 530,
    width: 350,
    justifyContent: "center",
  },
  headerSpacing: {
    alignItems: "center",
    marginBottom: 16,
  },
  header: {
    fontSize: 22,
  },
  inputSpacing: { marginTop: 10 },
  text: {
    justifyContent: "flex-end",
    alignItems: "flex-end",
  },
  buttonSpacingDouble: {
    marginTop: 35,
  },
  buttonSpacing: {
    marginTop: 15,
  },
  button: {
    backgroundColor: "#997950",
    width: "100%",
    height: 50,
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

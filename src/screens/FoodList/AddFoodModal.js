import React, { useState } from "react";
import Toast from "react-native-simple-toast";
import { View, Text, StyleSheet, Picker, Alert } from "react-native";
import { Overlay, Input, Button } from "react-native-elements";
import { connect } from "react-redux";
import { addFood } from "../../redux/FoodsListRedux";
import { AppLoading } from "expo";
import {
  useFonts,
  Mada_200ExtraLight,
  Mada_300Light,
  Mada_400Regular,
  Mada_500Medium,
  Mada_600SemiBold,
  Mada_700Bold,
  Mada_900Black,
} from "@expo-google-fonts/mada";

const AddFoodModal = (props) => {
  let [fontsLoaded] = useFonts({
    Mada_200ExtraLight,
    Mada_300Light,
    Mada_400Regular,
    Mada_500Medium,
    Mada_600SemiBold,
    Mada_700Bold,
    Mada_900Black,
  });

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

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  return (
    <>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
          marginVertical: 18,
        }}
      >
        <View style={{ margin: 10 }}>
          <Button
            title="Create New Food"
            onPress={() => setModalVisible(!modalVisible)}
            buttonStyle={styles.addButton}
            titleStyle={styles.addButtonTitle}
            raised
          ></Button>
        </View>
      </View>
      <Overlay
        isVisible={modalVisible}
        animationType="slide"
        onBackdropPress={() => setModalVisible(!modalVisible)}
      >
        <View style={styles.overlayContainer}>
          <View style={styles.headerSpacing}>
            <Text style={styles.header}>Create A New Food</Text>
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
              buttonStyle={styles.submitButton}
              titleStyle={styles.submitButtonTitle}
              title="Submit Food"
              onPress={() => {
                {
                  Alert.alert(
                    `Create Food?`,
                    `Add ${foodValues.name} at ${foodValues.calories} calories for every ${foodValues.amount} ${foodValues.amountType}?`,
                    [
                      {
                        text: "No Thanks",
                        onPress: () => {
                          Toast.show(`Cancelled Adding a Food`);
                        },
                        style: "cancel",
                      },
                      {
                        text: "Add Food",
                        onPress: () => {
                          props.add(foodValues);
                          setModalVisible(!modalVisible);
                          resetFoodValues();
                          Toast.show(`${foodValues.name} has been added`);
                        },
                      },
                    ]
                  );
                }
              }}
            />
          </View>
          <View style={styles.buttonSpacing}>
            <Button
              buttonStyle={styles.cancelButton}
              titleStyle={styles.cancelButtonTitle}
              title="Cancel"
              onPress={() => {
                setModalVisible(!modalVisible);
                resetFoodValues();
                Toast.show(`Cancelled Adding a Food`);
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
    height: 590,
    width: 350,
    justifyContent: "center",
  },
  headerSpacing: {
    alignItems: "center",
    marginBottom: 16,
  },
  header: {
    fontFamily: "Mada_700Bold",
    fontSize: 34,
    color: "#3bb143",
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
    marginTop: 20,
  },
  addButton: {
    backgroundColor: "#ef490d",
    width: "100%",
    height: 85,
    width: 220,
  },
  addButtonTitle: {
    fontFamily: "",
    fontSize: 24,
  },
  portionButton: {
    height: 80,
    width: 150,
    backgroundColor: "#ef490d",
  },
  portionButtonTitle: {
    fontFamily: "Mada_600SemiBold",
    fontSize: 23,
  },
  submitButton: {
    backgroundColor: "#3bb143",
    height: 68,
    width: 320,
    alignSelf: "center",
  },
  submitButtonTitle: {
    fontSize: 22,
  },
  cancelButton: {
    backgroundColor: "#b13d3b",
    height: 65,
    width: 310,
    alignSelf: "center",
    marginBottom: 15,
  },
  cancelButtonTitle: {
    fontSize: 21,
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

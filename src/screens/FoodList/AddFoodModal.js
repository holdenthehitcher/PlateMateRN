import React, { useState, useEffect } from "react";
import Toast from "react-native-simple-toast";
import {
  View,
  Text,
  StyleSheet,
  Picker,
  Alert,
  ActivityIndicator,
} from "react-native";
import { Overlay, Input, Button } from "react-native-elements";
import { connect } from "react-redux";
import { addFood } from "../../redux/FoodsListRedux";
import { AppLoading } from "expo";
import { Formik, Form, FormikProps } from "formik";
import * as yup from "yup";
import withPressAnimated from "../../animations/withPressAnimated";
const AnimatedPressButton = withPressAnimated(Button);

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
    calories: 5,
    amount: 5,
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
      calories: 5,
      amount: 5,
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

  const animateButton = (fun, param) => {
    setTimeout(() => fun(param), 1100);
  };

  const validationSchema = yup.object().shape({
    name: yup
      .string()
      .label("Food Name")
      .required()
      .min(1, "Seems a bit short...")
      .max(15, "Name must be fewer than 15 characters."),
    calories: yup
      .number()
      .label("Calories")
      .required()
      .min(1, "Your food must be at least one calorie")
      .max(999, "You food must be less than 1000 calories"),
    amount: yup
      .number()
      .label("Food Amount")
      .required()
      .min(0.001, "Amount must be greater than 0")
      .max(399, "Amount must be less than 400"),
  });

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
          <AnimatedPressButton
            animation="bounce"
            title="Create A New Food"
            onPress={() => animateButton(setModalVisible, !modalVisible)}
            buttonStyle={styles.addButton}
            titleStyle={styles.addButtonTitle}
            raised
          />
        </View>
      </View>
      <Overlay
        isVisible={modalVisible}
        animationType="slide"
        onBackdropPress={() => setModalVisible(!modalVisible)}
      >
        <Formik
          initialValues={{
            name: "",
            calories: 0,
            amount: 0,
            amountType: "Cups",
            addedToList: false,
          }}
          validationSchema={validationSchema}
        >
          {({
            touched,
            errors,
            handleChange,
            handleBlur,
            dirty,
            values,
            isValid,
            setFieldValue,
          }) => (
            <View style={styles.overlayContainer}>
              <View style={styles.headerSpacing}>
                <Text style={styles.header}>Create A New Food</Text>
              </View>
              <View style={styles.inputSpacing}>
                <Input
                  placeholder="Food Name"
                  style={styles.foodInput}
                  onChangeText={(value) => setFieldValue("name", value)}
                  onBlur={handleBlur("name")}
                />
                <Text style={styles.errorText}>
                  {touched.name && errors.name}
                </Text>
              </View>
              <View style={styles.inputSpacing}>
                <Input
                  keyboardType="decimal-pad"
                  placeholder="Portion Amount"
                  style={styles.foodInput}
                  onChangeText={(value) => setFieldValue("amount", +value)}
                  onBlur={handleBlur("amount")}
                />
                <Text style={styles.errorText}>
                  {touched.amount && errors.amount}
                </Text>
              </View>
              <View style={{ marginBottom: 20, marginTop: 10 }}>
                <Picker
                  selectedValue={values.amountType}
                  onValueChange={(value) =>
                    setFieldValue("amountType", value)
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
              <View style={styles.inputSpacing}>
                <Input
                  keyboardType="decimal-pad"
                  placeholder="Calories"
                  style={styles.foodInput}
                  onChangeText={(value) => setFieldValue("calories", +value)}
                  onBlur={handleBlur("calories")}
                />
                <Text style={styles.errorText}>
                  {touched.calories && errors.calories}
                </Text>
              </View>

              {/* {isSubmitting ? (
                <ActivityIndicator />
              ) : (
                <> */}
              <View style={styles.buttonSpacingDouble}>
                <Button
                  buttonStyle={styles.submitButton}
                  titleStyle={styles.submitButtonTitle}
                  title="Submit Food"
                  disabled={!(isValid && dirty)}
                  onPress={() => {
                    {
                      Alert.alert(
                        `Create Food?`,
                        `Add ${values.name} at ${values.calories} calories for every ${values.amount} ${values.amountType}?`,
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
                              props.add(values);
                              setModalVisible(!modalVisible);
                              resetFoodValues();
                              Toast.show(`${values.name} has been added`);
                              console.log(props.foods);
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
                    Toast.show(`No food added`);
                  }}
                />
              </View>
            </View>
          )}
        </Formik>
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
    height: 650,
    width: 350,
    justifyContent: "center",
  },
  headerSpacing: {
    alignItems: "center",
    marginBottom: 20,
  },
  header: {
    fontFamily: "Mada_700Bold",
    fontSize: 32,
    color: "#3bb143",
    textAlign: "center",
  },
  // inputSpacing: { marginVertical: 5 },
  text: {
    justifyContent: "flex-end",
    alignItems: "flex-end",
  },
  errorText: {
    color: "red",
    textAlign: "center",
    marginBottom: 30,
    marginTop: -30,
    marginRight: 20,
  },
  buttonSpacingDouble: {
    marginTop: 10,
  },
  buttonSpacing: {
    marginTop: 15,
  },
  addButton: {
    backgroundColor: "#008ecc",
    width: "100%",
    height: 60,
    width: 180,
  },
  addButtonTitle: {
    fontFamily: "",
    fontSize: 17,
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

import React, { useState } from "react";
import { StyleSheet, Text, View, Alert } from "react-native";
import PortionPieChart from "./PortionPieChart";
import PortionListItems from "./PortionListItems";
import { Button } from "react-native-elements";
import { connect } from "react-redux";
import { setProfileCaloriesLeft } from "../../redux/ProfileStatsRedux";
import Toast from "react-native-simple-toast";
import { AppLoading } from "expo";
import { useFonts, Sniglet_400Regular } from "@expo-google-fonts/sniglet";

function PortionScreen(props) {
  const { navigation } = props;

  const [chosenFoods, setChosenFoods] = useState(
    props.foods
      .filter((food) => food.addedToList === true)
      .map((item) => ({
        ...item,
        defaultAmount: item.amount,
      }))
      .map((item) => ({
        ...item,
        calorieMultiplier: item.calories / item.defaultAmount,
      }))
      .map((item) => ({
        ...item,
        totalCalories: item.amount * item.calorieMultiplier,
      }))
  );
  const [mealCalories, setMealCalories] = useState(
    Math.ceil(
      chosenFoods.map((item) => item.totalCalories).reduce((a, e) => a + e)
    )
  );
  const [mealCaloriePercent, setMealCaloriePercent] = useState(
    Math.ceil(
      (mealCalories / props.stats.dailyCalories) * 100
    )
  );

  const [caloriesLeft, setCaloriesLeft] = useState(
    props.stats.caloriesLeft - mealCalories
  );
  const [percentCaloriesLeft, setPercentCaloriesLeft] = useState(
    Math.ceil((caloriesLeft / props.stats.dailyCalories) * 100)
  );

  const handleFoodCalories = (item, value) => {
    item.amount = value;
    item.totalCalories = item.calorieMultiplier * value;
    setChosenFoods([...chosenFoods], item);
    setMealCalories(
      Math.ceil(
        chosenFoods.map((item) => item.totalCalories).reduce((a, e) => a + e)
      )
    );
    setCaloriesLeft(
      Math.ceil(
        props.stats.caloriesLeft - mealCalories
      )
    );
    setPercentCaloriesLeft(
      Math.ceil((caloriesLeft / props.stats.dailyCalories) * 100)
    );
    setMealCaloriePercent(
      Math.ceil(
        (mealCalories / props.stats.dailyCalories) * 100
      )
    );
  };

  let [fontsLoaded] = useFonts({
    Sniglet_400Regular,
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }


  return (
    <View style={styles.container}>
      <PortionPieChart chosenFoods={chosenFoods} />
      <View style={styles.caloriesFlex}>
        <View
          flexDirection="row"
          style={{ alignItems: "center", justifyContent: "center", marginVertical: 8}}
        >
          <View>
            <Text style={{ fontSize: 15, fontFamily: "Sniglet_400Regular" }}>Total Meal Calories: </Text>
          </View>
          <View>
            <Text style={{ fontSize: 20, fontFamily: "Sniglet_400Regular"}}> {mealCalories} cal. /</Text>
          </View>
          <View>
            <Text style={{ fontSize: 19, fontFamily: "Sniglet_400Regular", marginRight: 5}}> {mealCaloriePercent}% daily</Text>
          </View>
        </View>
      </View>
      <PortionListItems
        chosenFoods={chosenFoods}
        handleFoodCalories={handleFoodCalories}
      />

      <View
        flexDirection="row"
        style={{
          alignItems: "center",
          justifyContent: "center",
          marginVertical: 7,
        }}
      >
        <View style={{ marginLeft: 10 }}>
          <Text style={{ fontSize: 13, fontFamily: "Sniglet_400Regular" }}>Calories Left Today:</Text>
          <View
            flexDirection="row"
            style={{
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Text style={{ fontSize: 21, fontFamily: "Sniglet_400Regular" }}>
              {caloriesLeft} / {percentCaloriesLeft}%{" "}
            </Text>
          </View>
        </View>
        <View>
          <Button
            buttonStyle={styles.button}
            title="Finished"
            titleStyle={styles.buttonTitle}
            onPress={() => {
              {
                Alert.alert(
                  "Subtract These Calories?",
                  `You will have ${percentCaloriesLeft}% left for today`,
                  [
                    {
                      text: "Let's Eat!",
                      onPress: () => {
                        props.setProfileCaloriesLeft(caloriesLeft);
                        console.log(props.stats);
                        {
                          Alert.alert(
                            "Success!",
                            `Your meal has been added. You have ${caloriesLeft} calories left for today`,
                            [
                              {
                                text: "Home",
                                onPress: () => {
                                  navigation.navigate("HomeScreen");
                                  Toast.show(
                                    `You have ${caloriesLeft} calories left today`
                                  );
                                },
                              },
                            ],
                            { onDismiss: () => {} }
                          );
                        }
                      },
                    },
                    {
                      text: "Wait",
                      onPress: () => "Cancel Pressed",
                      style: "cancel",
                    },
                  ],
                  { onDismiss: () => {} }
                );
              }
            }}
          />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  caloriesFlex: {
    marginLeft: 10,
    marginTop: 5,
  },
  button: {
    backgroundColor: "#3bb143",
    marginLeft: 40,
    width: 183,
    borderRadius: 20
  },
  buttonTitle: {
    fontSize: 20,
  },
});

const mapStateToProps = (state) => {
  return {
    foods: state.foodsActions.allFoods,
    stats: state.profileActions.stats,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    setProfileCaloriesLeft: (caloriesLeft) =>
      dispatch(setProfileCaloriesLeft(caloriesLeft)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(PortionScreen);

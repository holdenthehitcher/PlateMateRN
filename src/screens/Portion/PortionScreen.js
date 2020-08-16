import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View, Alert } from "react-native";
import PortionPieChart from "./PortionPieChart";
import PortionListItems from "./PortionListItems";
import { Button } from "react-native-elements";
import { connect } from "react-redux";
import { setProfileCaloriesLeft } from "../../redux/ProfileStatsRedux";
import Toast from "react-native-simple-toast";

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
      // (chosenFoods.map((item) => item.totalCalories).reduce((a, e) => a + e)
      (mealCalories / props.stats.dailyCalories) * 100
    )
  );

  const [caloriesLeft, setCaloriesLeft] = useState(
    props.stats.caloriesLeft - mealCalories
    // chosenFoods.map((item) => item.totalCalories).reduce((a, e) => a + e)
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
        // chosenFoods.map((item) => item.totalCalories).reduce((a, e) => a + e)
      )
    );
    setPercentCaloriesLeft(
      Math.ceil((caloriesLeft / props.stats.dailyCalories) * 100)
    );
    setMealCaloriePercent(
      Math.ceil(
        // (chosenFoods.map((item) => item.totalCalories).reduce((a, e) => a + e) /
        (mealCalories / props.stats.dailyCalories) * 100
      )
    );
  };

  return (
    <View style={styles.container}>
      <View style={{ flex: 1 }}>
        <PortionPieChart chosenFoods={chosenFoods} />
        <View style={styles.caloriesFlex}>
          <View
            flexDirection="row"
            style={{ alignItems: "center", justifyContent: "center" }}
          >
            <View>
              <Text style={{ fontSize: 16 }}>This Meal:</Text>
            </View>
            <View>
              <Text style={{ fontSize: 26 }}> {mealCalories} cal. </Text>
            </View>
            <View>
              <Text style={{ fontSize: 17 }}>Total:</Text>
            </View>
            <View>
              <Text style={{ fontSize: 26 }}> {mealCaloriePercent}% </Text>
            </View>
          </View>
          <View
            flexDirection="row"
            style={{
              alignItems: "center",
              justifyContent: "center",
              marginVertical: 7,
            }}
          >
            <View>
              <Text style={{ fontSize: 16 }}>Calories Left:</Text>
            </View>
            <View>
              <Text style={{ fontSize: 19 }}> {caloriesLeft} cal. /</Text>
            </View>
            <View>
              <Text style={{ fontSize: 19 }}> {percentCaloriesLeft} %</Text>
            </View>
          </View>
        </View>
        <PortionListItems
          chosenFoods={chosenFoods}
          handleFoodCalories={handleFoodCalories}
        />
      </View>
      <View>
        <Button
          buttonStyle={styles.button}
          raised
          title="Submit Your Meal"
          titleStyle={styles.buttonTitle}
          onPress={() => {
            {
              Alert.alert(
                "All Finished?",
                `You will have ${percentCaloriesLeft}% of your calories left for today`,
                [
                  {
                    text: "Not Yet",
                    onPress: () => "Cancel Pressed",
                    style: "cancel",
                  },
                  {
                    text: "Submit Meal",
                    onPress: () => {
                      props.setProfileCaloriesLeft(caloriesLeft);
                      console.log(props.stats);
                      {
                        Alert.alert(
                          "Success!",
                          `Your meal has been successfully added. You have ${caloriesLeft} calories left for today`,
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
                ],
                { onDismiss: () => {} }
              );
            }
          }}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: "80%",
  },
  caloriesFlex: {
    marginLeft: 10,
    marginBottom: 5,
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

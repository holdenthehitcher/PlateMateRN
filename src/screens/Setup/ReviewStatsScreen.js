import React, { useState } from "react";
import {
  StyleSheet,
  TouchableOpacity,
  Button,
  Text,
  View,
  Alert,
} from "react-native";
import { connect } from "react-redux";
import { setProfile } from "../../redux/ProfileStatsRedux";

function ReviewStatsScreen(props) {
  const { newStats } = props.route.params;
  const {
    age,
    weight,
    goalWeight,
    sex,
    feet,
    inches,
    dailyCalories,
  } = newStats;

  const gender = sex > 0 ? "man" : "female";

  return (
    <>
      <Text>
        Thank you for filling out the body statistics form. Currently, you are a{" "}
        {age} year old {gender} standing at {feet}' {inches}" tall, with a
        currently weighing {weight} pounds with a goal weight {goalWeight}{" "}
        pounds.{" "}
      </Text>
      <Text>
        If all is correct, please press the button below to begin portioning
        your foods with PlateMate
      </Text>
      <Button
        title="Confirm Personal Profile"
        onPress={() => {
          {
            Alert.alert(
              "Finished?",
              `The plan is to eat ${dailyCalories} Kcal. a day`,
              [
                {
                  text: "Go Back",
                  onPress: () => console.log("Cancel Pressed"),
                  style: "cancel",
                },
                { text: "Ready", onPress: () => {
                  props.setProfile(newStats);
                  console.log(newStats);
                }},
              ],
              { onDismiss: () => {} }
            );
          }
        }}
      />
    </>
  );
}

const mapStateToProps = (state) => {
  return {
    stats: state.profileActions.stats,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    setProfile: (stats) => dispatch(setProfile(stats)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ReviewStatsScreen);

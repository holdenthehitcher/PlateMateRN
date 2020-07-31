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

import HeightInput from "./HeightInput";
import AgeInput from "./AgeInput";
import SexInput from "./SexInput";
import WeightInput from "./WeightInput";
import PhysicalActivityInput from "./PhysicalActivityInput";
import GoalWeightInput from "./GoalWeightInput";

function SetupProfileScreen(props) {
  const [newStats, setNewStats] = useState(props.stats);

  const updateStats = (key, value) =>
    setNewStats({
      ...newStats,
      [key]: value,
    });

  const handleSubmit = () => {
    const newCal = calculateDailyCalories(newStats);
    updateStats("dailyCalories", newCal);
    updateStats("caloriesLeft", newCal);
    console.log(newDailyCalories);
    console.log(newStats);
  };

  const calculateDailyCalories = (stats) => {
    const { weight, feet, inches, age, sex, stressFactor, goalWeight } = stats;
    const weightKg = weight / 2.2;
    const heightCm = feet * 30.48 + inches * 2.54;
    const caloricExpend =
      (10 * weightKg + 6.25 * heightCm - 5 * age + sex) * stressFactor;
    const calculatedCalories =
      weight > goalWeight ? caloricExpend - 500 : caloricExpend + 500;
    console.log(calculatedCalories);
    return calculatedCalories;
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Create Your Profile</Text>
      <View style={styles.separator} />

      <View>
        <View>
          <Text>Enter Your Starting Stats:</Text>
          <HeightInput
            feet={newStats.feet}
            inches={newStats.inches}
            handleFeet={(value) => updateStats("feet", value)}
            handleInches={(value) => updateStats("inches", value)}
          />
          <AgeInput
            age={newStats.age}
            handleAge={(value) => updateStats("age", value)}
          />
          <SexInput
            sex={newStats.sex}
            handleSex={(value) => updateStats("sex", value)}
          />
          <WeightInput
            weight={newStats.weight}
            handleWeight={(value) => updateStats("weight", value)}
          />
          <PhysicalActivityInput
            exerciseValue={newStats.stressFactor}
            handleStressFactor={(value) => updateStats("stressFactor", value)}
          />
        </View>
        <GoalWeightInput
          goalWeight={newStats.goalWeight}
          handleGoalWeight={(value) => updateStats("goalWeight", value)}
        />
      </View>

      <View style={styles.helpContainer}>
        <TouchableOpacity style={styles.helpLink}>
          <Button
            title="Review Your Stats"
            onPress={() => {
              {
                Alert.alert(
                  "Finished?",
                  `Double-check before you begin portioning your food with PlateMate`,
                  [
                    {
                      text: "Go Back",
                      onPress: () => console.log("Cancel Pressed"),
                      style: "cancel",
                    },
                    { text: "Ready", onPress: () => {
                      props.setProfile(newStats);
                      console.log(props);
                    }},
                  ],
                  { onDismiss: () => {} }
                );
              }
              }
            }
          />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
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

  developmentModeText: {
    marginBottom: 20,
    fontSize: 14,
    lineHeight: 19,
    textAlign: "center",
  },
  contentContainer: {
    paddingTop: 30,
  },
  welcomeContainer: {
    alignItems: "center",
    marginTop: 10,
    marginBottom: 20,
  },
  welcomeImage: {
    width: 100,
    height: 80,
    resizeMode: "contain",
    marginTop: 3,
    marginLeft: -10,
  },
  getStartedContainer: {
    alignItems: "center",
    marginHorizontal: 50,
  },
  homeScreenFilename: {
    marginVertical: 7,
  },
  codeHighlightText: {
    color: "rgba(96,100,109, 0.8)",
  },
  codeHighlightContainer: {
    borderRadius: 3,
    paddingHorizontal: 4,
  },
  getStartedText: {
    fontSize: 17,
    lineHeight: 24,
    textAlign: "center",
  },
  helpContainer: {
    marginTop: 15,
    marginHorizontal: 20,
    alignItems: "center",
  },
  helpLink: {
    paddingVertical: 15,
  },
  helpLinkText: {
    textAlign: "center",
  },
});

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

export default connect(mapStateToProps, mapDispatchToProps)(SetupProfileScreen);

import React, { useState } from "react";
import { StyleSheet, TouchableOpacity, Button, Text, View } from "react-native";
import { connect } from "react-redux";

import HeightInput from "./HeightInput";
import AgeInput from "./AgeInput";
import SexInput from "./SexInput";
import WeightInput from "./WeightInput";
import PhysicalActivityInput from "./PhysicalActivityInput";
import GoalWeightInput from "./GoalWeightInput";
import { setProfile } from "../../redux/ProfileStatsRedux";

const CreateProfile = (props) => {
  const [stats, setStats] = useState(props.stats);
  const [newDailyCalories, setNewDailyCalories] = useState(
    props.stats.dailyCalories
  );

  const updateStats = (key, value) =>
    setStats({
      ...stats,
      [key]: value,
    });

  const calculateDailyCalories = (stats) => {
    const { weight, feet, inches, age, sex, stressFactor, goalWeight } = stats;
    const weightKg = weight / 2.2;
    const heightCm = feet * 30.48 + inches * 2.54;
    const caloricExpend =
      (10 * weightKg + 6.25 * heightCm - 5 * age + sex) * stressFactor;
    const dailyCalories =
      weight > goalWeight ? caloricExpend - 500 : caloricExpend + 500;
    return setNewDailyCalories(dailyCalories);
  };

  return (
    <View>
      <View style={[styles.codeHighlightContainer, styles.homeScreenFilename]}>
        <Text>Enter Your Starting Stats:</Text>
        <HeightInput
          feet={stats.feet}
          inches={stats.inches}
          handleFeet={(value) => updateStats("feet", value)}
          handleInches={(value) => updateStats("inches", value)}
        />
        <AgeInput
          age={stats.age}
          handleAge={(value) => updateStats("age", value)}
        />
        <SexInput
          sex={stats.sex}
          handleSex={(value) => updateStats("sex", value)}
        />
        <WeightInput
          weight={stats.weight}
          handleWeight={(value) => updateStats("weight", value)}
        />
        <PhysicalActivityInput
          exerciseValue={stats.stressFactor}
          handleStressFactor={(value) => updateStats("stressFactor", value)}
        />
      </View>
      <GoalWeightInput
        goalWeight={stats.goalWeight}
        handleGoalWeight={(value) => updateStats("goalWeight", value)}
      />
      <View style={styles.helpContainer}>
        <TouchableOpacity style={styles.helpLink}>
          <Button
            title="Create Profile"
            onPress={() => {
              {
                calculateDailyCalories(stats);
                updateStats("dailyCalories", newDailyCalories);
                updateStats("caloriesLeft", newDailyCalories);
                props.setProfile(stats);
              }
            }}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
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

export default connect(mapStateToProps, mapDispatchToProps)(CreateProfile);

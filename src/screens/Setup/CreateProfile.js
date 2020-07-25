import React, { useState } from "react";
import { StyleSheet, TouchableOpacity, Button, Text, View } from "react-native";
import { connect } from "react-redux";

import HeightInput from "./HeightInput";
import AgeInput from "./AgeInput";
import SexInput from "./SexInput";
import WeightInput from "./WeightInput";
import PhysicalActivityInput from "./PhysicalActivityInput";
import GoalWeightInput from "./GoalWeightInput";

const mapStateToProps = (state) => {
  return {
    stats: state.stats,
  };
};

const mapDispatchToProps = {
  editProfile: (formulaHeight, formulaAge, sex, formulaWeight, stressFactor, goalWeight, dailyCalories) =>
    editProfile(formulaHeight, formulaAge, sex, formulaWeight, stressFactor, goalWeight, dailyCalories),
};

function CreateProfile() {
  /*handleProfileUpdate(props) {
    const {goalWeight} = props;
  }
  */

  // State Values for Child Input Components
  const [feet, setFeet] = useState(5);
  const [inches, setInches] = useState(9);
  const handleFeet = (feet) => setFeet(feet);
  const handleInches = (inches) => setInches(inches);
  const height = feet * 30.48 + inches * 2.54;
  const formulaHeight = 6.25 * height;

  const [age, setAge] = useState(35);
  const handleAge = (years) => setAge(years);
  const formulaAge = age * -5;

  const [sex, setSex] = useState(5);
  const handleSex = (sex) => setSex(sex);

  const [weight, setWeight] = useState(200);
  const handleWeight = (pounds) => setWeight(pounds);
  const weightKg = weight / 2.2;
  const formulaWeight = weightKg * 10;

  const [exerciseValue, setExerciseValue] = useState(1.2);
  const handleStressFactor = (value) => setExerciseValue(value);

  const [goalWeight, setGoalWeight] = useState(150);
  const handleGoalWeight = (weight) => setGoalWeight(weight);

  const dailyCalories = 0;

  return (
    <View>
      <View style={[styles.codeHighlightContainer, styles.homeScreenFilename]}>
        <Text>Enter Your Starting Stats:</Text>
        <HeightInput feet={feet} inches={inches} handleFeet={handleFeet} handleInches={handleInches} />
        <AgeInput age={age} handleAge={handleAge} />
        <SexInput sex={sex} handleSex={handleSex} />
        <WeightInput weight={weight} handleWeight={handleWeight} />
        <PhysicalActivityInput exerciseValue={exerciseValue} handleStressFactor={handleStressFactor} />
      </View>
      <GoalWeightInput goalWeight={goalWeight} handleGoalWeight={handleGoalWeight} />
      <View style={styles.helpContainer}>
        <TouchableOpacity style={styles.helpLink}>
          <Button title="Create Profile" onPress={() => {}} />
        </TouchableOpacity>
      </View>
    </View>
  );
}

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

export default connect(mapStateToProps, mapDispatchToProps)(CreateProfile);

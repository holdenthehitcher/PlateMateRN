import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  TouchableOpacity,
  Text,
  View,
  Alert,
  ScrollView,
} from "react-native";
import { Button } from "react-native-elements";
import { connect } from "react-redux";
import { setProfile } from "../../redux/ProfileStatsRedux";

import HeightInput from "./HeightInput";
import AgeInput from "./AgeInput";
import SexInput from "./SexInput";
import WeightInput from "./WeightInput";
import PhysicalActivityInput from "./PhysicalActivityInput";
import GoalWeightInput from "./GoalWeightInput";

function SetupProfileScreen(props) {
  const { navigation } = props;
  const [newStats, setNewStats] = useState(props.stats);
  // const [newDailyCalories, setNewDailyCalories] = useState(2000);

  const updateStats = (key, value) =>
    setNewStats({
      ...newStats,
      [key]: value,
    });

  // useEffect(() => {
  //   const {
  //     weight,
  //     feet,
  //     inches,
  //     age,
  //     sex,
  //     stressFactor,
  //     goalWeight,
  //   } = newStats;
  //   const weightKg = weight / 2.2;
  //   const heightCm = feet * 30.48 + inches * 2.54;
  //   const caloricExpend =
  //     (10 * weightKg + 6.25 * heightCm - 5 * age + sex) * stressFactor;
  //   const newCalories =
  //     weight > goalWeight ? caloricExpend - 500 : caloricExpend + 500;
  //   setNewDailyCalories(newCalories);
  //   (newDailyCalories);
  // }, [newStats]);

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.titleSpacing}>
        <Text style={styles.title}>Manage Your Stats</Text>
      </View>
      <View>
        <View style={styles.inputSpacing}>
          <HeightInput
            feet={newStats.feet}
            inches={newStats.inches}
            handleFeet={(value) => updateStats("feet", value)}
            handleInches={(value) => updateStats("inches", value)}
          />
        </View>
        <View style={styles.inputSpacing}>
          <AgeInput
            age={newStats.age}
            handleAge={(value) => updateStats("age", value)}
          />
        </View>
        <View style={styles.inputSpacing}>
          <SexInput
            sex={newStats.sex}
            handleSex={(value) => updateStats("sex", value)}
          />
        </View>
        <View style={styles.inputSpacing}>
          <WeightInput
            weight={newStats.weight}
            handleWeight={(value) => updateStats("weight", value)}
          />
        </View>
        <View style={styles.inputSpacing}>
          <PhysicalActivityInput
            exerciseValue={newStats.stressFactor}
            handleStressFactor={(value) => updateStats("stressFactor", value)}
          />
        </View>
        <View style={styles.inputSpacing}>
          <GoalWeightInput
            goalWeight={newStats.goalWeight}
            handleGoalWeight={(value) => updateStats("goalWeight", value)}
          />
        </View>
      </View>

      <View style={styles.helpContainer}>
        <TouchableOpacity style={styles.helpLink}>
          <Button
            buttonStyle={styles.button}
            raised
            title="Review Your Stats"
            titleStyle={styles.buttonTitle}
            onPress={() => {
              // updateStats("dailyCalories", newDailyCalories);
              props.stats;
              {
                Alert.alert(
                  "All Finished?",
                  `You can always come back to change your stats later if needed`,
                  [
                    {
                      text: "Go Back",
                      onPress: () => "Cancel Pressed",
                      style: "cancel",
                    },
                    {
                      text: "Ready",
                      onPress: () => {
                        props.setProfile(newStats);
                        props.stats;

                        // // navigation.navigate("HomeScreen");
                        {
                          Alert.alert(
                            "",
                            `Your stats have been updated successfully`,
                            [
                              {
                                text: "Close",
                                onPress: () => {
                                  navigation.navigate("HomeScreen");
                                  props.stats;
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
          <View style={styles.separator} />
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
  },
  titleSpacing: {
    marginVertical: 23,
  },
  title: {
    fontSize: 25,
    fontWeight: "bold",
    color: "#5c2c06",
  },
  inputSpacing: {
    marginVertical: 13,
    justifyContent: "center",
    alignItems: "center",
  },
  button: {
    backgroundColor: "#4b3619",
    width: 280,
    height: 85,
    borderColor: "#997950",
  },
  buttonTitle: {
    fontSize: 23,
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

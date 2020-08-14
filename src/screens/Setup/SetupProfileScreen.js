import React, { useState } from "react";
import { StyleSheet, TouchableOpacity, Text, View, Alert } from "react-native";
import { Button } from "react-native-elements";
import { connect } from "react-redux";
import { setProfile } from "../../redux/ProfileStatsRedux";
import Toast from "react-native-simple-toast";
import {
  useFonts,
  OpenSans_300Light,
  OpenSans_300Light_Italic,
  OpenSans_400Regular,
  OpenSans_400Regular_Italic,
  OpenSans_600SemiBold,
  OpenSans_600SemiBold_Italic,
  OpenSans_700Bold,
  OpenSans_700Bold_Italic,
  OpenSans_800ExtraBold,
  OpenSans_800ExtraBold_Italic,
} from "@expo-google-fonts/open-sans";

import HeightInput from "./HeightInput";
import AgeInput from "./AgeInput";
import SexInput from "./SexInput";
import WeightInput from "./WeightInput";
import PhysicalActivityInput from "./PhysicalActivityInput";
import GoalWeightInput from "./GoalWeightInput";

function SetupProfileScreen(props) {
  const { navigation } = props;
  let [fontsLoaded] = useFonts({
    OpenSans_300Light,
    OpenSans_300Light_Italic,
    OpenSans_400Regular,
    OpenSans_400Regular_Italic,
    OpenSans_600SemiBold,
    OpenSans_600SemiBold_Italic,
    OpenSans_700Bold,
    OpenSans_700Bold_Italic,
    OpenSans_800ExtraBold,
    OpenSans_800ExtraBold_Italic,
  });

  const [newStats, setNewStats] = useState(props.stats);

  const updateStats = (key, value) =>
    setNewStats({
      ...newStats,
      [key]: value,
    });

  return (
    <View style={styles.container}>
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
          <SexInput
            sex={newStats.sex}
            handleSex={(value) => updateStats("sex", value)}
          />
        </View>
        <View style={styles.inputSpacing}>
          <PhysicalActivityInput
            exerciseValue={newStats.stressFactor}
            handleStressFactor={(value) => updateStats("stressFactor", value)}
          />
        </View>
        <View style={styles.inputSpacing}>
          <AgeInput
            age={newStats.age}
            handleAge={(value) => updateStats("age", value)}
          />
        </View>
        <View style={styles.inputSpacing}>
          <WeightInput
            weight={newStats.weight}
            handleWeight={(value) => updateStats("weight", value)}
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
            title="Update All"
            titleStyle={styles.buttonTitle}
            onPress={() => {
              {
                Alert.alert(
                  "Update Your Stats?",
                  `You can change them later if needed`,
                  [
                    {
                      text: "Go Back",
                      onPress: () => {
                        "Cancel Pressed", Toast.show("Profile not updated");
                      },
                      style: "cancel",
                    },
                    {
                      text: "Finished",
                      onPress: () => {
                        props.setProfile(newStats);
                        Toast.show("Your Profile has been sucessfully Updated");
                        navigation.navigate("HomeScreen");
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
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
  },
  titleSpacing: {
    marginVertical: 21,
  },
  inputSpacing: {
    marginTop: 21,
    justifyContent: "center",
    alignItems: "center",
  },
  button: {
    backgroundColor: "#008ecc",
    width: 280,
    height: 85,
  },
  buttonTitle: {
    fontSize: 26,
    fontFamily: "OpenSans_800ExtraBold",
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
    color: "#008ecc",
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

import React, { useEffect, useState } from "react";
import {
  StyleSheet,
  View,
  Image,
  Alert,
  Text,
  TouchableOpacity,
} from "react-native";
import { Button, Icon } from "react-native-elements";
import { connect } from "react-redux";
import { setProfileCaloriesLeft } from "../../redux/ProfileStatsRedux";
import * as Animatable from "react-native-animatable";
import Toast from "react-native-simple-toast";
import withPressAnimated from "../../animations/withPressAnimated";
const AnimatedPressButton = withPressAnimated(Button);
const AnimatedView = withPressAnimated(TouchableOpacity);

function HomeScreen(props) {
  const { navigation } = props;

  const animateNavigate = (screen) => {
    setTimeout(() => navigation.navigate(screen), 1100);
  };

  return (
    <View style={styles.container}>
      {/* <View style={styles.buttonMargin}>
        <AnimatedPressButton
          buttonStyle={{ backgroundColor: "#d21f3c", width: 290, height: 65 }}
          title="How to Use PlateMate"
          animation="wobble"
          mode="contained"
          onPress={() => {
            animateNavigate("InstructionsScreen");
          }}
          iconRight={true}
          icon={
            <Icon
              name="arrow-circle-right"
              type="font-awesome"
              color={"white"}
              size={35}
              style={{ marginLeft: 12 }}
            />
          }
        ></AnimatedPressButton>
      </View>
      <View>
        <AnimatedPressButton
          buttonStyle={{ backgroundColor: "#008ecc", width: 260, height: 72 }}
          title="Update Profile"
          onPress={() => animateNavigate("SetupProfileScreen")}
          raised
          animation="rubberBand"
          icon={
            <Icon
              name="odnoklassniki"
              type="font-awesome"
              color={"white"}
              size={39}
              style={{ marginRight: 15 }}
            />
          }
          iconContainerStyle={styles.iconContainerStyle}
        ></AnimatedPressButton>
      </View> */}
      <View>
        <AnimatedView
          onPress={() => {
            animateNavigate("InstructionsScreen");
          }}
          animation="wobble"
        >
          <Image
            source={require("../../../assets/images/PlateMate2.png")}
            style={{ width: 210, height: 200, marginBottom: 12 }}
          />
        </AnimatedView>
      </View>
      <View>
        <Text style={styles.text}>You have</Text>
        <Text style={styles.caloriesText}>{props.stats.caloriesLeft} calories ({props.stats.caloriesLeft/props.stats.dailyCalories * 100}%)</Text>
        <Text style={styles.text}>left for today</Text>
      </View>
      <View style={styles.buttonMargin}>
        <AnimatedPressButton
          buttonStyle={{ backgroundColor: "#eb9605", width: 250, height: 75 }}
          title="List of Foods"
          onPress={() => animateNavigate("FoodListScreen")}
          animation="fadeInRight"
          raised
          iconRight={true}
          icon={
            <Icon
              name="list"
              type="font-awesome"
              color={"white"}
              size={35}
              style={{ marginLeft: 17 }}
            />
          }
        ></AnimatedPressButton>
      </View>
      <View style={styles.buttonMargin}>
        <AnimatedPressButton
          buttonStyle={{ backgroundColor: "#4cbb17", width: 300, height: 90 }}
          title="Portion Your Meal"
          animation="bounceInDown"
          onPress={() => animateNavigate("CreateMealScreen")}
          raised
          icon={
            <Icon
              name="calculator"
              type="font-awesome"
              color={"white"}
              size={39}
              style={{ marginRight: 17 }}
            />
          }
        ></AnimatedPressButton>
      </View>
      <View style={styles.buttonMargin}>
        <AnimatedPressButton
          buttonStyle={styles.resetButton}
          raised
          animation="pulse"
          title="Reset Your Daily Calories"
          titleStyle={styles.resetButtonTitle}
          onPress={() => {
            {
              Alert.alert(
                "Starting a new Day?",
                `You will start off with ${props.stats.dailyCalories} calories today`,
                [
                  {
                    text: "Not Yet",
                    onPress: () => "Cancel Pressed",
                    style: "cancel",
                  },
                  {
                    text: "Reset Calories",
                    onPress: () => {
                      props.setProfileCaloriesLeft(props.stats.dailyCalories);
                      {
                        Alert.alert(
                          "Done!",
                          `Your daily calories have been reset successfully`,
                          [
                            {
                              text: "Go Home",
                              onPress: () => {
                                {
                                  navigation.navigate("HomeScreen");
                                  Toast.show(
                                    `Your New Daily Calories have been set`
                                  );
                                }
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
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "black",
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: "80%",
  },
  text: {
    fontSize: 16,
    textAlign: "center",
    marginVertical: 8,
  },
  caloriesText: {
    fontSize: 23,
    textAlign: "center",
  },
  buttonMargin: {
    marginVertical: 10,
  },
  button: {
    backgroundColor: "#4cbb17",
  },
  iconContainerStyle: {
    margin: 5,
  },
  resetButton: {
    height: 70,
    backgroundColor: "#008ecc",
  },
  resetButtonTitle: {},
});

const mapStateToProps = (state) => {
  return {
    stats: state.profileActions.stats,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    setProfileCaloriesLeft: (caloriesLeft) =>
      dispatch(setProfileCaloriesLeft(caloriesLeft)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(HomeScreen);

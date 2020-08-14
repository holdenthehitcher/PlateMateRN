import * as React from "react";
import { StyleSheet, View, Image, Alert } from "react-native";
import { Button, Icon } from "react-native-elements";
import { connect } from "react-redux";
import { setProfileCaloriesLeft } from "../../redux/ProfileStatsRedux";
import Toast from "react-native-simple-toast";

function HomeScreen(props) {
  const { navigation } = props;

  return (
    <View style={styles.container}>
      <View style={styles.buttonMargin}>
        <Button
          buttonStyle={{ backgroundColor: "#d21f3c", width: 290, height: 65 }}
          title="How to Use PlateMate"
          onPress={() => navigation.navigate("InstructionsScreen")}
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
        ></Button>
      </View>
      <View style={styles.buttonMargin}>
        <Button
          buttonStyle={{ backgroundColor: "#008ecc", width: 260, height: 72 }}
          title="Update Profile"
          onPress={() => navigation.navigate("SetupProfileScreen")}
          raised
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
        ></Button>
      </View>
      <View>
        <Image
          source={require("../../../assets/images/PlateMate2.png")}
          style={{ width: 210, height: 200, marginVertical: 12 }}
        />
      </View>
      <View style={styles.buttonMargin}>
        <Button
          buttonStyle={{ backgroundColor: "#eb9605", width: 250, height: 75 }}
          title="All Foods"
          onPress={() => navigation.navigate("FoodListScreen")}
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
        ></Button>
      </View>
      <View style={styles.buttonMargin}>
        <Button
          buttonStyle={{ backgroundColor: "#4cbb17", width: 300, height: 90 }}
          title="Portion Meal"
          onPress={() => navigation.navigate("CreateMealScreen")}
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
        ></Button>
      </View>
      <View style={styles.buttonMargin}>
        <Button
          buttonStyle={styles.resetButton}
          raised
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
    backgroundColor: "#fcd12a",
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

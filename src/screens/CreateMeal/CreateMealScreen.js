import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  TouchableOpacity,
  Button,
  ScrollView,
  Text,
  View,
} from "react-native";
import { connect } from "react-redux";
import { setProfile } from "../../redux/ProfileStatsRedux";

import ChooseNewFood from "./ChooseNewFood";
import MealFoodsList from "./MealFoodsList";

function CreateMealScreen(props) {
  const { navigation } = props;
  const [newStats, setNewStats] = useState(props.stats);

  const updateStats = (key, value) =>
    setNewStats({
      ...newStats,
      [key]: value,
    });



  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Menu Portion Calculator</Text>
      <View style={styles.separator} />
      <View>
        <TouchableOpacity style={styles.helpLink}>
          <ChooseNewFood />
        </TouchableOpacity>
        <Text>This Meal's Foods</Text>
        <MealFoodsList />
        <TouchableOpacity style={styles.helpLink}>
          <Button
            title="Portion Your Meal"
            onPress={() => {
              navigation.navigate("PortionScreen");
              console.log(props.stats)
            }}
          ></Button>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
  },
  regularText: {
    color: "black",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    color: "black",
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: "80%",
  },
  helpLink: {
    paddingVertical: 15,
  },
  helpLinkText: {
    textAlign: "center",
  },
  homeScreenFilename: {
    marginVertical: 7,
  },
  codeHighlightText: {
    color: "rgba(96,100,109, 0.8)",
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

export default connect(mapStateToProps, mapDispatchToProps)(CreateMealScreen);

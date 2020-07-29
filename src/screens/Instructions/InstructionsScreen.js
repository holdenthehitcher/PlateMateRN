import React from "react";
import { StyleSheet, Text, View, Button, ScrollView } from "react-native";

export default function InstructionsScreen(props) {
  const { navigation } = props;

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text>Welcome To PlateMate! An app to help you control your weight!</Text>
      <Text>
        PlateMate takes all the guesswork out of your meal portions. With
        PlateMate, you can now easily: 1. Make a list of foods with their
        calorie content for any amount you regularly use. Whether it's a cup of
        rice or 100 grams of pasta, PlateMate allows you to customize the foods
        you eat the most to be added to our meal calculator. 2. Create a Meal
        Simply add the foods from your Food List to each meal and press Portion!
        3. Adjust your Portion Size You will be shown a pie chart of the foods
        you chose corresponding to the amount of calories for each food At this
        point, you can adjust the amount of each food you want to have for your
        meal. Then, press Finished and it will subtract the amount from your
        Total Daily Calories! 4. Reset your calories each day with the Reset
        Button located on the Home Screen. 5. You can adjust your Profile Info
        at anytime from the Home Menu.
      </Text>
      <View>
        <Button
          title="Get Started with PlateMate"
          onPress={() => navigation.navigate("SetupScreen")}
        />
      </View>
    </ScrollView>
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
});

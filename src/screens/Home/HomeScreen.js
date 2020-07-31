import * as React from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import { Button } from "react-native-elements";

export default function HomeScreen(props) {
  const { navigation } = props;

  return (
    <View style={styles.container}>
      <View style={styles.buttonMargin}>
        <Button
          buttonStyle={{ backgroundColor: "#d21f3c", width: 260, height: 65 }}
          title="How to Use PlateMate"
          onPress={() => navigation.navigate("InstructionsScreen")}
        ></Button>
      </View>
      <View>
        <Image
          source={require("../../../assets/PlateMateLogo3.png")}
          style={{ width: 210, height: 200, marginVertical: 12 }}
        />
      </View>
      <View style={styles.buttonMargin}>
        <Button
          buttonStyle={{ backgroundColor: "#008ecc", width: 280, height: 80 }}
          title="Change Your Settings"
          onPress={() => navigation.navigate("SetupProfileScreen")}
          raised
        ></Button>
      </View>
      <View style={styles.buttonMargin}>
        <Button
          buttonStyle={{ backgroundColor: "#3bb143", width: 300, height: 80 }}
          title="Portion Calculator"
          onPress={() => navigation.navigate("CreateMealScreen")}
          raised
        ></Button>
      </View>
      <View style={styles.buttonMargin}>
        <Button
          buttonStyle={{ backgroundColor: "#4cbb17", width: 290, height: 80 }}
          title="Food List"
          onPress={() => navigation.navigate("FoodListScreen")}
          raised
        ></Button>
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
});

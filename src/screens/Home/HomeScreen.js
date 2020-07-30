import * as React from "react";
import { StyleSheet, Text, View, Button, Image } from "react-native";

export default function HomeScreen(props) {
  const { navigation } = props;

  return (
    <View style={styles.container}>
      <Image
        source={require("../../../assets/PlateMateLogo3.png")}
        style={{ width: 210, height: 200 }}
      />
      <View style={styles.separator} />
      <View>
        <Button
          title="How to Use PlateMate"
          onPress={() => navigation.navigate("InstructionsScreen")}
        ></Button>
      </View>
      <View>
        <Button
          title="Food List"
          onPress={() => navigation.navigate("FoodListScreen")}
        ></Button>
      </View>
      <View>
        <Button
          title="Portion Calculator"
          onPress={() => navigation.navigate("CreateMealScreen")}
        ></Button>
      </View>
      <View>
        <Button
          title="Change Your Settings"
          onPress={() => navigation.navigate("SetupProfileScreen")}
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
});

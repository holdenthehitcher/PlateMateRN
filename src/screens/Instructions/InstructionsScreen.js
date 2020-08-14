import React from "react";
import { StyleSheet, View, ScrollView } from "react-native";
import { Text, ListItem, Button } from "react-native-elements";
import { useFonts, Capriola_400Regular } from "@expo-google-fonts/capriola";
import { MaterialCommunityIcons } from "@expo/vector-icons";

export default function InstructionsScreen(props) {
  const { navigation } = props;
  let [fontsLoaded] = useFonts({
    Capriola_400Regular,
  });

  if (!fontsLoaded) {
    return null;
  }

  const instructionsList = [
    {
      name: "",
      title: "Add Foods",
      subtitle: `Create your own Food List`,
      icon: "playlist-plus",
    },
    {
      name: "",
      title: "Customize Meals",
      subtitle: "With any Food from the list",
      icon: "food-fork-drink",
    },
    {
      name: "",
      title: "Adjust Portions",
      subtitle: "Change the Amount of Food",
      icon: "creation",
    },
    {
      name: "",
      title: "Reset Calories",
      subtitle: "Start each day from scratch",
      icon: "calendar-clock",
    },
    {
      name: "",
      title: "Update Your Profile",
      subtitle: "When your body changes",
      icon: "account-arrow-right",
    },
  ];

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.spacingHeader}>
        <Text style={styles.mainHeader}>Welcome to </Text>
        <Text style={styles.secondHeader}>PlateMate</Text>
      </View>
      <View style={styles.separator} />
      <View style={styles.spacing}>
        <Text style={styles.thirdHeader}>How to use PlateMate</Text>
      </View>
      <View>
        {instructionsList.map((section, i) => (
          <ListItem
            key={i}
            title={section.title}
            subtitle={section.subtitle}
            bottomDivider
            titleStyle={styles.title}
            subtitleStyle={styles.subtitle}
            rightIcon={
              <MaterialCommunityIcons
                name={section.icon}
                size={58}
                color="#ff4440"
                style={{ marginRight: 9, marginTop: 6 }}
              />
            }
          />
        ))}
      </View>
      <View style={styles.largeSeparator} />
      <View style={styles.spacing}>
        <Text style={styles.bottomText}>Get started with PlateMate</Text>
      </View>
      <View style={styles.buttonSpacing}>
        <Button
          title="Setup Profile"
          onPress={() => navigation.navigate("SetupProfileScreen")}
          buttonStyle={styles.button}
          titleStyle={{ fontSize: 28 }}
          raised
        />
      </View>
      <View style={styles.separator} />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {},
  separator: {
    marginVertical: 25,
    height: 1,
    width: "80%",
  },
  largeSeparator: {
    marginVertical: 60,
    height: 1,
    width: "80%",
  },
  spacingHeader: {
    alignItems: "center",
    justifyContent: "center",
    height: 270,
    backgroundColor: "#008ecc",
  },
  spacing: {
    alignItems: "center",
    justifyContent: "center",
    marginVertical: 5,
  },
  mainHeader: {
    color: "white",
    fontSize: 34,
    fontFamily: "Capriola_400Regular",
  },
  secondHeader: {
    fontSize: 53,
    color: "#b6f03c",
    fontFamily: "Capriola_400Regular",
  },
  thirdHeader: {
    fontSize: 22,
    color: "#0c97aa",
    fontFamily: "Capriola_400Regular",
    marginBottom: 10,
    marginRight: 5,
    textAlign: "center",
  },
  regularText: {
    fontSize: 16,
    color: "#0c97aa",
    justifyContent: "center",
    marginHorizontal: 20,
    fontFamily: "Capriola_400Regular",
  },
  bottomText: {
    fontSize: 26,
    color: "#066589",
    fontWeight: "bold",
    textAlign: "center",
    marginHorizontal: 33,
    fontFamily: "Capriola_400Regular",
  },
  title: {
    color: "#ff4440",
    fontSize: 24,
    fontWeight: "bold",
  },
  subtitle: {
    fontSize: 16,
    color: "#008ecc",
    fontWeight: "bold",
  },
  button: {
    backgroundColor: "#71c800",
    width: 290,
    height: 85,
  },
  buttonSpacing: {
    marginTop: 14,
    marginBottom: 40,
    alignItems: "center",
    justifyContent: "center",
  },
});

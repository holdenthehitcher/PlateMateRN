import React from "react";
import { StyleSheet, View, ScrollView } from "react-native";
import { Text, ListItem, Button } from "react-native-elements";
import { useFonts, Capriola_400Regular } from "@expo-google-fonts/capriola";

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
      title: "1. Add Foods",
      subtitle: "Make your own Food List",
    },
    {
      name: "",
      title: "2. Customize Meals",
      subtitle: "Using any food from your Food List",
    },
    {
      name: "",
      title: "3. Adjust Portions",
      subtitle: "Change amounts of each food",
    },
    {
      name: "",
      title: "4. Reset Calories",
      subtitle: "Start your calories over from scratch",
    },
    {
      name: "",
      title: "5. Update Your Profile",
      subtitle: "When your body transforms",
    },
  ];

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.separator} />
      <View style={styles.spacing}>
        <Text style={styles.mainHeader}>Welcome to </Text>
        <Text style={styles.secondHeader}>PlateMate</Text>
      </View>
      <View style={styles.largeSeparator} />
      <View style={styles.spacing}>
        <Text style={styles.thirdHeader}>With PlateMate you can</Text>
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
          />
        ))}
      </View>
      <View style={styles.largeSeparator} />
      <View style={styles.spacing}>
        <Text style={styles.bottomText}>
          That's it! Setup Your Profile Here.
        </Text>
      </View>
      <View style={styles.buttonSpacing}>
        <Button
          title="Get Started with PlateMate"
          onPress={() => navigation.navigate("SetupProfileScreen")}
          buttonStyle={styles.button}
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
    marginVertical: 20,
    height: 1,
    width: "80%",
  },
  largeSeparator: {
    marginVertical: 37,
    height: 1,
    width: "80%",
  },
  spacing: {
    alignItems: "center",
    justifyContent: "center",
    marginVertical: 15,
  },
  mainHeader: {
    color: "#db2600",
    fontSize: 42,
    fontFamily: "Capriola_400Regular",
  },
  secondHeader: {
    fontSize: 44,
    color: "#71c800",
    fontFamily: "Capriola_400Regular",
  },
  thirdHeader: {
    fontSize: 19,
    color: "#066589",
    fontFamily: "Capriola_400Regular",
    marginBottom: 6,
    marginRight: 5,
  },
  regularText: {
    fontSize: 16,
    color: "#066589",
    justifyContent: "center",
    marginHorizontal: 20,
    fontFamily: "Capriola_400Regular",
  },
  bottomText: {
    fontSize: 17,
    color: "#066589",
    fontWeight: "bold",
    justifyContent: "center",
    marginHorizontal: 30,
    marginTop: 40,
    fontFamily: "Capriola_400Regular",
  },
  title: {
    color: "#db2600",
    fontSize: 21,
    fontWeight: "bold",
  },
  subtitle: {
    fontSize: 16,
    color: "#066589",
  },
  button: {
    backgroundColor: "#71c800",
    width: 270,
    height: 80,
  },
  buttonSpacing: {
    marginTop: 5,
    marginBottom: 40,
    alignItems: "center",
    justifyContent: "center",
  },
});

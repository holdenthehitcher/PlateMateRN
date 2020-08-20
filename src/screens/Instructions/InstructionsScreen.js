import React from "react";
import { StyleSheet, View, ScrollView, Alert } from "react-native";
import { Text, ListItem, Button } from "react-native-elements";
import { useFonts, Capriola_400Regular } from "@expo-google-fonts/capriola";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { AppLoading } from "expo";

export default function InstructionsScreen(props) {
  const { navigation } = props;
  let [fontsLoaded] = useFonts({
    Capriola_400Regular,
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  const instructionsList = [
    {
      name: "see your Foods List",
      title: "Edit Your Food List",
      subtitle: `Include the foods you like and remove ones you don't want`,
      icon: "playlist-plus",
      navigation: "FoodListScreen"
    },
    {
      name: "make a Meal",
      title: "Create-a-Meal",
      subtitle: "Choose Foods from your List to make your own unique meals",
      icon: "food-fork-drink",
      navigation: "CreateMealScreen"
    },
    {
      name: "make a Meal",
      title: "Adjust Portions",
      subtitle: "Portion each food to meet your daily calorie limit",
      icon: "creation",
      navigation: "CreateMealScreen"
    },
    {
      name: "go Home",
      title: "Reset Calories",
      subtitle: "Start your daily calories from scratch each day",
      icon: "calendar-clock",
      navigation: "HomeScreen"
    },
    {
      name: "edit your Profile",
      title: "Update Your Profile",
      subtitle: "Change your stats when your body does, too",
      icon: "account-arrow-right",
      navigation: "SetupProfileScreen"
    },
  ];

  const onItemPress = (section) => {
      {
        Alert.alert(
          `Ready to ${section.name}?`,
          `You can always come back later`,
          [
            {
              text: "Yes",
              onPress: () => {
                navigation.navigate(section.navigation)
              },
            },
            {
              text: "Not Yet",
              onPress: () => "Cancel Pressed",
              style: "cancel",
            },
          ]
        )
      }
  }

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.spacingHeader}>
        <Text style={styles.mainHeader}>Welcome to </Text>
        <Text style={styles.secondHeader}>PlateMate</Text>
        <Text style={styles.thirdHeader}>"Your Daily Calorie Counter"</Text>
      </View>
      <View style={styles.spacing}>
        <Text style={styles.fourthHeader}>How to use PlateMate</Text>
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
            onPress={()=>onItemPress(section)}
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
      <View style={styles.separator} />
      <View style={styles.spacing}>
        <Text style={styles.bottomText}>Get started with PlateMate</Text>
      </View>
      <View style={styles.buttonSpacing}>
        <Button
          title="Setup Profile"
          onPress={() => setTimeout(() => navigation.navigate("SetupProfileScreen"), 350)}
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
    marginVertical: 15,
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
    height: 255,
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
    marginTop: 28,
    color: "#ff4440",
    fontSize: 17,
    fontFamily: "Capriola_400Regular",
  },
  fourthHeader: {
    marginTop: 10,
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

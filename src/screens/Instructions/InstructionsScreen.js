import React from "react";
import { StyleSheet, View, ScrollView } from "react-native";
import { Text, ListItem, Button } from "react-native-elements";

export default function InstructionsScreen(props) {
  const { navigation } = props;
  const instructionsList = [
    {
      name: "",
      title: "Make a Food List.",
      subtitle:
        "Whether it's a cup of rice or 100 grams of pasta, PlateMate allows you to customize the foods you eat the most to be added to the portion calculator.",
      // avatar: "1",
    },
    {
      name: "",
      title: "Customize each Meal",
      subtitle:
        "Simply add the foods from your Food List to each meal to calculate your Portion!",
    },
    {
      name: "",
      title: "Adjust each Portion Size",
      subtitle:
        "Everyone is different. Spin each ingredient's adjustment wheel to change the amount you want on your plate.",
    },
    {
      name: "",
      title: "Reset the Daily calories",
      subtitle:
        "Once the next day begins, simply restart your calories and start portioning, again!",
    },
    {
      name: "",
      title: "Change Your Profile Info",
      subtitle:
        "We all change day-by-day. PlateMate is here to help you reach your goals no matter what stage of the journey you're in.",
    },
  ];

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.spacing}>
        <Text h2 style={styles.mainHeader}>
          Welcome To{" "}
        </Text>
        <Text h2 style={{ color: "#4cbb17" }}>
          PlateMate
        </Text>
      </View>
      <View style={styles.spacing}>
        <Text style={styles.regularText}>
          {" "}
          An app to help you control your weight!
        </Text>
      </View>
      <View style={styles.separator} />
      <View style={styles.spacing}>
        <Text style={styles.secondHeader}>
          With PlateMate, you can now easily:
        </Text>
      </View>
      <View>
        {instructionsList.map((section, i) => (
          <ListItem
            key={i}
            title={section.title}
            subtitle={section.subtitle}
            // leftAvatar={section.avatar}
            bottomDivider
            titleStyle={styles.title}
            subtitleStyle={styles.subtitle}
          />
        ))}
      </View>
      <View style={styles.separator} />
      <View style={styles.spacing}>
        <Text style={styles.bottomText}>
          That's it! Now, let's get your profile started by clicking below.
        </Text>
      </View>
      <View style={styles.separator} />
      <View style={styles.buttonSpacing}>
        <Button
          title="Start Here"
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
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "black",
  },
  separator: {
    marginVertical: 18,
    height: 1,
    width: "80%",
  },
  spacing: {
    alignItems: "center",
    justifyContent: "center",
    marginVertical: 3,
  },
  mainHeader: {
    color: "#ef820d",
    justifyContent: "center",
    alignItems: "center",
  },
  regularText: {
    fontSize: 16,
    color: "#34282c",
    justifyContent: "center",
    marginHorizontal: 20,
  },
  bottomText: {
    fontSize: 16,
    color: "#34282c",
    justifyContent: "center",
    marginHorizontal: 50,
  },
  secondHeader: {
    fontSize: 30,
    color: "#34282c",
    marginLeft: 26,
  },
  title: {
    color: "#c21807",
    fontSize: 22,
  },
  subtitle: {
    color: "#613613",
  },
  button: {
    backgroundColor: "#4cbb17",
    width: 260,
    height: 70,
  },
  buttonSpacing: {
    marginBottom: 40,
    alignItems: "center",
    justifyContent: "center",
  },
});

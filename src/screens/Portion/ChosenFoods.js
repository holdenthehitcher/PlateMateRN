import React, { Component } from "react";
import { StyleSheet, FlatList, SafeAreaView, Text, View } from "react-native";
import { ListItem } from "react-native-elements";


const Food = ({ item }) => (
  <View>
    <Text>{item.title}</Text>
  </View>
);

const TEMPLIST = [
  {
    id: "0",
    title: "Salmon",
    image: "",
    type: "Main",
  },
  {
    id: "1",
    title: "Green Beans",
    image: "",
    type: "Side",
  },
  {
    id: "2",
    title: "Ketchup",
    image: "",
    type: "Sauce",
  },
  {
    id: "3",
    title: "Root Beer",
    image: "",
    type: "Drink",
  },
];

class ChosenFoods extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <View style={{ flex: 1 }}>
        <FlatList data={TEMPLIST} renderItem={({ item }) => <Food item={item} />} />
      </View>
    );
  }
}


export default ChosenFoods;
import React, { Component, useState } from "react";
import { StyleSheet, FlatList, SafeAreaView, Text, View } from "react-native";
import { ListItem, SearchBar } from "react-native-elements";
import { useSelector, useDispatch } from "react-redux";

import { TouchableHighlight, TouchableOpacity } from "react-native-gesture-handler";

const AllFoodsList = () => {
  const Food = ({ item }) => (
    <View>
      {/*add swipe to delete item*/}
      <Text>
        {item.name} - {item.calories} Calories
      </Text>
      <TouchableOpacity onPress={() => deleteFood(item)}>
        <Text> Remove </Text>
      </TouchableOpacity>
    </View>
  );

  const FoodItemDemo = [
    {
      id: 0,
      name: "Fishstick",
      calories: 35,
    },
  ];

  return (
    <>
      <View>
        <SearchBar placeholder="Search Foods" />
      </View>
      <View>
        <FlatList
          data={FoodItemDemo}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => <Food item={item} />}
        />
      </View>
    </>
  );
};

export default AllFoodsList;

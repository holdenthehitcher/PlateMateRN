import React, { useState, useEffect } from "react";
import { StyleSheet, FlatList, SafeAreaView, Text, View } from "react-native";
import { connect } from "react-redux";
import { ListItem } from "react-native-elements";

const Food = ({ item}) => {

  return (
    <>
      {item.addedToList === true && (
        <ListItem
          key={item.id}
          title={`${item.name} - ${item.calories} Kcal/g`}
          bottomDivider
        />
      )}
    </>
  );
};

const MealFoodsList = (props) => {
  useEffect(() => {
  }, [props.effect]);
  

  return (
    <View style={{ flex: 1 }}>
      <FlatList
        data={props.foods}
        keyExtractor={(food) => food.id.toString()}
        renderItem={({ item }) => <Food item={item} />}
      />
    </View>
  );
};

const mapStateToProps = (state) => {
  return {
    foods: state.foodsActions.allFoods,
  };
};

export default connect(mapStateToProps)(MealFoodsList);

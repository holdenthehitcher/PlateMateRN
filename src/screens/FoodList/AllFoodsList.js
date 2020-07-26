import React, { Component, useState } from "react";
import { StyleSheet, FlatList, SafeAreaView, Text, View } from "react-native";
import { ListItem, SearchBar, Icon } from "react-native-elements";
import { connect } from "react-redux";
import { deleteFood } from "../../redux/FoodsListRedux";

import {
  TouchableHighlight,
  TouchableOpacity,
} from "react-native-gesture-handler";

//maps state from store
const mapStateToProps = (state) => {
  return {
    foods: state.foodsActions.allFoods,
  };
};

// maps actions
const mapDispatchToProps = (dispatch) => {
  return {
    delete: (id) => dispatch(deleteFood(id)),
  };
};

const AllFoodsList = (props) => {
  return (
    <>
      <View>
        <SearchBar placeholder="Search Foods" />
      </View>
      <View>
        <FlatList
          data={props.foods}
          keyExtractor={(food) => food.id.toString()}
          renderItem={({ item }) => (
            <ListItem
              key={item.id}
              title={`${item.name} - ${item.calories} Kcal/g`}
              bottomDivider
              rightIcon={
                <Icon
                  name="delete"
                  size={20}
                  onPress={() => {
                    props.delete(item.id);
                  }}
                />
              }
            />
          )}
        />
      </View>
    </>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(AllFoodsList);

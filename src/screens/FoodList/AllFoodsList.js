import React, { Component, useState } from "react";
import { StyleSheet, FlatList, SafeAreaView, Text, View } from "react-native";
import { ListItem, SearchBar, Icon } from "react-native-elements";
import { connect } from "react-redux";
import { deleteFood } from "../../redux/FoodsListRedux";

const AllFoodsList = (props) => {
  
  return (
      <View>
        <FlatList
          data={props.foods}
          keyExtractor={(food) => food.id.toString()}
          renderItem={({ item }) => (
            <ListItem
              key={item.id}
              title={`${item.name} - ${item.calories} cal. per ${item.amount} ${item.amountType}`}
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
  );
};

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

export default connect(mapStateToProps, mapDispatchToProps)(AllFoodsList);

import React, { useState, useEffect } from "react";
import { StyleSheet, FlatList, SafeAreaView, Text, View, Alert } from "react-native";
import { connect } from "react-redux";
import { toggleFood } from "../../redux/FoodsListRedux";
import { ListItem, Icon} from "react-native-elements";

const Food = ({item, toggleFood}) => {
  return (
    <>
      {item.addedToList === true && (
        <ListItem
          key={item.id}
          title={`${item.name} - ${item.calories} Kcal/${item.amountType}`}
          bottomDivider
          rightIcon={
            <Icon
              name="remove"
              size={20}
              onPress={() => {
                {
                  Alert.alert(
                    `Remove ${item.name}`,
                    `Remove ${item.name} from this meal?`,
                    [
                      {
                        text: "Go Back",
                        onPress: () => console.log("Cancel Pressed"),
                        style: "cancel",
                      },
                      {
                        text: "Ready",
                        onPress: () => {
                          // console.log(item.addedToList)
                          // item.addedToList = true
                         toggleFood(item.id);
                        
                        },
                      },
                    ],
                  );
                }
              }}
            />
          }
        />
      )}
    </>
  );
};

const MealFoodsList = (props) => {
  return (
    <View style={{ flex: 1 }}>
      <FlatList
        data={props.foods}
        keyExtractor={(food) => food.id.toString()}
        renderItem={({item}) => <Food item={item} toggleFood={props.toggleFood} />}
      />
    </View>
  );
};

const mapStateToProps = (state) => {
  return {
    foods: state.foodsActions.allFoods,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    toggleFood: (id) => dispatch(toggleFood(id)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(MealFoodsList);

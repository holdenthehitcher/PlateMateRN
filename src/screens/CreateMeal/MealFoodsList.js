import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  FlatList,
  SafeAreaView,
  Text,
  View,
  Alert,
} from "react-native";
import { connect } from "react-redux";
import { toggleFood } from "../../redux/FoodsListRedux";
import { ListItem, Icon } from "react-native-elements";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import Toast from "react-native-simple-toast";

const Food = ({ item, toggleFood }) => {
  return (
    <>
      {item.addedToList === true && (
        <ListItem
          key={item.id}
          style={styles.listItem}
          titleStyle={styles.listItemTitle}
          title={`${item.name}`}
          bottomDivider
          rightIcon={
            <MaterialCommunityIcons
              name="playlist-remove"
              size={39}
              style={{ marginRight: 10, color: "#b80c00" }}
              onPress={() => {
                {
                  Alert.alert(
                    `Remove ${item.name}?`,
                    `Are you not having ${item.name} in this meal?`,
                    [
                      {
                        text: "Wait",
                        onPress: () => "Cancel Pressed",
                        style: "cancel",
                      },
                      {
                        text: "Remove",
                        onPress: () => {
                          toggleFood(item.id);
                          Toast.show(`${item.name} has been removed`);
                        },
                      },
                    ]
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
        renderItem={({ item }) => (
          <Food item={item} toggleFood={props.toggleFood} />
        )}
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

const styles = StyleSheet.create({
  listItemTitle: {
    fontSize: 20,
    // marginVertical: 4,
    color: "#0c090a",
    marginLeft: 120,
  },
  listItem: {
    borderWidth: 2,
    borderColor: "#c0c0c0",
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(MealFoodsList);

import React, { useState, useEffect } from "react";
import { StyleSheet, FlatList, Text, View, Alert } from "react-native";
import { AppLoading } from "expo";
import { connect } from "react-redux";
import { toggleFood } from "../../redux/FoodsListRedux";
import { ListItem, Icon } from "react-native-elements";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import Toast from "react-native-simple-toast";
import { useFonts, Livvic_600SemiBold } from "@expo-google-fonts/livvic";

const Food = ({ item, toggleFood }) => {
  let [fontsLoaded] = useFonts({
    Livvic_600SemiBold,
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  return (
    <View>
      {item.addedToList === true && (
        <ListItem
          key={item.id}
          style={styles.listItem}
          titleStyle={styles.listItemTitle}
          title={`${item.name}`}
          bottomDivider
          onPress={() => {
            {
              Alert.alert(
                `Delete ${item.name}?`,
                `Do you want to remove ${item.name} from this meal?`,
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
          rightIcon={
            <MaterialCommunityIcons
              name="close-circle-outline"
              size={31}
              style={{ marginRight: 40, color: "#b80c00" }}
              onPress={() => {
                {
                  Alert.alert(
                    `Remove ${item.name}`,
                    `Take out ${item.name} from this meal?`,
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
                          Toast.showWithGravity(
                            `${item.name} has been removed`,
                            Toast.SHORT,
                            Toast.TOP
                          );
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
    </View>
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
    color: "#0c090a",
    alignSelf: "center",
    fontFamily: "Livvic_600SemiBold",
  },
  listItem: {
    borderWidth: 1,
    borderColor: "white",
    borderTopColor: "white",
    borderBottomColor: "white",
    alignSelf: "center",
    width: 330,
    height: 55,
    alignItems: "center",
    marginLeft: 20,
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(MealFoodsList);

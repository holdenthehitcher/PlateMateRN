import React, { useState, useEffect } from "react";
import { FlatList, View, Alert, Text } from "react-native";
import { ListItem, SearchBar, Icon, Tooltip } from "react-native-elements";
import Toast from "react-native-simple-toast";
import { connect } from "react-redux";
import { deleteFood } from "../../redux/FoodsListRedux";
import { AppLoading } from "expo";
import { useFonts, Livvic_600SemiBold } from "@expo-google-fonts/livvic";

const AllFoodsList = (props) => {
  const [searchedFood, setSearchedFood] = useState("");
  const newFood = "";

  let [fontsLoaded] = useFonts({
    Livvic_600SemiBold,
  });
  if (!fontsLoaded) {
    return <AppLoading />;
  }
  
  const filterList = () => {
    return props.foods.filter(
      (food) =>
        food.name
          .toLowerCase()
          .includes(searchedFood.toLowerCase())
    );
  }

  return (
    <>
      {/* <SearchBar
        placeholder="Type Here..."
        onChangeText={() => setSearchedFood(newFood)}
        value={newFood}
      /> */}
      <View>
        <FlatList
          data={searchedFood === "" ? props.foods : filterList()}
          keyExtractor={(food) => food.id.toString()}
          renderItem={({ item }) => (
            // <Tooltip popover={<Text>Info here</Text>} toggleAction="onLongPress">
            <ListItem
              containerStyle={{
                height: 71,
                backgroundColor: "#ffffff",
                borderTopWidth: 1,
                borderColor: "#efba0d",
              }}
              titleStyle={{
                fontFamily: "Livvic_600SemiBold",
                fontSize: 20,
                color: "#34282c",
                marginLeft: 45,
              }}
              subtitleStyle={{ marginLeft: 45, fontSize: 11 }}
              key={item.id}
              title={`${item.name}`}
              subtitle={`${item.calories} cals./ ${item.amount} ${item.amountType}`}
              bottomDivider
              onPress={() => console.log(item)}
              rightIcon={
                <View style={{ marginRight: 18 }}>
                  <Icon
                    type="font-awesome"
                    name="trash"
                    size={30}
                    color="#ef490d"
                    onPress={() => {
                      {
                        Alert.alert(
                          `Do You Want to Delete ${item.name}?`,
                          `Removing ${item.name} from your Food List means you cannot use this food again.`,
                          [
                            {
                              text: "Not Now",
                              onPress: () => "Cancel Pressed",
                              style: "cancel",
                            },
                            {
                              text: "Delete Food",
                              onPress: () => {
                                props.delete(item.id);
                                Toast.show(`${item.name} has been deleted`);
                              },
                            },
                          ]
                        );
                      }
                    }}
                  />
                </View>
              }
            />
            // </Tooltip>
          )}
        />
      </View>
    </>
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

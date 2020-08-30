import React, { useState } from "react";
import { FlatList, View, Alert } from "react-native";
import { ListItem, SearchBar, Icon } from "react-native-elements";
import Toast from "react-native-simple-toast";
import { connect } from "react-redux";
import { deleteFood } from "../../redux/FoodsListRedux";
import { AppLoading } from "expo";
import { useFonts, Livvic_600SemiBold } from "@expo-google-fonts/livvic";
import {
  Mada_400Regular,
  Mada_600SemiBold,
  Mada_700Bold,
} from "@expo-google-fonts/mada";

const AllFoodsList = (props) => {
  const [searchedFood, setSearchedFood] = useState("");
  const newFood = "";

  let [fontsLoaded] = useFonts({
    Livvic_600SemiBold,
    Mada_400Regular,
    Mada_600SemiBold,
    Mada_700Bold,
  });
  if (!fontsLoaded) {
    return <AppLoading />;
  }

  const filterList = () => {
    return props.foods.filter((food) =>
      food.name.toLowerCase().includes(searchedFood.toLowerCase())
    );
  };


  return (
    <>
      <View>
        <FlatList
          data={searchedFood === "" ? props.foods : filterList()}
          keyExtractor={(food) => food.id.toString()}
          renderItem={({ item }) => (
            <ListItem
              containerStyle={{
                height: 71,
                backgroundColor: "#ffffff",
                borderTopWidth: 1,
                borderColor: "#efba0d",
              }}
              titleStyle={{
                fontFamily: "Mada_400Regular",
                fontSize: 20,
                color: "#34282c",
                marginLeft: 100,
              }}
              subtitleStyle={{ marginLeft: 100, fontSize: 10 }}
              key={item.id}
              title={`${item.name}`}
              subtitle={`${item.calories} cals./ ${item.amount} ${item.amountType}`}
              bottomDivider
              rightIcon={
                <View style={{ marginRight: 30 }}>
                  <Icon
                    type="font-awesome"
                    name="trash"
                    size={26}
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
          )}
        />
      </View>
    </>
  );
};

const mapStateToProps = (state) => {
  console.log(state.foodsActions.allFoods)
  return {
    foods: state.foodsActions.allFoods,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    delete: (id) => dispatch(deleteFood(id)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(AllFoodsList);

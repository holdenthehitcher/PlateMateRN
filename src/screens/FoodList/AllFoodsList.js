import React from "react";
import { FlatList, View, Alert } from "react-native";
import { ListItem, SearchBar, Icon } from "react-native-elements";
import Toast from "react-native-simple-toast";
import { connect } from "react-redux";
import { deleteFood } from "../../redux/FoodsListRedux";
import { useFonts, Livvic_600SemiBold } from "@expo-google-fonts/livvic";

const AllFoodsList = (props) => {
  let [fontsLoaded] = useFonts({
    Livvic_600SemiBold,
  });
  if (!fontsLoaded) {
    return null;
  }

  return (
    <View>
      <FlatList
        data={props.foods}
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
              fontFamily: "Livvic_600SemiBold",
              fontSize: 16,
              color: "#34282c",
            }}
            key={item.id}
            title={`${item.name} - ${item.calories} cal./${item.amount} ${item.amountType}`}
            bottomDivider
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

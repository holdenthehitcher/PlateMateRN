import React from "react";
import { FlatList, View, Alert } from "react-native";
import { ListItem, SearchBar, Icon } from "react-native-elements";
import Toast from "react-native-simple-toast";
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
              <View style={{marginRight: 15}}>
              <Icon
                type="font-awesome"
                name="trash"
                size={40}
                color="gray"
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

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
              <Icon
                type="font-awesome"
                name="trash"
                size={20}
                onPress={() => {
                  {
                    Alert.alert(
                      `Delete ${item.name}?`,
                      `Remove ${item.name} from your Food List? You will not be able to portion this food again.`,
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
                            Toast.show("Your Food has been Deleted");
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

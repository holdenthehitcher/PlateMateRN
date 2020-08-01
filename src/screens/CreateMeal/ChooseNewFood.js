import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  Modal,
  StyleSheet,
  Picker,
  Button,
  TextInput,
  Alert,
} from "react-native";
import { Icon, ListItem } from "react-native-elements";
import { ScrollView, FlatList } from "react-native-gesture-handler";
import { connect } from "react-redux";
import { toggleFood } from "../../redux/FoodsListRedux";

const ChooseNewFood = (props) => {
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <>
      <Button
        title="Choose Your Foods"
        onPress={() => setModalVisible(!modalVisible)}
      ></Button>
      <Modal
        animated
        transparent
        visible={modalVisible}
        animationType="slide"
        onRequestClose={() => !modalVisible}
      >
        <View style={styles.container}>
          <View style={styles.pickerContainer}>
            <View style={styles.header}>
              <Text>Add A New Food</Text>
              <Icon
                style={styles.text}
                name="close"
                onPress={() => {
                  setModalVisible(!modalVisible);
                }}
              />
            </View>
            <ScrollView>
              <FlatList
                data={props.foods}
                keyExtractor={(food) => food.id.toString()}
                renderItem={({ item }) => (
                  <ListItem
                    key={item.id}
                    title={`${item.name} - ${item.calories} Kcal/g`}
                    bottomDivider
                    leftIcon={
                      <Icon
                        name="add"
                        size={20}
                        onPress={() => {
                          {
                            Alert.alert(
                              `Add ${item.name}`,
                              `Would you like to include ${item.name} in this meal?`,
                              [
                                {
                                  text: "Go Back",
                                  onPress: () => console.log("Cancel Pressed"),
                                  style: "cancel",
                                },
                                {
                                  text: "Ready",
                                  onPress: () => {
                                    props.toggleFood(item.id);
                                  },
                                },
                              ],
                              { onDismiss: () => {} }
                            );
                          }
                        }}
                      />
                    }
                  />
                )}
              />
            </ScrollView>
          </View>
        </View>
      </Modal>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "rgba(0,0,0,0.5)",
  },
  pickerContainer: {
    height: "80%",
    width: "100%",
    backgroundColor: "white",
  },
  header: {
    justifyContent: "center",
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#eee",
  },
  text: {
    justifyContent: "flex-end",
    alignItems: "flex-end",
  },
});

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

export default connect(mapStateToProps, mapDispatchToProps)(ChooseNewFood);

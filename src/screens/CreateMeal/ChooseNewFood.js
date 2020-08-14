import React, { useState, useEffect } from "react";
import { View, Text, Modal, StyleSheet, Alert } from "react-native";
import { Icon, ListItem, Button } from "react-native-elements";
import { ScrollView, FlatList } from "react-native-gesture-handler";
import { connect } from "react-redux";
import { toggleFood } from "../../redux/FoodsListRedux";
import { Entypo } from "@expo/vector-icons";
import Toast from "react-native-simple-toast";

const ChooseNewFood = (props) => {
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <>
      <Button
        title="Add Foods"
        onPress={() => setModalVisible(!modalVisible)}
        buttonStyle={styles.addButton}
        titleStyle={styles.addButtonTitle}
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
              <Text style={styles.headerText}>Choose Your Foods</Text>
            </View>
            <View style={styles.buttonSpacing}>
              <Button
                buttonStyle={styles.finishedButton}
                titleStyle={styles.finishedButtonTitle}
                title="Finished"
                onPress={() => {
                  setModalVisible(!modalVisible);
                }}
              />
            </View>
            <ScrollView>
              <FlatList
                data={props.foods}
                keyExtractor={(food) => food.id.toString()}
                renderItem={({ item }, i) => (
                  <ListItem
                    key={item.id}
                    title={`${item.name}`}
                    subtitle={`${item.calories} cals./ ${item.amount} ${item.amountType}`}
                    style={styles.listItem}
                    titleStyle={styles.listItemTitle}
                    subtitleStyle={styles.listItemSubtitle}
                    bottomDivider
                    rightIcon={
                      <Entypo
                        name={
                          item.addedToList === false
                            ? "circle-with-plus"
                            : "circle-with-minus"
                        }
                        size={27}
                        style={{ marginRight: 10 }}
                        color={item.addedToList === false ? "green" : "red"}
                        onPress={() => {
                          {
                            Alert.alert(
                              item.addedToList === false
                                ? `Add ${item.name}?`
                                : `Remove ${item.name}?`,
                              item.addedToList === false
                                ? `Do you want to include ${item.name} in this meal?`
                                : `Take out ${item.name} from this meal?`,
                              [
                                {
                                  text: "Not Yet",
                                  onPress: () => "Cancel Pressed",
                                  style: "cancel",
                                },
                                {
                                  text: "Yes",
                                  onPress: () => {
                                    props.toggleFood(item.id);
                                    item.addedToList === false
                                      ? Toast.show(
                                          `${item.name} has been added to this meal`
                                        )
                                      : Toast.show(
                                          `${item.name} has been removed from this meal`
                                        );
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
  addButton: {
    width: 220,
    height: 80,
    alignSelf: "center",
    marginTop: 30,
    backgroundColor: "#0082b1",
  },
  addButtonTitle: {
    fontSize: 22,
  },
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "rgba(0,0,0,0.5)",
    height: "100%",
  },
  pickerContainer: {
    height: "100%",
    width: "100%",
    backgroundColor: "white",
  },
  header: {
    justifyContent: "center",
    flexDirection: "row",
    alignItems: "center",
    margin: 15,
  },
  headerText: {
    fontSize: 25,
    fontWeight: "bold",
    color: "green",
  },
  text: {
    justifyContent: "flex-end",
    alignItems: "flex-end",
  },
  finishedButton: {
    width: 250,
    height: 70,
    alignSelf: "center",
    marginBottom: 8,
    backgroundColor: "#3bb143",
  },
  finishedButtonTitle: {
    fontSize: 20,
  },
  listItem: {},
  listItemTitle: {
    fontSize: 20,
    marginLeft: 10,
  },
  listItemSubtitle: {
    fontSize: 13,
    marginLeft: 10,
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

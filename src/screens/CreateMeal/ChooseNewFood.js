import React, { useState, useRef, useEffect } from "react";
import {
  View,
  Text,
  Modal,
  StyleSheet,
  Alert,
  Animated,
  Dimensions,
  TouchableOpacity,
} from "react-native";
import { Icon, ListItem, Button } from "react-native-elements";
import { ScrollView, FlatList } from "react-native-gesture-handler";
import { connect } from "react-redux";
import { toggleFood } from "../../redux/FoodsListRedux";
import { Entypo } from "@expo/vector-icons";
import Toast from "react-native-simple-toast";
import * as Animatable from "react-native-animatable";
import withPressAnimated from "../../animations/withPressAnimated";
const AnimatedPressButton = withPressAnimated(Button);

const ChooseNewFood = (props) => {
  const [modalVisible, setModalVisible] = useState(false);

  const animateModal = () => {
    setTimeout(() => setModalVisible(!modalVisible), 1100);
  };

  const toggleFood = (item) => {
    props.toggleFood(item.id);
    item.addedToList === false
      ? Toast.showWithGravity(
          `${item.name} has been added to this meal`,
          Toast.SHORT,
          Toast.TOP
        )
      : Toast.show(`${item.name} has been removed from this meal`, Toast.SHORT);
    console.log(item);
  };

  return (
    <View>
      <AnimatedPressButton
        animation="bounce"
        title="Choose Your Foods"
        onPress={() => animateModal()}
        buttonStyle={styles.addButton}
        titleStyle={styles.addButtonTitle}
      ></AnimatedPressButton>
      <Modal
        animationType="slide"
        visible={modalVisible}
        onRequestClose={() => !modalVisible}
      >
        <View style={styles.container}>
          <View style={styles.pickerContainer}>
            <View style={styles.header}>
              <Text style={styles.headerText}>Choose Your Foods</Text>
            </View>
            <View style={styles.buttonSpacing}>
              <AnimatedPressButton
                animation="bounce"
                buttonStyle={styles.finishedButton}
                titleStyle={styles.finishedButtonTitle}
                title="Finished"
                onPress={() => {
                  animateModal();
                }}
              />
            </View>
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
                  onPress={() => {
                    toggleFood(item);
                  }}
                  rightIcon={
                    <TouchableOpacity>
                      <Entypo
                        onPress={() => {
                          toggleFood(item);
                        }}
                        name={
                          item.addedToList === false
                            ? "circle-with-plus"
                            : "check"
                        }
                        size={30}
                        color={item.addedToList === false ? "green" : "red"}
                      />
                    </TouchableOpacity>
                  }
                />
              )}
            />
          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  addButton: {
    width: 200,
    height: 70,
    alignSelf: "center",
    marginBottom: 15,
    marginRight: 20,
    backgroundColor: "#3bb143",
  },
  addButtonTitle: {
    fontSize: 20,
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
    fontSize: 28,
    fontWeight: "bold",
    color: "black",
  },
  text: {
    justifyContent: "flex-end",
    alignItems: "flex-end",
  },
  buttonSpacing: {
    marginBottom: 10,
  },
  finishedButton: {
    width: 210,
    height: 60,
    alignSelf: "center",
    marginBottom: 8,
    backgroundColor: "#b80c00",
  },
  finishedButtonTitle: {
    fontSize: 20,
  },
  listItem: {},
  listItemTitle: {
    fontSize: 19,
    marginLeft: 90,
  },
  listItemSubtitle: {
    fontSize: 10,
    marginLeft: 90,
  },
  icon: {
    marginRight: 95,
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

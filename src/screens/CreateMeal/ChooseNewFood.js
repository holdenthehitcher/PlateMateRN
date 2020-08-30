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
                        style={{marginRight:100, marginBottom:15}}
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
          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  addButton: {
    width: 240,
    height: 80,
    alignSelf: "center",
    backgroundColor: "#3bb143",
    marginTop: 30,
    marginBottom: 10,
    borderRadius: 40
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
    marginVertical: 15,
  },
  finishedButton: {
    width: 230,
    height: 65,
    alignSelf: "center",
    marginBottom: 8,
    backgroundColor: "#b80c00",
    borderRadius: 30
  },
  finishedButtonTitle: {
    fontSize: 20,
  },
  listItem: {
    height: 70
  },
  listItemTitle: {
    fontSize: 19,
    marginLeft: 100,
  },
  listItemSubtitle: {
    fontSize: 10,
    marginLeft: 101,
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

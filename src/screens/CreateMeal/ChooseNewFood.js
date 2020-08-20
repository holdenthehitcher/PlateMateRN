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
const AnimatedIcon = Animatable.createAnimatableComponent(Entypo);

const ChooseNewFood = (props) => {
  const [modalVisible, setModalVisible] = useState(false);

  const animateModal = () => {
    setTimeout(() => setModalVisible(!modalVisible), 1100);
  };

  // const [isRotated, setIsRotated] = useState(false);

  const animatedValue = useRef(new Animated.Value(0)).current;
  const animation = (toValue) => {
    Animated.timing(animatedValue, {
      toValue,
      duration: 3000,
      useNativeDriver: false,
    });
  };
  const [index, setIndex] = useState(0);
  const rotateIcon = (item) => {
    props.toggleFood(item.id);
    item.addedToList === false
      ? Toast.show(`${item.name} has been added to this meal`)
      : Toast.show(`${item.name} has been removed from this meal`);
  };

  // const rotateInterPolate = rotation.interpolate({
  //   inputRange: [0, 360],
  //   outputRange: ["0deg", "360deg"],
  // });
  // const animatedStyles = {
  //   transform: [{ rotate: rotateInterPolate }],
  // };

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
                  rightIcon={
                    <Animated.View
                      style={[styles.icon,
                        {
                          transform: [
                            {
                              rotateY: animatedValue.interpolate({
                                inputRange: [0, 0.5, 1],
                                outputRange: ["0deg", "-90deg", "360deg"],
                              }),
                            },
                          ],
                        },
                      ]}
                    >
                      <TouchableOpacity
                        onPress={() => {
                          rotateIcon(item);
                        }}
                      >
                        <Entypo
                          name={
                            item.addedToList === false
                              ? "circle-with-plus"
                              : "circle-with-minus"
                          }
                          size={27}
                          color={item.addedToList === false ? "green" : "red"}

                          // setRotated(!rotated);
                          // iconRef.current.animatable.transitionTo({
                          //   transform: rotated
                          //     ? [{ rotate: "0deg" }]
                          //     : [{ rotate: "90deg" }],
                          // });
                          // {
                          //   Alert.alert(
                          //     item.addedToList === false
                          //       ? `Add ${item.name}?`
                          //       : `Remove ${item.name}?`,
                          //     item.addedToList === false
                          //       ? `Do you want to include ${item.name} in this meal?`
                          //       : `Take out ${item.name} from this meal?`,
                          //     [
                          //       {
                          //         text: "Not Yet",
                          //         onPress: () => "Cancel Pressed",
                          //         style: "cancel",
                          //       },
                          //       {
                          //         text: "Yes",
                          //         onPress: () => {
                          // props.toggleFood(item.id);
                          // item.addedToList === false
                          //   ? Toast.show(
                          //       `${item.name} has been added to this meal`
                          //     )
                          //   : Toast.show(
                          //       `${item.name} has been removed from this meal`
                          //     );
                          //         },
                          //       },
                          //     ],
                          //     { onDismiss: () => {} }
                          //   );
                          // }
                        />
                      </TouchableOpacity>
                    </Animated.View>
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
    width: 250,
    height: 70,
    alignSelf: "center",
    marginBottom: 15,
    marginRight: 20,
    backgroundColor: "#0082b1",
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
    fontSize: 25,
    fontWeight: "bold",
    color: "green",
  },
  text: {
    justifyContent: "flex-end",
    alignItems: "flex-end",
  },
  buttonSpacing: {
    marginBottom: 10,
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
    fontSize: 18,
    marginLeft: 50,
  },
  listItemSubtitle: {
    fontSize: 10,
    marginLeft: 45,
  },
  icon: {
    marginRight: 30,
  }
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

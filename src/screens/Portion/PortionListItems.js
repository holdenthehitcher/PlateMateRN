import React, { useState } from "react";
import { FlatList, Text, View, ScrollView } from "react-native";
import { ListItem, Slider } from "react-native-elements";
import { WheelPicker } from "react-native-wheel-picker-android";

export default PortionWheelList = ({ chosenFoods, handleFoodCalories }) => {
  const [chosenFoodsList, setChosenFoodsList] = useState([...chosenFoods]);

  const maxInputValue = (item) => {
    const { defaultAmount } = item;
    switch (true) {
      case defaultAmount < 5:
        return 10;
      case defaultAmount < 10:
        return 20;
      case defaultAmount < 20:
        return 30;
      case defaultAmount < 40:
        return 100;
      case defaultAmount < 60:
        return 200;
      case defaultAmount < 80:
        return 350;
      case defaultAmount < 100:
        return 500;
      default:
        return 1000;
    }
  };

  const valueSteps = (item) => {
    const { defaultAmount } = item;
    switch (true) {
      case defaultAmount < 5:
        return 0.25;
      case defaultAmount < 10:
        return 0.5;
      case defaultAmount < 20:
        return 1;
      case defaultAmount < 40:
        return 2;
      case defaultAmount < 60:
        return 5;
      case defaultAmount < 100:
        return 10;
      default:
        return 20;
    }
  };
  const pieColors = ["#b80c00", "#3bb143", "#0082b1", "#c0c0c0", "#ef820d", "#efba0d",];

  const fractionValues = [];
  for (let i = 0; i < 16; i += 0.25) {
    fractionValues.push(i);
  }

  return (
    <>
      <ScrollView>
        <FlatList
          data={chosenFoodsList}
          keyExtractor={(food) => food.id.toString()}
          renderItem={({ item }, i) => (
            <ListItem
              key={item.id}
              title={`${item.name}`}
              subtitle={`${item.amount} ${item.amountType}`}
              bottomDivider
              rightIcon={
                <>
                  <Slider
                    step={valueSteps(item)}
                    style={{ width: 240, height: 40 }}
                    minimumValue={1}
                    maximumValue={maxInputValue(item)}
                    onValueChange={(value) => {
                      handleFoodCalories(item, value);
                    }}
                    value={item.amount}
                    minimumTrackTintColor="#4b3619"
                    maximumTrackTintColor="#4b3619"
                    thumbTintColor={pieColors[chosenFoodsList[i]]}
                    thumbTouchSize={{ width: 150, height: 150 }}
                  />
                </>
              }
            />
          )}
        />
      </ScrollView>
    </>
  );
};

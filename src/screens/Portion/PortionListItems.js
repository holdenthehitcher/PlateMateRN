import React, { useState } from "react";
import { FlatList, Text, View } from "react-native";
import {
  ListItem,
  Icon,
  Overlay,
  Button,
  Slider,
  TouchableOpacity,
} from "react-native-elements";
import { WheelPicker } from "react-native-wheel-picker-android";

export default PortionWheelList = ({ chosenFoods, handleFoodCalories }) => {
  const [chosenFoodsList, setChosenFoodsList] = useState([...chosenFoods]);

  const maxInputValue = (item) => {
    const { defaultAmount } = item;
    switch (true) {
      case defaultAmount < 5:
        return 15;
      case defaultAmount < 10:
        return 25;
      case defaultAmount < 20:
        return 40;
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
  const pieColors = ["red", "green", "blue", "yellow", "magenta", "cyan"];

  const fractionValues = [];
  for (let i = 0; i < 16; i += 0.25) {
    fractionValues.push(i);
  }

  return (
    <>
      <View>
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
                    style={{ width: 200, height: 40 }}
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
                    // debugTouchArea={true}
                    trackStyle={{ width: 50 }}
                  />
                </>
              }
            />
          )}
        />
      </View>
    </>
  );
};

// const ValueType = ({ item, handleFoodCalories }) => {
//   const [overlayVisible, setOverlayVisible] = useState(false);

//   const value =
//     item.defaultAmount < 10 ? (
// <>
//   <Button
//     buttonStyle={styles.button}
//     raised
//     title={`${item.amount}`}
//     onPress={() => setOverlayVisible(!overlayVisible)}
//   />
//   <Overlay
//     isVisible={overlayVisible}
//     animationType="slide"
//     onBackdropPress={() => setOverlayVisible(!overlayVisible)}
//   >
//     <View style={styles.overlayContainer}>
//       <View style={styles.headerSpacing}>
//         <Text style={styles.header}>"What's Your Biological Sex?"</Text>
//       </View>
//       <WheelPicker
//         selectedItem={item.amount}
//         data={fractionValues}
//         onItemSelected={(value) => handleFoodCalories(item, value)}
//       />
//     </View>
//   </Overlay>
// </>
//     ) : (
{
  /* <>
  <Slider
    step={valueSteps(item)}
    style={{ width: 200, height: 40 }}
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
</> */
}
//     );
//   return <View> {value} </View>;
// };

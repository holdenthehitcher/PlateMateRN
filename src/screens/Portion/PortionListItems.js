import React, { useState, useEffect } from "react";
import { FlatList, Text, View } from "react-native";
import { ListItem, Icon, Overlay, Button, Slider } from "react-native-elements";
// import { WheelPicker, Item } from "react-native-android-wheel-picker";
import { ReactNativeRingPicker } from "react-native-ring-picker";

export default PortionWheelList = ({ chosenFoods, handleFoodCalories }) => {
  const [modalVisible, setModalVisible] = useState(false);
  const [chosenFoodsList, setChosenFoodsList] = useState([...chosenFoods]);

 

  return (
    <>
      <View>
        <FlatList
          data={chosenFoodsList}
          keyExtractor={(food) => food.id.toString()}
          renderItem={({ item }) => (
            <ListItem
              key={item.id}
              title={`${item.name} - ${item.amount} ${item.amountType}`}
              bottomDivider
              rightIcon={
                <>
                  <Slider
                    step={1}
                    style={{ width: 200, height: 40 }}
                    minimumValue={3}
                    maximumValue={8}
                    onValueChange={(value) => {
                      handleFoodCalories(item, value);
                    }}
                    value={item.amount}
                    minimumTrackTintColor="#4b3619"
                    maximumTrackTintColor="#4b3619"
                    thumbTintColor="#5c2c06"
                  />
                  <Text>
                    {item.amount} {item.amountType}
                  </Text>
                </>
                // <Button
                //   title={`${item.calories}`}
                //   onPress={() => {
                //     setModalVisible(!modalVisible);
                //   }}
                // />
                // <><AmountWheel item={item} caloriesByFood={caloriesByFood} /><Text>{item.amountType}</Text></>
              }
            />
          )}
        />
        {/* <Overlay
          isVisible={modalVisible}
          animationType="slide"
          onBackdropPress={() => setModalVisible(!modalVisible)}
        >
          <View
            style={{ justifyContent: "center", alignItems: "center", flex: 1 }}
          >
            <Text>{ringAmount}</Text>
            <Slider
              step={1}
              style={{ width: 200, height: 40 }}
              minimumValue={3}
              maximumValue={8}
              onValueChange={(value) => setRingAmount(value)}
              value={ringAmount}
              minimumTrackTintColor="#4b3619"
              maximumTrackTintColor="#4b3619"
              thumbTintColor="#5c2c06"
            />
          </View>
        </Overlay> */}
      </View>
    </>
  );
};

// const AmountWheel = ({ item, caloriesByFood }) => {
//   const wheelNumbers = [];
//   for (let i = 1; i <= 500; i++) {
//     wheelNumbers.push(i);
//   }

//   const getFoodCalories = (item, value) => {
//     const totalFoodCalories = item.calorieMultiplier * value;
//     setCaloriesByFood([...caloriesByFood, totalFoodCalories]);
//   };

//   return (
//     <View>
//       <WheelPicker
//         selectedItem={item.amount}
//         onItemsSelected={(item, value) => {
//           getFoodCalories(item, value), console.log(item);
//         }}
//         backgroundColor="white"
//         itemStyle={{ color: "green" }}
//       >
//         {wheelNumbers.map((number) => (
//           <Item key={number} label={number} value={number} />
//         ))}
//       </WheelPicker>
//     </View>
//   );
// };

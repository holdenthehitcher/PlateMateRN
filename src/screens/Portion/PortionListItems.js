import React, { useState, useEffect } from "react";
import { FlatList, Text, View } from "react-native";
import { ListItem, Icon } from "react-native-elements";
import { WheelPicker, Item } from "react-native-android-wheel-picker";


const AmountWheel = ({item}) => {
  const wheelNumbers = []
  for (let i=1;i<=400;i++) {
    wheelNumbers.push(i)
  }

  return (
    <View>
      <WheelPicker
          selectedItem={wheelNumbers[item.amount]}
          initPosition={wheelNumbers[item.amount]}
          onItemsSelected={(value) => item.amount = value}
          backgroundColor="white"
          itemStyle={{ color: "green" }}
        >
          {wheelNumbers.map((number) => <Item key={number} label={number} value={number} />)}
        </WheelPicker>
    </View>
  )
}

export default PortionWheelList = (props) => {
  return (
    <>
      <View>
        <FlatList
          data={props.chosenFoods}
          keyExtractor={(food) => food.id.toString()}
          renderItem={({ item }) => (
            <ListItem
              key={item.id}
              title={`${item.name} - ${item.calories} cal./${item.amountType}`}
              bottomDivider
              rightIcon={<><AmountWheel item={item} /><Text>{item.amountType}</Text></>}
            />
          )}
        />
      </View>
      

    </>
  );
};

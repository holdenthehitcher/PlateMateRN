import React, { useState, useEffect } from "react";
import { FlatList, Text, View } from "react-native";
import { ListItem, Icon } from "react-native-elements";

export default PortionList = (props) => {
  return (
    <View>
      <FlatList
        data={props.chosenFoods}
        keyExtractor={(food) => food.id.toString()}
        renderItem={({ item }) => (
          <ListItem
            key={item.id}
            title={`${item.name} - ${item.calories} Kcal/g`}
            bottomDivider
            rightIcon={
              <Icon
                name="delete"
                size={20}
                onPress={() => {
                  props.delete(item.id);
                }}
              />
            }
          />
        )}
      />
    </View>
  );
};

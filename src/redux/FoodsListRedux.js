export const ADD_FOOD = "ADD_FOOD";
export const DELETE_FOOD = "DELETE_FOOD";
export const TOGGLE_FOOD = "TOGGLE_FOOD";

// foods Action Creators

export const addFood = (newFoodItem) => ({
  type: ADD_FOOD,
  payload: newFoodItem,
});

export const deleteFood = (id) => ({
  type: DELETE_FOOD,
  payload: id,
});

export const toggleFood = (addedToList) => ({
  type: TOGGLE_FOOD,
  payload: addedToList,
});

/// foods reducer

const initialState = {
  allFoods: [],
};

export const FoodsActions = (state = initialState, action) => {
  switch (action.type) {
    case ADD_FOOD:
      const newFood = { ...action.payload, id: state.allFoods.length + 1 };
      return { ...state, allFoods: state.allFoods.concat(newFood)};
    case DELETE_FOOD:
      return {
        ...state,
        allFoods: state.allFoods.filter((item) => item.id !== action.payload),
      };
    case TOGGLE_FOOD: {
      const { id } = action.payload;
      const currentFood = state.allFoods[id];
      return {
        ...state,
        [id]: { ...currentFood, addedToList: !currentFood.addedToList },
      };
    }
    default:
      return state;
  }
};

import DEFAULT_FOODS from "./DEFAULT_FOODS";

/// Action Types

export const ADD_FOOD = "ADD_FOOD";
export const DELETE_FOOD = "DELETE_FOOD";
export const TOGGLE_FOOD = "TOGGLE_FOOD";

// Actions || Action Creators

export const addFood = (newFoodItem) => ({
  type: ADD_FOOD,
  payload: newFoodItem,
});

export const deleteFood = (id) => ({
  type: DELETE_FOOD,
  payload: id,
});

export const toggleFood = (id) => ({
  type: TOGGLE_FOOD,
  payload: id,
});

// Reducers

const initialState = {
  allFoods: DEFAULT_FOODS,
};

export const FoodsActions = (state = initialState, action) => {
  switch (action.type) {
    case ADD_FOOD:
      const { name, calories, amount, amountType } = action.payload;
      const newFood = {
        name,
        calories,
        amount,
        amountType,
        id: Math.random(),
      };
      return { ...state, allFoods: [...state.allFoods, newFood] };
    case DELETE_FOOD:
      return {
        ...state,
        allFoods: state.allFoods.filter((item) => item.id !== action.payload),
      };
    case TOGGLE_FOOD:
      const toggledFood = state.allFoods.filter((item) => item.id === action.payload);
      toggledFood.addedToList = !addedToList;
      return {
        ...state,
        allFoods: [...state.allFoods, toggledFood]
      };
    default:
      return state;
  }
};

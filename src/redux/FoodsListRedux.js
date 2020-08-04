import DEFAULT_FOODS from "./DEFAULT_FOODS";

/// Action Types

export const ADD_FOOD = "ADD_FOOD";
export const DELETE_FOOD = "DELETE_FOOD";
export const TOGGLE_FOOD = "TOGGLE_FOOD";
export const RESET_LIST = "RESET_LIST";

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

export const resetList = () => ({
  type: RESET_LIST,
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
        addedToList: false,
        id: Math.random(),
      };
      return { ...state, allFoods: [...state.allFoods, newFood] };
    case DELETE_FOOD:
      return {
        ...state,
        allFoods: state.allFoods.filter((item) => item.id !== action.payload),
      };
    case TOGGLE_FOOD:
      return {
        ...state,
        allFoods: state.allFoods.map((item) =>
          item.id === action.payload
            ? { ...item, addedToList: item.addedToList === true ? false : true }
            : item
        ),
      };
    case RESET_LIST:
      return {
        ...state,
        allFoods: state.allFoods.map((item) => (item.addedToList = false)),
      };
    default:
      return state;
  }
};

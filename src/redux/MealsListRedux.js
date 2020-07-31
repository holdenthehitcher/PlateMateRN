import MEAL_TEMPLATE from "./MEAL_TEMPLATE";

export const ADD_DAY = "ADD_DAY";
export const ADD_MEAL = "ADD_MEAL";
export const DELETE_MEAL = "DELETE_MEAL";

export const addFood = (newMeal) => ({
  type: ADD_MEAL,
  payload: newMeal,
});

export const deletemeal = (id) => ({
  type: DELETE_MEAL,
  payload: id,
});

const initialState = {
  mealList: MEAL_TEMPLATE,
};

export const MealsList = (state = initialState, action) => {
  switch (action.type) {
    case ADD_DAY:
      return { ...state, mealList: [action.payload] };
    case ADD_MEAL:
      const { calories, id } = action.payload;
      const newMeal = { calories, id };
      const addedMeal = mealList.date[(state.mealList, newMeal)];
      return { ...state, addedMeal };
    case DELETE_MEAL:
      return {
        ...state,
        mealList: state.mealList.filter((item) => item.id !== action.payload),
      };
    default:
      return state;
  }
};

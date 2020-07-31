import { createStore, applyMiddleware, combineReducers } from "redux";
import { ProfileActions } from "./ProfileStatsRedux";
import { FoodsActions } from "./FoodsListRedux";
import { MealsList } from "./MealsListRedux";

export const ConfigureStore = () => {
  const store = createStore(
    combineReducers({
      foodsActions: FoodsActions,
      profileActions: ProfileActions,
      mealsList: MealsList,
    })
  );

  return { store };
};

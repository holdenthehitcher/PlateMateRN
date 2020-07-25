import { createStore, applyMiddleware, combineReducers } from "redux";
import { ProfileActions } from "./ProfileStatsRedux";
import { FoodsActions } from "./FoodsListRedux";



export const ConfigureStore = () => {
  const store = createStore(
   combineReducers({
      allFoods: FoodsActions,
      stats: ProfileActions,
    })
  )

  return {store}
};
 
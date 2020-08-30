import AsyncStorage from "@react-native-community/async-storage";
import { createStore, combineReducers } from "redux";
import { persistStore, persistReducer } from "redux-persist";
import { ProfileActions } from "./ProfileStatsRedux";
import { FoodsActions } from "./FoodsListRedux";
import { MealsList } from "./MealsListRedux";

const persistConfig = {
  key: "root",
  storage: AsyncStorage,
};

const rootReducer = combineReducers({
  foodsActions: FoodsActions,
  profileActions: ProfileActions,
  mealsList: MealsList,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const ConfigureStore = () => {
  const store = createStore(persistedReducer);
  const persistor = persistStore(store);
  return { store, persistor };
};

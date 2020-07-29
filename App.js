import { StatusBar } from "expo-status-bar";
import React from "react";
import { SafeAreaProvider } from "react-native-safe-area-context";

import MainStackNavigator from "./src/navigation/MainStackNavigator";
import { Provider } from "react-redux";
import { ConfigureStore } from "./src/redux/ReduxStore";

const { store } = ConfigureStore();

export default function App() {
  return (
    <Provider store={store}>
      <SafeAreaProvider>
        <MainStackNavigator />
        <StatusBar />
      </SafeAreaProvider>
    </Provider>
  );
}

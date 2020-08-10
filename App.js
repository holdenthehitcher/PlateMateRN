import { StatusBar } from "expo-status-bar";
import React from "react";
import { SafeAreaProvider } from "react-native-safe-area-context";

import MainStackNavigator from "./src/navigation/MainStackNavigator";
import { Provider } from "react-redux";
import { ConfigureStore } from "./src/redux/ReduxStore";
import { PersistGate } from "redux-persist/integration/react";

const { store, persistor } = ConfigureStore();

export default function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <SafeAreaProvider>
          <MainStackNavigator />
          <StatusBar />
        </SafeAreaProvider>
      </PersistGate>
    </Provider>
  );
}

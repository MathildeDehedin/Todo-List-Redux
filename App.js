import React from "react";
import { StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { Provider as StateProvider } from "react-redux";
const Stack = createStackNavigator();
import ListScreen from "./src/screens/ListScreen";
import ModalScreen from "./src/screens/ModalScreen";
import store from "./src/redux/store";

export default function App() {
  return (
    <StateProvider store={store}>
      <NavigationContainer>
        <Stack.Navigator
          mode="modal"
          headerMode="none"
          screenOptions={{
            cardStyle: { backgroundColor: "transparent" },
            cardOverlayEnabled: true,
            cardStyleInterpolator: ({ current: { progress } }) => ({
              cardStyle: {
                opacity: progress.interpolate({
                  inputRange: [0, 0.5, 0.9, 1],
                  outputRange: [0, 0.25, 0.7, 1],
                }),
              },
              overlayStyle: {
                opacity: progress.interpolate({
                  inputRange: [0, 1],
                  outputRange: [0, 0.5],
                  extrapolate: "clamp",
                }),
              },
            }),
          }}
        >
          <Stack.Screen name="List" component={ListScreen} />
          <Stack.Screen name="Modal" component={ModalScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </StateProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

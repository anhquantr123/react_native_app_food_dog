import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { SafeAreaView, StyleSheet, Text, View, StatusBar } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import BottomTabNav from "./src/navigation/BottomTabNav";
import {
  CART_SCREEN,
  DETAIL_PRODUCT_SCREEN,
} from "./src/constants/screen-default";
import configureStore from "./src/redux/store/store";
import { Provider } from "react-redux";

const store = configureStore();
const Stack = createStackNavigator();
export default function App() {
  return (
    <Provider store={store}>
      <SafeAreaView style={styles.container}>
        <NavigationContainer>
          <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name="BottomTab" component={BottomTabNav} />
            <Stack.Screen
              name="DetailProduct"
              component={DETAIL_PRODUCT_SCREEN}
            />
            <Stack.Screen name="Cart" component={CART_SCREEN} />
          </Stack.Navigator>
        </NavigationContainer>
        <StatusBar barStyle="default" />
      </SafeAreaView>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});

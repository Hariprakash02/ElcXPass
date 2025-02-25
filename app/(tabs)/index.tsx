import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import ElcxScreen from "../(tabs)/screen"; 
import ElcXPassLogin from "../(tabs)/register";
import Homeindex from "../(tabs)/homeindex"; // Import Homeindex


export type RootStackParamList = {
  ElcxScreen: undefined;
  ElcXPassLogin: undefined;
  Homeindex: undefined;

};
const Stack = createStackNavigator<RootStackParamList>();

export default function App() {
  return (
    <Stack.Navigator initialRouteName="ElcxScreen">
      <Stack.Screen name="ElcxScreen" component={ElcxScreen} options={{ headerShown: false }} />
      <Stack.Screen name="ElcXPassLogin" component={ElcXPassLogin} options={{ headerShown: false }} />
      <Stack.Screen name="Homeindex" component={Homeindex}  options={{ headerShown: false }}  />

    </Stack.Navigator>
  );
}

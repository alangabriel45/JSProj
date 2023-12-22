const Stack = createNativeStackNavigator();
import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { useFonts } from "expo-font";
import Dashboard from "./screens/Dashboard";
import Account from "./screens/Account";
import Send from "./screens/Send";
import Account1 from "./screens/Account1";
import Events from "./screens/Events";
import Inbox from "./screens/Inbox";

import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { View, Text, Pressable, TouchableOpacity } from "react-native";

const App = () => {
  const [hideSplashScreen, setHideSplashScreen] = React.useState(true);

  const [fontsLoaded, error] = useFonts({
    "Tienne-Regular": require("./assets/fonts/Tienne-Regular.ttf"),
    "Tienne-Bold": require("./assets/fonts/Tienne-Bold.ttf"),
    Timmana: require("./assets/fonts/Timmana.ttf"),
    "Krub-ExtraLight": require("./assets/fonts/Krub-ExtraLight.ttf"),
  });

  if (!fontsLoaded && !error) {
    return null;
  }

  return (
    <>
      <NavigationContainer>
        {hideSplashScreen ? (
          <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen
              name="Dashboard"
              component={Dashboard}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Account"
              component={Account}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Send"
              component={Send}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Account1"
              component={Account1}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Events"
              component={Events}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Inbox"
              component={Inbox}
              options={{ headerShown: false }}
            />
          </Stack.Navigator>
        ) : null}
      </NavigationContainer>
    </>
  );
};
export default App;

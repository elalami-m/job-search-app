import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import React from "react";

// Screens :
import { Home } from "../screens";

const Stack = createNativeStackNavigator();

// ? Define new routes here :
// Routes :
const routes = [
  {
    name: "Home",
    component: Home,
  },
  // ...
];

const Navigation: React.FC = () => {
  return (
    <NavigationContainer>
      {/*                                //* "Home" */}
      <Stack.Navigator initialRouteName={routes[0].name}>
        {routes.map((route) => (
          <Stack.Screen name={route.name} component={route.component} />
        ))}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;

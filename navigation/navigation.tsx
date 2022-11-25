import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import React from "react";

// Screens :
import { About, Home, Login, Register } from "../screens";

const Stack = createNativeStackNavigator();

// ? Define new routes here :
// Routes :
const routes = [
  {
    name: "Home",
    component: Home,
  },
  {
    name: "About",
    component: About,
  },
  // authRoutes
  // ! Sorry for the name editing!
  {
    name: "Login",
    component: Login,
  },
  {
    name: "Register",
    component: Register,
  },
];

const Navigation: React.FC = () => {
  return (
    <NavigationContainer>
      {/*                                //* "Home" */}
      <Stack.Navigator
        screenOptions={{ headerShown: false }}
        initialRouteName={routes[0].name}
      >
        {routes.map((route) => (
          <Stack.Screen
            key={route.name}
            name={route.name}
            component={route.component}
          />
        ))}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;

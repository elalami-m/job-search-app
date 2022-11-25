import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import React from "react";

// Screens :
import { About, Home } from "../screens";

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
  // ...
];

const authRoutes = [
  {
    name: "Signin",
    component: "Signin"
  },
  {
    name: "Signup",
    component: "Signup"
  },
]

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

import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import React, { useState } from "react";

// Screens :
import { About, Auth, Home, Login, Register } from "../screens";

const Stack = createNativeStackNavigator();

// const AuthStack = createNativeStackNavigator();

// ? Define new routes here :
// RootRoutes :
const rootRoutes = [
  {
    name: "Home",
    component: Home,
  },
  {
    name: "About",
    component: About,
  },
];

// AuthRoutes
const authRoutes = [
  {
    name: "Auth",
    component: Auth,
  },
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
  let [user, setUser] = useState(null);

  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{ headerShown: user ? false : true }}
        initialRouteName={user ? rootRoutes[0].name : authRoutes[0].name}
      >
        {user //if user loged in :
          ? rootRoutes.map((route) => (
              <Stack.Screen
                key={route.name}
                name={route.name}
              component={route.component}
              
              />
            ))
          : // else render the auth stack
            authRoutes.map((route) => (
              <Stack.Screen
                options={{
                  headerShown:  false,
                }}
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

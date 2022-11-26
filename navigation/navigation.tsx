import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import React, { useState } from "react";

// Screens :
import { About, Home, Login, Register } from "../screens";

const RootStack = createNativeStackNavigator();

const AuthStack = createNativeStackNavigator();

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
    name: "Login",
    component: Login,
  },
  {
    name: "Register",
    component: Register,
  },
  
  
];

const Navigation: React.FC = () => {

  let [user, setUser] = useState(false)

  return (
    <NavigationContainer>
      {/*                                //* "Home" */}
      {
        user ? //if user loged in :
          (
            <RootStack.Navigator
              screenOptions={{ headerShown: false }}
              initialRouteName={rootRoutes[0].name}
            >
              {rootRoutes.map((route) => (
                <RootStack.Screen
                  key={route.name}
                  name={route.name}
                  component={route.component}
                />
              ))}
            </RootStack.Navigator>
          ) :
          // else render the auth stack
          (
            <AuthStack.Navigator
              screenOptions={{ headerShown: false }}
              initialRouteName={authRoutes[0].name}
            >
              {authRoutes.map((route) => (
                <AuthStack.Screen
                  key={route.name}
                  name={route.name}
                  component={route.component}
                />
              ))}
            </AuthStack.Navigator>
          )
      
      }
      
    </NavigationContainer>
  );
};

export default Navigation;

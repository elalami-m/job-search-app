import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { ParamListBase } from "@react-navigation/native";
import { AndroidSafeAreaView, GoBack } from "../components";
import { View, Text } from "react-native";
import React from "react";

type Props = {
  navigation: NativeStackNavigationProp<ParamListBase, "Login">;
};

const Login: React.FC<Props> = ({ navigation }) => {
  return (
    <AndroidSafeAreaView removePaddingTop>
      {/* <View className="flex-1 justify-start items-center bg-gray-200"> */}
      {/* <GoBack back={() => navigation.goBack()} /> */}
      <Text className="font-bold text-2xl">Login Page</Text>
      {/* </View> */}
    </AndroidSafeAreaView>
  );
};

export default Login;

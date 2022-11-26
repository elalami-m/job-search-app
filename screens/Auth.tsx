import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { ParamListBase } from "@react-navigation/native";
import { AndroidSafeAreaView } from "../components";
import { View, Text } from "react-native";
import { Button } from "@rneui/themed";
import { colors } from "../constant";
import React from "react";

type Props = {
  navigation: NativeStackNavigationProp<ParamListBase, "Auth">;
};

const Auth: React.FC<Props> = ({ navigation }) => {
  return (
    <AndroidSafeAreaView>
      <View className="flex-1 justify-center items-center bg-gray-200 py-8 px-3">
        <View className="flex-1 flex-row justify-center items-center bg-gray-200 p-4">
          <View className="flex-row justify-center items-center bg-gray-200 p-4">
            <Text className="font-bold text-3xl">
              Job<Text className="text-primary-600">y</Text> |{" "}
            </Text>
            <Text className="font-semibold text-base">Find opportunities</Text>
          </View>
        </View>

        <View className="flex-1 w-full justify-end items-center bg-gray-200 pb-8">
          <Button
            buttonStyle={{
              backgroundColor: colors.primary["600"],
              paddingHorizontal: 60,
              paddingVertical: 15,
            }}
            containerStyle={{
              marginTop: 10,
              width: "100%",
            }}
            onPress={() => navigation.navigate("Login")}
          >
            Login
          </Button>
          <Text className="text-lg">Or</Text>
          <Button
            onPress={() => navigation.navigate("Register")}
            buttonStyle={{
              backgroundColor: "transparent",
              borderColor: colors.primary["600"],
              borderWidth: 3,
              paddingHorizontal: 60,
              paddingVertical: 15,
            }}
            containerStyle={{
              marginTop: 10,
              width: "100%",
            }}
          >
            <Text className="text-primary-600 font-bold text-">Register</Text>
          </Button>
        </View>
      </View>
    </AndroidSafeAreaView>
  );
};

export default Auth;

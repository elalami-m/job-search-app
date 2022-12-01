import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { ParamListBase } from "@react-navigation/native";
import { AndroidSafeAreaView, GoBack, Header } from "../components";
import {
  View,
  Text,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  Keyboard,
  Platform,
} from "react-native";
import React from "react";

type Props = {
  navigation: NativeStackNavigationProp<ParamListBase, "Login">;
};

const Login: React.FC<Props> = ({ navigation }) => {
  return (
    <AndroidSafeAreaView removePaddingTop>
      <AndroidSafeAreaView className="flex flex-1 w-full px-2">
        <KeyboardAvoidingView
          behavior={Platform.OS === "ios" ? "padding" : "height"}
          className="flex-1"
        >
          <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
            <View className="flex-1">
              <Header
                leftComponent={<GoBack back={() => navigation.goBack()} />}
              />

              <View className="flex-1 p-4">
                <Text className="text-xl font-extrabold text-primary-600">
                  Joby
                </Text>
                <Text className="text-2xl font-bold mt-3">Registration</Text>
                <Text className="text-gray-400">
                  Let’s Register. Apply to jobs!
                </Text>
              </View>
            </View>
          </TouchableWithoutFeedback>
        </KeyboardAvoidingView>
      </AndroidSafeAreaView>
    </AndroidSafeAreaView>
  );
};

export default Login;

import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { ParamListBase } from "@react-navigation/native";
import {
  AndroidSafeAreaView,
  ButtonComponent,
  GoBack,
  Header,
  Line,
  TextInputComponent,
} from "../components";
import {
  View,
  Text,
  TextInput,
  Platform,
  ScrollView,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Keyboard,
  KeyboardAvoidingView,
} from "react-native";
import {
  Ionicons,
  MaterialCommunityIcons,
  Foundation,
  FontAwesome5,
  FontAwesome,
  AntDesign,
} from "@expo/vector-icons";
import { GoogleIcon } from "../components/icons/RegisterIcons";
import { Button } from "@rneui/base";
import React from "react";

type Props = {
  navigation: NativeStackNavigationProp<ParamListBase, "Register">;
};

const Register: React.FC<Props> = ({ navigation }) => {
  return (
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
              <Text className="text-2xl font-bold my-3">Registration</Text>
              <Text className="text-gray-400">
                Let’s Register. Apply to jobs!
              </Text>
              <ScrollView className="mt-8 space-y-4">
                <View>
                  <TextInputComponent
                    placeholder="Full Name"
                    className="border-[1px] border-gray-300  h-12 rounded-lg"
                    leftIcon={
                      <AntDesign name="user" size={19} color="#d1d5dd" />
                    }
                  />
                </View>
                <View>
                  <TextInputComponent
                    placeholder="E-mail"
                    className="border-[1px] border-gray-300  h-12 rounded-lg"
                    leftIcon={
                      <MaterialCommunityIcons
                        name="email-outline"
                        size={19}
                        color="#d1d5dd"
                      />
                    }
                  />
                </View>
                <View>
                  <TextInputComponent
                    placeholder="Password"
                    className="border-[1px] border-gray-300  h-12 rounded-lg"
                    password
                    leftIcon={
                      <Foundation name="key" size={19} color="#d1d5dd" />
                    }
                  />
                </View>
                <View>
                  <TextInputComponent
                    placeholder="Confirm Password"
                    className="border-[1px] border-gray-300  h-12 rounded-lg"
                    password
                    leftIcon={
                      <Foundation name="key" size={19} color="#d1d5dd" />
                    }
                  />
                </View>
                <View>
                  <ButtonComponent
                    title="Register"
                    className="bg-primary-600 mt-4 h-[50px] justify-center rounded-md"
                    titleStyle="text-white"
                  />
                </View>
                <View>
                  <Line contentText="Or continue with" />
                </View>
                <View className="flex flex-row justify-between px-9 pt-3">
                  <TouchableOpacity className="w-12 h-12 bg-gray-50 rounded-full justify-center items-center">
                    <FontAwesome name="apple" size={26} color="black" />
                  </TouchableOpacity>
                  <TouchableOpacity className="w-12 h-12 bg-gray-50 rounded-full justify-center items-center"></TouchableOpacity>
                  <TouchableOpacity className="w-12 h-12 bg-gray-50 rounded-full justify-center items-center">
                    <FontAwesome5 name="facebook" size={26} color="#395185" />
                  </TouchableOpacity>
                </View>
                <View className="flex flex-row justify-center space-x-2 pt-5">
                  <Text className="text-gray-400">Have an account?</Text>
                  <TouchableOpacity onPress={() => navigation.push("Login")}>
                    <Text className="text-primary-600">Log in</Text>
                  </TouchableOpacity>
                </View>
              </ScrollView>
            </View>
          </View>
        </TouchableWithoutFeedback>
      </KeyboardAvoidingView>
    </AndroidSafeAreaView>
  );
};

export default Register;

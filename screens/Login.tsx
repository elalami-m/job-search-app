import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { MaterialCommunityIcons, FontAwesome } from "@expo/vector-icons";
import { ParamListBase } from "@react-navigation/native";
import {
  AndroidSafeAreaView,
  GoBack,
  Header,
  Line,
  TextInputComponent,
} from "../components";

import {
  View,
  Text,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  Keyboard,
  Platform,
  ScrollView,
  TouchableOpacity,
} from "react-native";

import { colors } from "../constant";
import { Button } from "@rneui/themed";
import React from "react";

type Props = {
  navigation: NativeStackNavigationProp<ParamListBase, "Login">;
};

const Login: React.FC<Props> = ({ navigation }) => {
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
              <Text className="text-2xl font-bold my-3">Welcom Back</Text>
              <Text className="text-gray-400">Let’s login. Apply to jobs!</Text>
              <ScrollView className=" mt-8 space-y-4">
                <View>
                  <TextInputComponent
                    className="border-[1px] my-2 border-gray-300 rounded-lg"
                    placeholder="E-mail"
                    leftIcon={
                      <MaterialCommunityIcons
                        name="email-outline"
                        size={19}
                        color={colors.gray[300]}
                      />
                    }
                  />
                  <TextInputComponent
                    className="border-[1px] my-2 border-gray-300 rounded-lg"
                    placeholder="Password"
                    password
                    leftIcon={
                      <MaterialCommunityIcons
                        color={colors.gray[300]}
                        name="lock"
                        size={19}
                      />
                    }
                  />

                  <Button
                    containerStyle={{
                      marginVertical: 30,
                      borderRadius: 5,
                      elevation: 4,
                    }}
                    buttonStyle={{
                      paddingVertical: 20,
                      backgroundColor: colors.primary[600],
                    }}
                  >
                    Login
                  </Button>
                  <TouchableOpacity
                  onPress={()=>navigation.navigate('ForgotPass')}
                  >
                  <Text className="my-3 text-center font-semibold text-primary-0">
                    Forgot Password?
                  </Text>
                    </TouchableOpacity>
                  <Line className="my-8" contentText="Or continue with" />

                  <View className="flex flex-row justify-between py-3 px-10 my-4">
                    <TouchableOpacity className="w-12 h-12 bg-gray-50 shadow-sm rounded-full justify-center items-center">
                      <FontAwesome name="apple" size={26} color="black" />
                    </TouchableOpacity>

                    <TouchableOpacity className="w-12 h-12 bg-gray-50 shadow-sm rounded-full justify-center items-center">
                      <FontAwesome name="google" size={26} color="black" />
                    </TouchableOpacity>

                    <TouchableOpacity className="w-12 h-12 bg-gray-50 shadow-sm rounded-full justify-center items-center">
                      <FontAwesome name="facebook" size={26} color="#395185" />
                    </TouchableOpacity>
                  </View>
                  <View className="flex flex-row justify-center space-x-2 pt-5">
                    <Text className="text-gray-400">Haven't an account?</Text>
                    <TouchableOpacity
                      onPress={() => navigation.navigate("Register")}
                    >
                      <Text className="text-primary-600">Register</Text>
                    </TouchableOpacity>
                  </View>
                </View>
              </ScrollView>
            </View>
          </View>
        </TouchableWithoutFeedback>
      </KeyboardAvoidingView>
    </AndroidSafeAreaView>
  );
};

export default Login;

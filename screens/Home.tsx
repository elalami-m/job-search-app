import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { ParamListBase } from "@react-navigation/native";
import { AndroidSafeAreaView } from "../components";
import { View, Text, TouchableOpacity } from "react-native";
import React from "react";

type Props = {
  navigation: NativeStackNavigationProp<ParamListBase, "Home">;
};

const Home: React.FC<Props> = ({ navigation }) => {
  return (
    <AndroidSafeAreaView>
      <View className="flex-1 justify-center items-center bg-gray-200 p-4">
        <Text className="font-bold text-2xl">Home</Text>
        <TouchableOpacity
          className="bg-primary-500 px-8 py-3 rounded mt-5"
          onPress={() => navigation.navigate("About")}
        >
          <Text className="text-white font-bold text-2xl">About</Text>
        </TouchableOpacity>
        <TouchableOpacity
          className="bg-primary-500 px-8 py-3 rounded mt-5"
          onPress={() => navigation.navigate("Register")}
        >
          <Text className="text-white font-bold text-2xl">Register</Text>
        </TouchableOpacity>

        {/* Login */}
        <TouchableOpacity
          className="bg-primary-500 px-8 py-3 rounded mt-5"
          onPress={() => navigation.navigate("Login")}
        >
          <Text className="text-white font-bold text-2xl">Login</Text>
        </TouchableOpacity>
      </View>
    </AndroidSafeAreaView>
  );
};

export default Home;

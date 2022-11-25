import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { View, Text, TouchableOpacity } from "react-native";
import { ParamListBase } from "@react-navigation/native";
import { AndroidSafeAreaView } from "../components";
import React from "react";

type Props = {
  navigation: NativeStackNavigationProp<ParamListBase, "About">;
};

const About: React.FC<Props> = ({ navigation }) => {
  return (
    <AndroidSafeAreaView>
      <View className="flex-1 justify-center items-center bg-gray-200 p-4">
        <Text className="font-bold text-2xl">About Page</Text>
        <TouchableOpacity
          className="bg-primary-300 px-8 py-3 rounded mt-5"
          onPress={() => navigation.navigate("Home")}
        >
          <Text className="text-white font-bold text-2xl">Home</Text>
        </TouchableOpacity>
      </View>
    </AndroidSafeAreaView>
  );
};

export default About;
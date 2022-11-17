import AndroidSafeAreaView from "../components/AndroidSafeAreaView";
import { View, Text } from "react-native";
import React from "react";

type Props = {};

const Home: React.FC<Props> = (props) => {
  return (
    <AndroidSafeAreaView>
      <View className="flex-1 justify-center items-center bg-gray-200 p-4">
        <Text className="font-bold text-2xl">Home</Text>
      </View>
    </AndroidSafeAreaView>
  );
};

export default Home;

import { View, Text } from "react-native";
import React from "react";

type Props = {
  contentText: string;
  className?: string;
};

const Line: React.FC<Props> = ({ contentText, className }) => {
  return (
    <View className={`my-2 ${className ?? ""}`}>
      <View className="flex-row mt-4 w-full justify-between items-center">
        <View className="flex-row flex-1 border-[0.25px] h-0 border-gray-400" />
        <Text className="px-5 text-center text-gray-400">{contentText}</Text>
        <View className="flex-row flex-1 border-[0.25px] h-0 border-gray-400" />
      </View>
    </View>
  );
};

export default Line;

import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { ParamListBase } from "@react-navigation/native";
import { AndroidSafeAreaView } from "../components";
import { View, Text } from "react-native";
import React from "react";

type Props = {
    contentText?: string
};

const Line: React.FC<Props> = ({
    contentText
}) => {
    return (
        <View className="flex">
            <View className="flex flex-row mt-4 w-full justify-between">
                <View className="border-[0.3px] h-0 border-gray-400 w-1/4 mt-3"></View>
                <Text className="w-2/4 text-center text-gray-400">{contentText}</Text>
                <View className="border-[0.3px] h-0 border-gray-400 w-1/4 mt-3"></View>
            </View>
        </View>
    );
};

export default Line;
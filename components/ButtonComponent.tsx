import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { ParamListBase } from "@react-navigation/native";
import { AndroidSafeAreaView } from "../components";
import { View, Text, TouchableOpacity } from "react-native";
import React from "react";

type Props = {
    title: string
    className?: string,
    titleStyle?:string
}

const ButtonComponent: React.FC<Props> = ({
    title,
    className,
    titleStyle
}) => {
  return (
    <TouchableOpacity className={`items-center ${className}`}>
          <Text className={titleStyle}>{ title }</Text>
    </TouchableOpacity>
  );
};

export default ButtonComponent;
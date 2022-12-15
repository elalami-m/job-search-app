import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { ParamListBase } from "@react-navigation/native";
import { AndroidSafeAreaView } from "../components";
import { View, Text, TouchableOpacity, TouchableNativeFeedback, Pressable, GestureResponderEvent } from "react-native";
import React, { useState } from "react";






type Props = {
  title: string
  className?: string,
  titleStyle?: string,
  onPress?: (event: GestureResponderEvent) => void
};

const ButtonComponent: React.FC<Props> = ({
    title,
    className,
  titleStyle,
    onPress
}) => {

  return (
    <Pressable
      className={`items-center ${className}`}
      android_ripple={{ color: "white" }}
      onPress={onPress}
      >
          <Text className={titleStyle}>{ title }</Text>
      </Pressable>

  );
};


export default ButtonComponent;
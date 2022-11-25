import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { ParamListBase } from "@react-navigation/native";
import { Button, Icon } from "@rneui/themed";
import { View, Text } from "react-native";
import React from "react";

type Props = {
  navigation: NativeStackNavigationProp<ParamListBase, "GoBack">;
};

const GoBack: React.FC<Props> = ({ navigation }) => {
  return (
    <View className="flex justify-start items-center p-4">
      <Button>
        {/* TODO: Add Arrow Left Icon */}
        <Icon name="keyboard_arrow_left" type="material" />
        <Text className="font-bold text-2xl">back</Text>
      </Button>
    </View>
  );
};

export default GoBack;

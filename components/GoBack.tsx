import { Button, Icon } from "@rneui/themed";
import { View, Text } from "react-native";
import React from "react";

type Props = {
  back: () => void;
};

const GoBack: React.FC<Props> = ({ back }) => {
  return (
    <Button
      onPress={() => back()}
      buttonStyle={{ backgroundColor: "#f3f4f6", width: "100%" }}
      containerStyle={{ width: "100%" }}
    >
      <View className="w-full flex flex-row justify-start items-center">
        {/* TODO: Add Arrow Left Icon */}
        <Icon
          size={40}
          color={"rgb(55, 65, 81)"}
          name="keyboard-arrow-left"
          type="material"
        />
        <Text className="font-bold text-2xl text-gray-700">back</Text>
      </View>
    </Button>
  );
};

export default GoBack;

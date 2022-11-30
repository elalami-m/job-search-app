import { Button, Icon } from "@rneui/themed";
import { View, Text, TouchableOpacity } from "react-native";
import React from "react";

type Props = {
  back: () => void;
};

const GoBack: React.FC<Props> = ({ back }) => {
  return (
    <TouchableOpacity
      onPress={() => back()}
    >
      <View className="w-full flex flex-row justify-start items-center">
        {/* TODO: Add Arrow Left Icon */}
        <Icon
          size={35}
          color={"rgb(55, 65, 81)"}
          name="keyboard-arrow-left"
          type="material"
        />
      </View>
    </TouchableOpacity>
  );
};

export default GoBack;

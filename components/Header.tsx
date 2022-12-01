import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { ParamListBase, useNavigation } from "@react-navigation/native";
import { AndroidSafeAreaView, GoBack } from "../components";
import { View, Text, StatusBar, TouchableOpacity } from "react-native";
import { Header as HeaderRN } from "@rneui/base";
import React, { FunctionComponent, ReactElement } from "react";

type Props = {
  backgroundColor?: string;
  height?: string;
  leftComponent?: JSX.Element | ReactElement | FunctionComponent;
  midComponent?: JSX.Element | ReactElement | FunctionComponent;
  rightComponent?: JSX.Element | ReactElement | FunctionComponent;
};

const Header: React.FC<Props> = ({
  leftComponent,
  midComponent,
  rightComponent,
  backgroundColor,
  height,
}) => {
  // console.log(typeof(leftComponent));

  let navigation = useNavigation();
  return (
    <View
      className={`flex  flex-row  justify-between w-full py-2 ${backgroundColor} ${height}`}
    >
      <View className={leftComponent == undefined ? "w-8" : ""}>
        {typeof leftComponent === "function"
          ? leftComponent({})
          : leftComponent}
      </View>

      <View>
        {typeof midComponent === "function" ? midComponent({}) : midComponent}
      </View>
      <View className={rightComponent == undefined ? "w-8" : ""}>
        {typeof rightComponent === "function"
          ? rightComponent({})
          : rightComponent}
      </View>
    </View>
  );
};

export default Header;

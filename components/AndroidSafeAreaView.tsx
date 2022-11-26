import { SafeAreaView, Platform, StatusBar, StyleSheet } from "react-native";
import React from "react";

type Props = {
  children: JSX.Element | JSX.Element[];
  className?: string;
  removePaddingTop?: boolean;
};

const AndroidSafeAreaView: React.FC<Props> = ({
  children,
  removePaddingTop,
  className,
}) => {
  return (
    <SafeAreaView
      style={!removePaddingTop && styles.AndroidSafeAreaView}
      className={className ?? ""}
    >
      {children}
    </SafeAreaView>
  );
};

export default AndroidSafeAreaView;

const styles = StyleSheet.create({
  AndroidSafeAreaView: {
    flex: 1,
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
});

import React from "react";
import { View } from "react-native";

const Views = () => {
  return (
    <View
      style={{
        height: 200,
        width: 200,
        borderRadius: 20,
        backgroundColor: "#02622f",
        alignItems: "center",
        justifyContent: "center",
      }}
      accessibilityLabel="sky #000000"
      pointerEvents="box-only"
      nativeID=" box-01"
    ></View>
  );
};

export default Views;

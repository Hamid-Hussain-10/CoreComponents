import { Pressable, StyleSheet, Text } from "react-native";
import React from "react";

const Pressablebtn = () => {
  return (
    <Pressable
      onPress={() => alert("Press")}
      onLongPress={() => alert("Long Press")}
      style={({ pressed }) => ({
        backgroundColor: pressed ? "#106834" : "#035472",
        padding: 10,
        borderRadius: 8,
        margin: 10,
        pointerEvents: 'box-only',
      })}
      android_ripple={{ color: "#fff" }}
    >
      {({ pressed }) => (
        <Text style={[styles.btn, { color: pressed ? "#fff" : "#fff" }]}>
          Press Me
        </Text>
      )}
    </Pressable>
  );
};

export default Pressablebtn;

const styles = StyleSheet.create({
  btn: {
    textAlign: "center",
    fontWeight: "600",
    fontSize: 16,
  },
});

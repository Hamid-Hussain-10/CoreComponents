import { StyleSheet, TouchableOpacity, View, Text } from "react-native";
import React from "react";

const Touchalbeopacity = () => {
  return (
    <View>
      <TouchableOpacity
        style={styles.button}
        onPress={() => alert("Button Pressed")}
        activeOpacity={0.6}
        hitSlop={{ top: 10, bottom: 10, left: 10, right: 10 }}
      >
        <Text style={{ color: "#fff", textAlign: "center" }}>Click Me</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Touchalbeopacity;

const styles = StyleSheet.create({
  button: {
    backgroundColor: "#84852c",
    padding: 12,
    borderRadius: 8,
    margin: 10,
  },
});

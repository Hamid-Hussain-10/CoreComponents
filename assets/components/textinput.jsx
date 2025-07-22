import { useState } from "react";
import { StyleSheet, View, TextInput } from "react-native";

const TextInputComp = () => {
  const [text, setText] = useState("");

  return (
    <View>
      <TextInput
        value={text}
        onChangeText={setText}
        placeholder="Enter text"
        keyboardType="default"
        secureTextEntry={true}
        autoFocus
        style={styles.textInput}
      />
    </View>
  );
};

export default TextInputComp;

const styles = StyleSheet.create({
  textInput: {
    borderWidth: 1,
    borderColor: 'gray',
    padding: 10,
    margin: 10,
    borderRadius: 5,
  },
});

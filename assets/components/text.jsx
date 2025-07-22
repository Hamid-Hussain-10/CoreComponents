import { StyleSheet, Text, View } from "react-native";

const text = () => {
  return (
    <View>
      <Text
        numberOfLines={5}
        ellipsizeMode="tail"
        selectable
        textBreakStrategy="highQuality"
        onPress={() => alert("Text Pressed")}
        style={styles.container}
      >
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis amet
        molestiae consequatur obcaecati, animi inventore corporis atque nisi
        quod ipsum?
      </Text>
    </View>
  );
};

export default text;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: 200,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 40,
    paddingVertical: 15,
  },
});

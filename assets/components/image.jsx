import { StyleSheet, View, Image } from "react-native"; // Import Image here
import React from "react";

const MyImage = () => {
  return (
    <View>
      <Image
        source={require("../images/Screens.png")}
        style={styles.img}
        resizeMode="cover"
        onLoad={() => alert("Image Loaded")}
        onError={() => alert("Image Error")}
        blurRadius={0}
      />
    </View>
  );
};

export default MyImage;

const styles = StyleSheet.create({
  img: {
    width: 350,
    height: 450,
    borderRadius: 10,
  },
});

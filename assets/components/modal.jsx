import React, { useState } from "react";
import { Button, Modal, Text, View } from "react-native";

const CustomModal = () => {
  const [visible, setVisible] = useState(false);

  return (
    <View style={{ marginTop: 10 }}>
      <Button title="Show Modal" onPress={() => setVisible(true)} />
      <Modal
        visible={visible}
        animationType="slide"
        transparent
        onRequestClose={() => setVisible(false)}
        statusBarTranslucent
      >
        <View
          style={{
            flex: 1,
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "#000000aa",
          }}
        >
          <View
            style={{ backgroundColor: "#fff", padding: 20, borderRadius: 10 }}
          >
            <Text>This is a Modal</Text>
            <Button title="Close" onPress={() => setVisible(false)} />
          </View>
        </View>
      </Modal>
    </View>
  );
};
export default CustomModal;

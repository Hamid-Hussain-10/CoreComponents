import { View } from "react-native";
// import TextInputComp from "../assets/components/textinput";
// import Scrollable from "../assets/components/scrollView";
// import Touchalbeopacity from "../assets/components/touchalbeopacity";
import Image from "../assets/components/image";
import Pressablebtn from "../assets/components/pressable";
import CustomModal from "../assets/components/modal";


export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Pressablebtn />
      {/* <TextInputComp />
      <Touchalbeopacity />
      <Scrollable /> */}
      <Image />
      <CustomModal />
    </View>
  );
}

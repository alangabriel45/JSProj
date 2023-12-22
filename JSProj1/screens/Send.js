import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, View, Pressable, Text } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Color, FontFamily, Border, FontSize } from "../GlobalStyles";

const Send = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.send}>
      <Image
        style={[styles.image1Icon, styles.sendChildLayout]}
        contentFit="cover"
        source={require("../assets/image-1.png")}
      />
      <View style={[styles.sendChild, styles.sendChildPosition]} />
      <Pressable
        style={[styles.left, styles.leftPosition]}
        onPress={() => navigation.navigate("Dashboard")}
      >
        <Image
          style={styles.icon}
          contentFit="cover"
          source={require("../assets/left.png")}
        />
      </Pressable>
      <Text style={[styles.send1, styles.textTypo]}>Send</Text>
      <View style={[styles.sendItem, styles.sendItemLayout]} />
      <View style={[styles.sendInner, styles.sendLayout]} />
      <Text style={[styles.sendTo, styles.sendToTypo]}>Send to</Text>
      <Text style={[styles.enterIdNumber, styles.pLayout]}>
        Enter Id Number
      </Text>
      <View style={[styles.rectangleView, styles.sendItemLayout]} />
      <View style={[styles.sendChild1, styles.sendLayout]} />
      <Text style={[styles.text, styles.pLayout]}>00.0</Text>
      <Text style={[styles.amount, styles.sendToTypo]}>Amount</Text>
      <View style={styles.sendChild2} />
      <Text style={styles.messageOptional}>
        <Text style={styles.message}>{`Message `}</Text>
        <Text style={styles.optional}>(Optional)</Text>
      </Text>
      <View style={styles.sendChild3} />
      <Text style={[styles.p, styles.pTypo]}>P</Text>
      <View style={[styles.sendChild4, styles.sendChildPosition]} />
      <Text style={[styles.send2, styles.pTypo]}>Send</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  sendChildLayout: {
    width: 360,
    top: 0,
  },
  sendChildPosition: {
    backgroundColor: Color.colorRoyalblue,
    left: "50%",
    position: "absolute",
  },
  leftPosition: {
    left: 0,
    position: "absolute",
  },
  textTypo: {
    textAlign: "left",
    fontFamily: FontFamily.kantumruy,
    fontWeight: "700",
    position: "absolute",
  },
  sendItemLayout: {
    borderRadius: Border.br_10xl,
    position: "absolute",
    backgroundColor: Color.colorWhite,
  },
  sendLayout: {
    height: 54,
    width: 244,
    borderWidth: 1,
    borderColor: Color.colorBlack,
    borderStyle: "solid",
    borderRadius: Border.br_5xs,
    marginLeft: -122,
    left: "50%",
    position: "absolute",
    backgroundColor: Color.colorWhite,
  },
  sendToTypo: {
    height: 14,
    width: 52,
    color: Color.colorBlack,
    fontSize: FontSize.size_xs,
    textAlign: "left",
    fontFamily: FontFamily.kantumruy,
    fontWeight: "700",
    position: "absolute",
  },
  pLayout: {
    height: 18,
    color: Color.colorDimgray_100,
  },
  pTypo: {
    fontSize: FontSize.size_lg,
    textAlign: "left",
    fontFamily: FontFamily.kantumruy,
    fontWeight: "700",
    position: "absolute",
  },
  image1Icon: {
    left: 0,
    position: "absolute",
    height: 800,
  },
  sendChild: {
    marginLeft: -180,
    height: 71,
    width: 360,
    top: 0,
  },
  icon: {
    height: "100%",
    width: "100%",
  },
  left: {
    width: 64,
    height: 49,
    top: 11,
  },
  send1: {
    marginLeft: -43,
    fontSize: FontSize.size_10xl,
    width: 86,
    height: 44,
    color: Color.colorWhite,
    left: "50%",
    top: 11,
  },
  sendItem: {
    marginLeft: -165,
    top: 118,
    width: 331,
    height: 196,
    left: "50%",
    borderRadius: Border.br_10xl,
  },
  sendInner: {
    top: 160,
  },
  sendTo: {
    top: 139,
    left: 63,
  },
  enterIdNumber: {
    top: 176,
    left: 81,
    width: 111,
    fontSize: FontSize.size_xs,
    textAlign: "left",
    fontFamily: FontFamily.kantumruy,
    fontWeight: "700",
    position: "absolute",
  },
  rectangleView: {
    top: 321,
    left: 18,
    width: 328,
    height: 327,
  },
  sendChild1: {
    top: 358,
  },
  text: {
    top: 373,
    left: 83,
    width: 27,
    fontSize: FontSize.size_xs,
    textAlign: "left",
    fontFamily: FontFamily.kantumruy,
    fontWeight: "700",
    position: "absolute",
  },
  amount: {
    top: 337,
    left: 67,
  },
  sendChild2: {
    top: 438,
    height: 174,
    width: 244,
    borderWidth: 1,
    borderColor: Color.colorBlack,
    borderStyle: "solid",
    borderRadius: Border.br_5xs,
    marginLeft: -122,
    left: "50%",
    position: "absolute",
    backgroundColor: Color.colorWhite,
  },
  message: {
    fontSize: FontSize.size_xs,
  },
  optional: {
    fontSize: FontSize.size_5xs,
  },
  messageOptional: {
    top: 416,
    width: 128,
    height: 32,
    left: 67,
    color: Color.colorBlack,
    textAlign: "left",
    fontFamily: FontFamily.kantumruy,
    fontWeight: "700",
    position: "absolute",
  },
  sendChild3: {
    top: 380,
    backgroundColor: Color.colorDimgray_100,
    width: 12,
    height: 2,
    left: 67,
    position: "absolute",
  },
  p: {
    top: 368,
    width: 9,
    left: 67,
    height: 18,
    color: Color.colorDimgray_100,
  },
  sendChild4: {
    marginLeft: -70,
    top: 666,
    borderRadius: 21,
    width: 135,
    height: 40,
  },
  send2: {
    marginLeft: -29,
    top: 671,
    width: 53,
    height: 21,
    color: Color.colorWhite,
    left: "50%",
  },
  send: {
    flex: 1,
    overflow: "hidden",
    height: 800,
    width: "100%",
    backgroundColor: Color.colorWhite,
  },
});

export default Send;

import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, View, Pressable, Text } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Color, FontFamily, FontSize } from "../GlobalStyles";

const Account = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.account}>
      <Image
        style={[styles.image1Icon, styles.accountPosition]}
        contentFit="cover"
        source={require("../assets/image-1.png")}
      />
      <View style={styles.accountChild} />
      <View style={[styles.accountItem, styles.accountPosition]} />
      <Pressable
        style={styles.left}
        onPress={() => navigation.navigate("Account1")}
      >
        <Image
          style={styles.icon}
          contentFit="cover"
          source={require("../assets/left.png")}
        />
      </Pressable>
      <View style={[styles.accountInner, styles.accountInnerPosition]} />
      <View style={[styles.rectangleView, styles.accountInnerPosition]} />
      <View style={[styles.accountChild1, styles.accountPosition]} />
      <Image
        style={styles.groupIcon}
        contentFit="cover"
        source={require("../assets/group-23.png")}
      />
      <Text style={styles.pn}>PN</Text>
      <Text style={styles.pogiSigeNa}>Pogi Sige Na</Text>
      <Text style={styles.text}>123456789</Text>
      <Text style={[styles.birthdate, styles.emailTypo]}>Birthdate</Text>
      <Text style={[styles.nationality, styles.emailTypo]}>Nationality</Text>
      <Text style={[styles.email, styles.emailTypo]}>Email</Text>
      <Text style={[styles.currentAddress, styles.emailTypo]}>
        Current Address
      </Text>
      <Text style={[styles.january12023, styles.lapuTypo]}>
        January 1, 2023
      </Text>
      <Text style={[styles.pogisigenagmailcom, styles.lapuTypo]}>
        pogisigena@gmail.com
      </Text>
      <Text style={[styles.filipino, styles.lapuTypo]}>Filipino</Text>
      <Text style={[styles.gwapoNiLapuLapu, styles.lapuTypo]}>
        Gwapo Ni Lapu-Lapu City
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  accountPosition: {
    width: 384,
    left: 0,
    position: "absolute",
  },
  accountInnerPosition: {
    top: 105,
    width: 384,
    left: 0,
    position: "absolute",
  },
  emailTypo: {
    color: Color.colorDimgray_200,
    left: 30,
    height: 16,
    fontFamily: FontFamily.tienneRegular,
    fontSize: FontSize.size_xs,
    textAlign: "left",
    position: "absolute",
  },
  lapuTypo: {
    height: 24,
    left: 43,
    color: Color.colorDimgray_200,
    fontFamily: FontFamily.tienneRegular,
    textAlign: "left",
    fontSize: FontSize.size_lg,
    position: "absolute",
  },
  image1Icon: {
    top: 0,
    width: 360,
    left: 0,
    height: 800,
  },
  accountChild: {
    marginLeft: -192,
    backgroundColor: Color.colorRoyalblue,
    height: 838,
    left: "50%",
    width: 384,
    top: 0,
    position: "absolute",
  },
  accountItem: {
    backgroundColor: "#507fc6",
    height: 63,
    top: 0,
    width: 360,
    left: 0,
  },
  icon: {
    height: "100%",
    width: "100%",
  },
  left: {
    left: -2,
    top: 8,
    width: 64,
    height: 49,
    position: "absolute",
  },
  accountInner: {
    backgroundColor: "#c8d7ec",
    height: 695,
  },
  rectangleView: {
    height: 96,
    backgroundColor: Color.colorWhite,
  },
  accountChild1: {
    top: 268,
    height: 325,
    backgroundColor: Color.colorWhite,
  },
  groupIcon: {
    top: 80,
    left: 155,
    width: 50,
    height: 50,
    position: "absolute",
  },
  pn: {
    top: 93,
    left: 167,
    fontWeight: "700",
    fontFamily: FontFamily.tienneBold,
    width: 33,
    height: 23,
    textAlign: "left",
    color: Color.colorBlueviolet,
    fontSize: FontSize.size_lg,
    position: "absolute",
  },
  pogiSigeNa: {
    marginLeft: -39,
    top: 137,
    width: 78,
    height: 16,
    fontSize: FontSize.size_xs,
    fontFamily: FontFamily.tienneRegular,
    textAlign: "left",
    color: Color.colorBlueviolet,
    left: "50%",
    position: "absolute",
  },
  text: {
    marginLeft: -19,
    top: 159,
    fontSize: 7,
    width: 39,
    height: 9,
    fontFamily: FontFamily.tienneRegular,
    textAlign: "left",
    color: Color.colorBlueviolet,
    left: "50%",
    position: "absolute",
  },
  birthdate: {
    top: 291,
    width: 67,
  },
  nationality: {
    top: 355,
    width: 82,
  },
  email: {
    top: 416,
    width: 36,
  },
  currentAddress: {
    top: 480,
    width: 106,
  },
  january12023: {
    top: 315,
    width: 145,
  },
  pogisigenagmailcom: {
    top: 447,
    textDecoration: "underline",
    width: 208,
  },
  filipino: {
    top: 382,
    width: 77,
  },
  gwapoNiLapuLapu: {
    top: 512,
    width: 242,
  },
  account: {
    flex: 1,
    overflow: "hidden",
    height: 800,
    width: "100%",
    backgroundColor: Color.colorWhite,
  },
});

export default Account;

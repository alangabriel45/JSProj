import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, View, Text, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Color, FontFamily, FontSize } from "../GlobalStyles";

const Account1 = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.account}>
      <Image
        style={[styles.image1Icon, styles.accountLayout]}
        contentFit="cover"
        source={require("../assets/image-1.png")}
      />
      <View style={[styles.accountChild, styles.accountLayout]} />
      <Pressable
        style={[styles.maskGroupParent, styles.groupPosition]}
        onPress={() => navigation.navigate("Dashboard")}
      >
        <Image
          style={[styles.maskGroupIcon, styles.iconPosition]}
          contentFit="cover"
          source={require("../assets/mask-group.png")}
        />
        <Text style={[styles.home, styles.homeTypo]}>Home</Text>
      </Pressable>
      <Pressable
        style={[styles.maskGroupGroup, styles.maskGroupLayout]}
        onPress={() => navigation.navigate("Events")}
      >
        <Image
          style={[styles.maskGroupIcon, styles.iconPosition]}
          contentFit="cover"
          source={require("../assets/mask-group1.png")}
        />
        <Text style={[styles.events, styles.eventsTypo]}>Events</Text>
      </Pressable>
      <View style={[styles.maskGroupContainer, styles.forwardIconPosition]}>
        <Image
          style={[styles.maskGroupIcon, styles.iconPosition]}
          contentFit="cover"
          source={require("../assets/mask-group2.png")}
        />
        <Text style={[styles.account1, styles.eventsTypo]}>Account</Text>
      </View>
      <Pressable
        style={[styles.groupPressable, styles.groupPosition]}
        onPress={() => navigation.navigate("Inbox")}
      >
        <Image
          style={[styles.maskGroupIcon, styles.iconPosition]}
          contentFit="cover"
          source={require("../assets/mask-group3.png")}
        />
        <Text style={[styles.inbox, styles.homeTypo]}>Inbox</Text>
      </Pressable>
      <View style={[styles.accountItem, styles.groupChildBg]} />
      <View style={styles.accountInner} />
      <Pressable
        style={[styles.rectangleParent, styles.groupChildLayout]}
        onPress={() => navigation.navigate("Account")}
      >
        <View style={[styles.groupChild, styles.groupChildLayout]} />
        <Image
          style={styles.circledUserMaleSkinType7}
          contentFit="cover"
          source={require("../assets/circled-user-male-skin-type-7.png")}
        />
        <Image
          style={[styles.forwardIcon, styles.forwardIconPosition]}
          contentFit="cover"
          source={require("../assets/forward.png")}
        />
        <Text style={[styles.pogiSigeName, styles.textTypo]}>
          Pogi Sige Name
        </Text>
        <Text style={[styles.text, styles.textTypo]}>123456789</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  accountLayout: {
    width: 384,
    position: "absolute",
  },
  groupPosition: {
    top: 780,
    position: "absolute",
  },
  iconPosition: {
    top: 0,
    left: 0,
  },
  homeTypo: {
    height: 13,
    textAlign: "left",
    color: Color.colorMediumslateblue,
    fontFamily: FontFamily.tienneBold,
    fontWeight: "700",
    fontSize: FontSize.size_3xs,
    position: "absolute",
  },
  maskGroupLayout: {
    height: 36,
    top: 780,
  },
  eventsTypo: {
    top: 23,
    height: 13,
    textAlign: "left",
    color: Color.colorMediumslateblue,
    fontFamily: FontFamily.tienneBold,
    fontWeight: "700",
    fontSize: FontSize.size_3xs,
    position: "absolute",
  },
  forwardIconPosition: {
    left: 310,
    position: "absolute",
  },
  groupChildBg: {
    backgroundColor: Color.colorRoyalblue,
    top: 0,
  },
  groupChildLayout: {
    height: 84,
    width: 384,
    left: 0,
    position: "absolute",
  },
  textTypo: {
    color: Color.colorWhite,
    fontFamily: FontFamily.timmana,
    left: 110,
    textAlign: "left",
    position: "absolute",
  },
  image1Icon: {
    left: 0,
    top: 0,
    height: 838,
  },
  accountChild: {
    top: 770,
    backgroundColor: Color.colorGainsboro,
    height: 54,
    left: 0,
  },
  maskGroupIcon: {
    width: 41,
    height: 25,
    left: 0,
    position: "absolute",
  },
  home: {
    top: 21,
    left: 5,
    width: 38,
  },
  maskGroupParent: {
    left: 13,
    height: 34,
    width: 43,
  },
  events: {
    left: 4,
    width: 38,
  },
  maskGroupGroup: {
    left: 211,
    width: 42,
    position: "absolute",
  },
  account1: {
    left: 1,
    width: 42,
  },
  maskGroupContainer: {
    height: 36,
    top: 780,
    width: 43,
  },
  inbox: {
    left: 7,
    width: 35,
    top: 22,
  },
  groupPressable: {
    left: 112,
    height: 35,
    width: 42,
  },
  accountItem: {
    marginLeft: -192,
    left: "50%",
    height: 770,
    width: 384,
    position: "absolute",
  },
  accountInner: {
    top: 135,
    borderStyle: "solid",
    borderColor: Color.colorWhite,
    borderTopWidth: 1,
    width: 384,
    height: 1,
    left: 0,
    position: "absolute",
  },
  groupChild: {
    backgroundColor: Color.colorRoyalblue,
    top: 0,
  },
  circledUserMaleSkinType7: {
    top: 4,
    left: 24,
    width: 76,
    height: 80,
    position: "absolute",
  },
  forwardIcon: {
    top: 27,
    width: 27,
    height: 30,
  },
  pogiSigeName: {
    fontSize: 20,
    width: 132,
    height: 26,
    top: 22,
  },
  text: {
    top: 47,
    fontSize: 11,
    width: 47,
    height: 18,
  },
  rectangleParent: {
    top: 29,
  },
  account: {
    backgroundColor: Color.colorWhite,
    flex: 1,
    width: "100%",
    overflow: "hidden",
    height: 800,
  },
});

export default Account1;

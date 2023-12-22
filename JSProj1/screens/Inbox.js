import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, View, Text, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Color, FontSize, FontFamily } from "../GlobalStyles";

const Inbox = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.inbox}>
      <Image
        style={[styles.image1Icon, styles.iconPosition]}
        contentFit="cover"
        source={require("../assets/image-1.png")}
      />
      <View style={[styles.inboxChild, styles.iconPosition]} />
      <Pressable
        style={[styles.maskGroupParent, styles.latestPosition]}
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
        style={[styles.maskGroupGroup, styles.maskGroupPosition]}
        onPress={() => navigation.navigate("Events")}
      >
        <Image
          style={[styles.maskGroupIcon, styles.iconPosition]}
          contentFit="cover"
          source={require("../assets/mask-group1.png")}
        />
        <Text style={[styles.events, styles.eventsTypo]}>Events</Text>
      </Pressable>
      <Pressable
        style={[styles.maskGroupContainer, styles.maskGroupPosition]}
        onPress={() => navigation.navigate("Account1")}
      >
        <Image
          style={[styles.maskGroupIcon, styles.iconPosition]}
          contentFit="cover"
          source={require("../assets/mask-group2.png")}
        />
        <Text style={[styles.account, styles.eventsTypo]}>Account</Text>
      </Pressable>
      <View style={styles.groupView}>
        <Image
          style={[styles.maskGroupIcon, styles.iconPosition]}
          contentFit="cover"
          source={require("../assets/mask-group3.png")}
        />
        <Text style={[styles.inbox1, styles.homeTypo]}>Inbox</Text>
      </View>
      <View style={[styles.inboxItem, styles.inboxPosition]} />
      <Text style={[styles.inbox2, styles.inboxPosition]}>Inbox</Text>
      <View style={[styles.inboxInner, styles.iconPosition]} />
      <View style={[styles.rectangleView, styles.inboxChild1Layout]} />
      <View style={[styles.inboxChild1, styles.inboxChild1Layout]} />
      <Text style={[styles.latest, styles.inbox2Typo]}>Latest</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  iconPosition: {
    left: 0,
    position: "absolute",
  },
  latestPosition: {
    left: 13,
    position: "absolute",
  },
  homeTypo: {
    height: 13,
    color: Color.colorMediumslateblue,
    fontSize: FontSize.size_3xs,
    textAlign: "left",
    fontFamily: FontFamily.tienneBold,
    fontWeight: "700",
    position: "absolute",
  },
  maskGroupPosition: {
    height: 36,
    top: 778,
    position: "absolute",
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
  inboxPosition: {
    left: "50%",
    position: "absolute",
  },
  inboxChild1Layout: {
    height: 62,
    borderWidth: 1,
    borderColor: Color.colorGray,
    borderStyle: "solid",
    backgroundColor: Color.colorWhitesmoke,
    width: 384,
    left: 0,
    position: "absolute",
  },
  inbox2Typo: {
    textAlign: "left",
    fontFamily: FontFamily.tienneBold,
    fontWeight: "700",
  },
  image1Icon: {
    width: 384,
    top: 0,
    height: 838,
  },
  inboxChild: {
    top: 770,
    backgroundColor: Color.colorGainsboro,
    height: 54,
    width: 384,
  },
  maskGroupIcon: {
    width: 41,
    height: 25,
    top: 0,
  },
  home: {
    top: 21,
    left: 5,
    width: 38,
  },
  maskGroupParent: {
    height: 34,
    width: 43,
    top: 780,
  },
  events: {
    left: 4,
    width: 38,
  },
  maskGroupGroup: {
    left: 211,
    width: 42,
  },
  account: {
    left: 1,
    width: 42,
  },
  maskGroupContainer: {
    left: 310,
    width: 43,
  },
  inbox1: {
    top: 22,
    left: 7,
    width: 35,
  },
  groupView: {
    left: 112,
    height: 35,
    width: 42,
    top: 779,
    position: "absolute",
  },
  inboxItem: {
    marginLeft: -192,
    backgroundColor: Color.colorRoyalblue,
    height: 78,
    width: 385,
    top: 0,
  },
  inbox2: {
    marginLeft: -43,
    top: 16,
    fontSize: FontSize.size_10xl,
    color: Color.colorWhite,
    width: 86,
    height: 44,
    textAlign: "left",
    fontFamily: FontFamily.tienneBold,
    fontWeight: "700",
  },
  inboxInner: {
    top: 78,
    backgroundColor: Color.colorSilver,
    height: 692,
    width: 385,
  },
  rectangleView: {
    top: 111,
  },
  inboxChild1: {
    top: 173,
  },
  latest: {
    top: 84,
    fontSize: FontSize.size_xs,
    color: Color.colorBlack,
    width: 40,
    height: 22,
    left: 13,
    position: "absolute",
  },
  inbox: {
    backgroundColor: Color.colorWhite,
    flex: 1,
    width: "100%",
    overflow: "hidden",
    height: 800,
  },
});

export default Inbox;

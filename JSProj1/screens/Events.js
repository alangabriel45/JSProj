import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, View, Text, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Color, FontSize, FontFamily } from "../GlobalStyles";

const Events = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.events}>
      <Image
        style={[styles.image1Icon, styles.iconPosition]}
        contentFit="cover"
        source={require("../assets/image-1.png")}
      />
      <View style={[styles.eventsChild, styles.iconPosition]} />
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
      <View style={[styles.maskGroupGroup, styles.maskGroupPosition]}>
        <Image
          style={[styles.maskGroupIcon, styles.iconPosition]}
          contentFit="cover"
          source={require("../assets/mask-group1.png")}
        />
        <Text style={[styles.events1, styles.events1Typo]}>Events</Text>
      </View>
      <Pressable
        style={[styles.maskGroupContainer, styles.maskGroupPosition]}
        onPress={() => navigation.navigate("Account1")}
      >
        <Image
          style={[styles.maskGroupIcon, styles.iconPosition]}
          contentFit="cover"
          source={require("../assets/mask-group2.png")}
        />
        <Text style={[styles.account, styles.events1Typo]}>Account</Text>
      </Pressable>
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
      <View style={[styles.eventsItem, styles.eventsPosition]} />
      <View style={[styles.eventsInner, styles.iconPosition]} />
      <Text style={[styles.events2, styles.eventsPosition]}>Events</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  iconPosition: {
    left: 0,
    position: "absolute",
  },
  groupPosition: {
    top: 780,
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
    top: 780,
    position: "absolute",
  },
  events1Typo: {
    top: 23,
    height: 13,
    textAlign: "left",
    color: Color.colorMediumslateblue,
    fontFamily: FontFamily.tienneBold,
    fontWeight: "700",
    fontSize: FontSize.size_3xs,
    position: "absolute",
  },
  eventsPosition: {
    left: "50%",
    position: "absolute",
  },
  image1Icon: {
    width: 384,
    top: 0,
    height: 838,
  },
  eventsChild: {
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
    left: 13,
    height: 34,
    width: 43,
  },
  events1: {
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
  inbox: {
    top: 22,
    left: 7,
    width: 35,
  },
  groupPressable: {
    left: 112,
    height: 35,
    width: 42,
  },
  eventsItem: {
    marginLeft: -192,
    backgroundColor: Color.colorRoyalblue,
    height: 78,
    width: 384,
    top: 0,
  },
  eventsInner: {
    top: 78,
    backgroundColor: Color.colorSilver,
    height: 692,
    width: 384,
  },
  events2: {
    marginLeft: -53,
    top: 15,
    fontSize: FontSize.size_10xl,
    color: Color.colorWhite,
    width: 106,
    height: 44,
    textAlign: "left",
    fontFamily: FontFamily.tienneBold,
    fontWeight: "700",
    left: "50%",
  },
  events: {
    backgroundColor: Color.colorWhite,
    flex: 1,
    width: "100%",
    overflow: "hidden",
    height: 800,
  },
});

export default Events;

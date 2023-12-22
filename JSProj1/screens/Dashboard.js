import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, View, Text, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { FontFamily, Color, Border, FontSize } from "../GlobalStyles";

const Dashboard = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.dashboard}>
      <Image
        style={styles.image1Icon}
        contentFit="cover"
        source={require("../assets/image-1.png")}
      />
      <Image
        style={styles.image4Icon}
        contentFit="cover"
        source={require("../assets/image-4.png")}
      />
      <View style={styles.dashboardChild} />
      <Text style={styles.availableBalance}>Available Balance</Text>
      <Text style={[styles.p, styles.pTypo]}>P</Text>
      <View style={styles.dashboardItem} />
      <Text style={[styles.text, styles.textLayout]}>6, 000.50</Text>
      <View style={styles.dashboardInner} />
      <View style={[styles.rectangleView, styles.rectangleViewLayout]} />
      <View style={[styles.dashboardChild1, styles.rectangleViewLayout]} />
      <View style={[styles.maskGroupParent, styles.maskGroupLayout2]}>
        <Image
          style={[styles.maskGroupIcon, styles.maskGroupLayout1]}
          contentFit="cover"
          source={require("../assets/mask-group.png")}
        />
        <Text style={[styles.home, styles.homeTypo]}>Home</Text>
      </View>
      <Pressable
        style={[styles.maskGroupGroup, styles.maskGroupLayout]}
        onPress={() => navigation.navigate("Events")}
      >
        <Image
          style={[styles.maskGroupIcon, styles.maskGroupLayout1]}
          contentFit="cover"
          source={require("../assets/mask-group1.png")}
        />
        <Text style={[styles.events, styles.eventsTypo]}>Events</Text>
      </Pressable>
      <Pressable
        style={[styles.maskGroupContainer, styles.maskGroupLayout]}
        onPress={() => navigation.navigate("Account1")}
      >
        <Image
          style={[styles.maskGroupIcon, styles.maskGroupLayout1]}
          contentFit="cover"
          source={require("../assets/mask-group2.png")}
        />
        <Text style={[styles.account, styles.eventsTypo]}>Account</Text>
      </Pressable>
      <Pressable
        style={[styles.groupPressable, styles.groupPosition]}
        onPress={() => navigation.navigate("Inbox")}
      >
        <Image
          style={[styles.maskGroupIcon, styles.maskGroupLayout1]}
          contentFit="cover"
          source={require("../assets/mask-group3.png")}
        />
        <Text style={[styles.inbox, styles.homeTypo]}>Inbox</Text>
      </Pressable>
      <Pressable
        style={[styles.maskGroupParent1, styles.maskGroupLayout]}
        onPress={() => navigation.navigate("Send")}
      >
        <Image
          style={[styles.maskGroupIcon4, styles.textLayout]}
          contentFit="cover"
          source={require("../assets/mask-group4.png")}
        />
        <Text style={[styles.send, styles.sendTypo]}>{`Send
`}</Text>
      </Pressable>
      <View style={[styles.groupView, styles.expensesLayout]}>
        <Image
          style={[styles.maskGroupIcon5, styles.maskGroupLayout1]}
          contentFit="cover"
          source={require("../assets/mask-group5.png")}
        />
        <Text style={[styles.expenses, styles.expensesLayout]}>Expenses</Text>
      </View>
      <Text style={[styles.announcements, styles.sendTypo]}>Announcements</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  pTypo: {
    fontFamily: FontFamily.kantumruy,
    fontWeight: "300",
    textAlign: "left",
    color: Color.colorWhite,
  },
  textLayout: {
    height: 28,
    position: "absolute",
  },
  rectangleViewLayout: {
    borderRadius: Border.br_mid,
    left: 28,
    backgroundColor: Color.colorGainsboro,
    width: 330,
    position: "absolute",
  },
  maskGroupLayout2: {
    width: 43,
    top: 785,
  },
  maskGroupLayout1: {
    height: 25,
    width: 41,
    top: 0,
    position: "absolute",
  },
  homeTypo: {
    height: 13,
    color: Color.colorMediumslateblue,
    fontWeight: "700",
    fontSize: FontSize.size_3xs,
    fontFamily: FontFamily.kantumruy,
    textAlign: "left",
    position: "absolute",
  },
  maskGroupLayout: {
    height: 36,
    position: "absolute",
  },
  eventsTypo: {
    top: 23,
    height: 13,
    color: Color.colorMediumslateblue,
    fontWeight: "700",
    fontSize: FontSize.size_3xs,
    fontFamily: FontFamily.kantumruy,
    textAlign: "left",
    position: "absolute",
  },
  groupPosition: {
    top: 783,
    width: 42,
  },
  sendTypo: {
    height: 20,
    color: Color.colorMediumslateblue,
    fontWeight: "700",
    fontSize: FontSize.size_3xs,
    fontFamily: FontFamily.kantumruy,
    textAlign: "left",
  },
  expensesLayout: {
    width: 51,
    position: "absolute",
  },
  image1Icon: {
    width: 384,
    left: 0,
    top: 0,
    position: "absolute",
    height: 838,
  },
  image4Icon: {
    marginLeft: -180,
    width: 121,
    height: 94,
    left: "50%",
    top: 0,
    position: "absolute",
  },
  dashboardChild: {
    marginLeft: -165,
    top: 87,
    borderRadius: 13,
    backgroundColor: Color.colorRoyalblue,
    height: 79,
    width: 330,
    left: "50%",
    position: "absolute",
  },
  availableBalance: {
    fontSize: FontSize.size_5xs,
    fontWeight: "200",
    fontFamily: FontFamily.krubExtraLight,
    width: 70,
    height: 9,
    textAlign: "left",
    color: Color.colorWhite,
    left: 34,
    top: 97,
    position: "absolute",
  },
  p: {
    fontSize: 40,
    width: 23,
    height: 49,
    left: 34,
    top: 97,
    fontFamily: FontFamily.kantumruy,
    fontWeight: "300",
    position: "absolute",
  },
  dashboardItem: {
    top: 117,
    left: 32,
    borderRadius: 27,
    width: 30,
    height: 4,
    position: "absolute",
    backgroundColor: Color.colorWhite,
  },
  text: {
    top: 117,
    left: 69,
    fontSize: 16,
    width: 72,
    fontFamily: FontFamily.kantumruy,
    fontWeight: "300",
    textAlign: "left",
    color: Color.colorWhite,
  },
  dashboardInner: {
    top: 775,
    height: 54,
    backgroundColor: Color.colorGainsboro,
    width: 384,
    left: 0,
    position: "absolute",
  },
  rectangleView: {
    top: 170,
    height: 285,
  },
  dashboardChild1: {
    top: 461,
    height: 257,
  },
  maskGroupIcon: {
    left: 0,
  },
  home: {
    top: 21,
    left: 5,
    width: 38,
  },
  maskGroupParent: {
    left: 13,
    height: 34,
    position: "absolute",
  },
  events: {
    left: 4,
    width: 38,
  },
  maskGroupGroup: {
    left: 211,
    width: 42,
    top: 783,
  },
  account: {
    left: 1,
    width: 42,
  },
  maskGroupContainer: {
    left: 310,
    width: 43,
    top: 783,
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
    position: "absolute",
  },
  maskGroupIcon4: {
    width: 41,
    left: 0,
    top: 0,
    height: 28,
  },
  send: {
    top: 26,
    left: 9,
    width: 28,
    position: "absolute",
  },
  maskGroupParent1: {
    top: 184,
    left: 37,
    width: 41,
  },
  maskGroupIcon5: {
    left: 2,
  },
  expenses: {
    top: 20,
    height: 20,
    color: Color.colorMediumslateblue,
    fontWeight: "700",
    fontSize: FontSize.size_3xs,
    fontFamily: FontFamily.kantumruy,
    textAlign: "left",
    left: 0,
  },
  groupView: {
    top: 190,
    left: 103,
    height: 30,
  },
  announcements: {
    top: 469,
    left: 40,
    width: 89,
    position: "absolute",
  },
  dashboard: {
    flex: 1,
    width: "100%",
    overflow: "hidden",
    height: 800,
    backgroundColor: Color.colorWhite,
  },
});

export default Dashboard;

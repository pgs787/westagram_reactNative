import React from "react";
import { Image, View, Button } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Main from "../instagram/components/Main/Main";
import Like from "./Like";
import Search from "./Search";
import Mypage from "./Mypage";
import Plus from "./Plus";
import mainstyles from "../instagram/components/Main/mainstyles";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

const Tab = createBottomTabNavigator();

function Bottom({ navigation }) {
  navigation.setOptions({
    headerLeft: () => (
      <Image
        style={{ width: 30, height: 30, left: 15 }}
        source={require("../assets/camera.png")}
      />
    ),
    headerTitle: () => (
      <Image
        style={{ width: 100, height: 30 }}
        source={require("../assets/title.png")}
      />
    ),
    headerRight: () => (
      <Image
        style={{ width: 30, height: 30, right: 15 }}
        source={require("../assets/camera.png")}
      />
    )
  });
  return (
    <Tab.Navigator
      tabBarOptions={{
        style: {
          backgroundColor: "#fafafa",
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between"
        },
        labelStyle: {
          display: "none"
        }
      }}
    >
      <Tab.Screen
        name="Main"
        component={Main}
        options={{
          tabBarIcon: () => (
            <Image
              style={mainstyles.bottom_icon}
              source={require("../assets/home.png")}
            />
          )
        }}
      />
      <Tab.Screen
        name="Search"
        component={Search}
        options={{
          tabBarIcon: () => (
            <Image
              style={mainstyles.bottom_icon}
              source={require("../assets/search.png")}
            />
          )
        }}
      />
      <Tab.Screen
        name="Plus"
        component={Plus}
        options={{
          tabBarIcon: () => (
            <Image
              style={mainstyles.bottom_icon}
              source={require("../assets/plus.png")}
            />
          )
        }}
      />
      <Tab.Screen
        name="Like"
        component={Like}
        options={{
          tabBarIcon: () => (
            <Image
              style={mainstyles.bottom_icon}
              source={{
                uri:
                  "https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/heart.png"
              }}
            />
          )
        }}
      />
      <Tab.Screen
        name="Mypage"
        component={Mypage}
        options={{
          tabBarIcon: () => (
            <Image
              style={mainstyles.bottom_icon}
              source={{
                uri:
                  "https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/profile.png"
              }}
            />
          )
        }}
      />
    </Tab.Navigator>
  );
}
const FeedStack = createStackNavigator();

export default function MainRoute() {
  return (
    <NavigationContainer>
      <FeedStack.Navigator>
        <FeedStack.Screen name="Bottom" component={Bottom} />
      </FeedStack.Navigator>
    </NavigationContainer>
  );
}

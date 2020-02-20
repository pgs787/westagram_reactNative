import React, { Component } from "react";
import { View, ScrollView, FlatList } from "react-native";
import mainstyles from "./mainstyles";
import Story from "./Stroy/Story";
import Feed from "./Feed/Feed";

const DATA = [
  {
    id: 0,
    url: require("../../../assets/1.jpg"),
    pic: require("../../../assets/2.jpg"),
    nick: "박기성"
  },
  {
    id: 1,
    url: require("../../../assets/2.jpg"),
    pic: require("../../../assets/1.jpg"),
    nick: "너눈"
  },
  {
    id: 2,
    url: require("../../../assets/5.jpg"),
    pic: require("../../../assets/2.jpg"),
    nick: "누구냐"
  },
  {
    id: 3,
    url: require("../../../assets/1.jpg"),
    pic: require("../../../assets/2.jpg"),
    nick: "나는"
  },
  {
    id: 4,
    url: require("../../../assets/2.jpg"),
    pic: require("../../../assets/5.jpg"),
    nick: "박기성"
  },
  {
    id: 5,
    url: require("../../../assets/5.jpg"),
    pic: require("../../../assets/2.jpg"),
    nick: "입니다"
  }
];

function Item({ id, url, nick, pic }) {
  return <Feed id={id} url={url} nick={nick} pic={pic} />;
}
function Main() {
  return (
    <View style={mainstyles.container}>
      <ScrollView
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{ flex: 1 }}
      >
        <Story />
        <FlatList
          data={DATA}
          renderItem={({ item }) => (
            <Item nick={item.nick} url={item.url} pic={item.pic} />
          )}
          keyExtractor={item => item.id}
        />
      </ScrollView>
    </View>
  );
}

export default Main;

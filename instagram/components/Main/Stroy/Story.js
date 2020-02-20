import React, { Component } from "react";
import {
  View,
  Image,
  ScrollView,
  FlatList,
  ImageBackground,
  Text
} from "react-native";
import Storystyle from "./Storystyle";

const DATA = [
  {
    id: 0,
    url: require("../../../../assets/1.jpg"),
    pic: require("../../../../assets/2.jpg"),
    nick: "박기성"
  },
  {
    id: 1,
    url: require("../../../../assets/2.jpg"),
    pic: require("../../../../assets/1.jpg"),
    nick: "너눈"
  },
  {
    id: 2,
    url: require("../../../../assets/5.jpg"),
    pic: require("../../../../assets/1.jpg"),
    nick: "누구냐"
  },
  {
    id: 3,
    url: require("../../../../assets/1.jpg"),
    pic: require("../../../../assets/5.jpg"),
    nick: "나는"
  },
  {
    id: 4,
    url: require("../../../../assets/2.jpg"),
    pic: require("../../../../assets/1.jpg"),
    nick: "박기성"
  },
  {
    id: 5,
    url: require("../../../../assets/5.jpg"),
    pic: require("../../../../assets/2.jpg"),
    nick: "입니다"
  }
];

function Item({ id, url, nick }) {
  return (
    <ImageBackground
      key={id}
      source={require("../../../../assets/circle.png")}
      style={[Storystyle.circle, { alignSelf: "center" }]}
    >
      <Image style={Storystyle.story_img} source={url} />
      <Text style={Storystyle.story_name}>{nick}</Text>
    </ImageBackground>
  );
}
export default class Story extends Component {
  render() {
    return (
      <View>
        <View style={Storystyle.story_bar}>
          <ScrollView
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={{
              alignItems: "center"
            }}
          >
            <ImageBackground style={Storystyle.circle}>
              <Image
                style={Storystyle.story_img}
                source={require("../../../../assets/me.jpg")}
              />
              <Image
                source={require("../../../../assets/plus_PNG59.png")}
                style={{
                  width: 20,
                  height: 20,
                  position: "absolute",
                  right: 0,
                  bottom: 0
                }}
              ></Image>
              <Text style={Storystyle.story_name}>내 스토리</Text>
            </ImageBackground>
            <FlatList
              data={DATA}
              horizontal={true}
              style={{
                height: 100
              }}
              renderItem={({ item }) => (
                <Item nick={item.nick} url={item.url} />
              )}
              keyExtractor={item => item.id}
            />
          </ScrollView>
        </View>
      </View>
    );
  }
}

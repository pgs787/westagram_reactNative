import React from "react";
import { View, Image, Text, ImageBackground } from "react-native";
import feedstyle from "./feedstyle";

export default class TopBar extends React.Component {
  render() {
    return (
      <View style={feedstyle.top_bar}>
        <ImageBackground
          style={feedstyle.circle}
          source={require("../../../../assets/circle.png")}
        >
          <Image style={feedstyle.user_pic} source={this.props.pic} />
        </ImageBackground>
        <Text style={feedstyle.top_bar_nick}>{this.props.nick}</Text>
        <Image
          style={feedstyle.dot}
          source={{
            uri:
              "https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/more.png"
          }}
        />
      </View>
    );
  }
}

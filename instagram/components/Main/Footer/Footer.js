import React, { Component } from "react";
import { View, Image } from "react-native";
import footerstyle from "./footerstyle";

export default class footer extends Component {
  render() {
    return (
      <View style={footerstyle.footer}>
        <View style={footerstyle.footer_inner}>
          <Image
            style={footerstyle.footer_icons}
            source={require("../../../../assets/home.png")}
          />
          <Image
            style={footerstyle.footer_icons}
            source={require("../../../../assets/search.png")}
          />
          <Image
            style={footerstyle.footer_icons}
            source={require("../../../../assets/plus.png")}
          />
          <Image
            style={footerstyle.footer_icons}
            source={{
              uri:
                "https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/heart.png"
            }}
          />
          <Image
            style={footerstyle.footer_icons}
            source={{
              uri:
                "https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/profile.png"
            }}
          />
        </View>
      </View>
    );
  }
}

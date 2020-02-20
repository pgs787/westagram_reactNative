import React, { Component } from "react";
import { View, Image } from "react-native";
import Navstyle from "./Navstyle";

export default class Nav extends Component {
  render() {
    return (
      <View style={Navstyle.nav_bar}>
        <Image
          style={[Navstyle.nav_icons, { left: 15 }]}
          source={require("../../../../assets/camera.png")}
        />
        <Image
          style={[
            Navstyle.nav_icons,
            { alignSelf: "center", width: "30%", height: 35 }
          ]}
          source={require("../../../../assets/title.png")}
        />
        <Image
          style={[Navstyle.nav_icons, { right: 15 }]}
          source={require("../../../../assets/dm.png")}
        />
      </View>
    );
  }
}

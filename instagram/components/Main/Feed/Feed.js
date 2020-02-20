import React, { Component } from "react";
import { View, KeyboardAvoidingView } from "react-native";
import feedstyle from "./feedstyle";
import Topbar from "./Topbar";
import Mainimgbar from "./Mainimgbar";

export default class Feed extends Component {
  render() {
    return (
      <View style={feedstyle.feed_bar}>
        <Topbar nick={this.props.nick} pic={this.props.pic} />
        <KeyboardAvoidingView enabled behavior="padding">
          <Mainimgbar id={this.props.id} url={this.props.url} />
        </KeyboardAvoidingView>
      </View>
    );
  }
}

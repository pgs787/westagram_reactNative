import React from "react";
import { View, Image, Text, TextInput } from "react-native";
import feedstyle from "./feedstyle";

export default class MainImgBar extends React.Component {
  state = {
    information: [],
    comment: ""
  };
  handleCreate = info => {
    const { information } = this.state;
    this.setState({
      information: [...information, { ...info }]
    });
  };
  handleSubmit = () => {
    this.handleCreate(this.state);
    this.setState({ comment: "" });
  };
  mapOfAddComment = data => {
    return data.map(info => (
      <View style={{ display: "flex", flexDirection: "row" }}>
        <Text style={{ fontWeight: "bold" }}>gi_sung&nbsp;</Text>
        <Text>{info.comment}</Text>
      </View>
    ));
  };
  render() {
    return (
      <View style={feedstyle.feed_main_bar}>
        <Image style={feedstyle.feed_main_img} source={this.props.url} />
        <View>
          <View style={feedstyle.comment_top_bar}>
            <Image
              style={feedstyle.comment_top_img}
              source={{
                uri:
                  "https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/heart.png"
              }}
            />
            <Image
              style={feedstyle.comment_top_img}
              source={{
                uri:
                  "https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/comment.png"
              }}
            />
            <Image
              style={feedstyle.comment_top_img}
              source={require("../../../../assets/dm.png")}
            />
          </View>
          <Image
            style={[
              feedstyle.comment_top_img,
              { position: "absolute", right: 0, top: 10 }
            ]}
            source={{
              uri:
                "https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/bookmark.png"
            }}
          />
        </View>
        <View style={feedstyle.comment_main}>
          <View style={feedstyle.like_comment_bar}>
            <Image
              style={feedstyle.like_comment_bar_img}
              source={require("../../../../assets/1.jpg")}
            />
            <Image
              style={[feedstyle.like_comment_bar_img, { left: 15 }]}
              source={require("../../../../assets/2.jpg")}
            />
            <View style={feedstyle.like_comment_bar_comment}>
              <Text style={{ fontWeight: "bold" }}>byunseungjun</Text>
              <Text>님 외</Text>
              <Text style={{ fontWeight: "bold" }}>22명</Text>
              <Text>이 좋아합니다</Text>
            </View>
          </View>
          <View style={{ display: "flex", flexDirection: "row" }}>
            <Text style={{ fontWeight: "bold" }}>94.yoon&nbsp;</Text>
            <Text>허벅지 터지겠네</Text>
          </View>

          <Text
            style={{
              color: "#003569",
              fontSize: 14,
              fontWeight: "bold"
            }}
          >
            #일상 #헬린이
          </Text>

          <Text
            style={{
              color: "gray",
              fontSize: 14,
              marginVertical: 5
            }}
          >
            댓글 4개 모두 보기
          </Text>
          <View
            style={{
              display: "flex",
              flexDirection: "row",
              marginBottom: 5
            }}
          >
            <Text style={{ fontWeight: "bold" }}>byunseungjun&nbsp;</Text>
            <Text>운동경력이 맨날 초기화되냐~~~</Text>
          </View>
          <View style={{ display: "flex", flexDirection: "row" }}>
            <Text style={{ fontWeight: "bold" }}>94.yoon&nbsp;</Text>
            <Text>술병났어 ㅋㅋㅋㅋ</Text>
          </View>
          {this.mapOfAddComment(this.state.information)}
          <View style={feedstyle.comment_input}>
            <Image
              style={{ width: 30, height: 30, borderRadius: 20 }}
              source={require("../../../../assets/me.jpg")}
            />

            <TextInput
              placeholder="  댓글 달기..."
              style={{ left: 5, width: "100%" }}
              onChangeText={text => {
                this.setState({
                  comment: text
                });
              }}
              value={this.state.comment}
              onSubmitEditing={this.handleSubmit}
            ></TextInput>
          </View>
          <Text style={{ color: "gray", fontSize: 11 }}>2일전</Text>
        </View>
      </View>
    );
  }
}

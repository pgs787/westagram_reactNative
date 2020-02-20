import { StyleSheet } from "react-native";

export default StyleSheet.create({
  feed_bar: { backgroundColor: "white", height: "auto" },
  top_bar: {
    display: "flex",
    alignContent: "center",
    position: "relative",
    justifyContent: "center",
    height: 55
  },
  circle: {
    left: 10,
    width: 40,
    height: 40,
    display: "flex",
    alignItems: "center"
  },
  user_pic: { width: 35, height: 34, borderRadius: 40, marginTop: 3 },
  top_bar_nick: {
    position: "absolute",
    left: 55,
    fontWeight: "bold",
    fontSize: 14
  },
  dot: { position: "absolute", right: 10, width: 25, height: 25 },

  feed_main_bar: { height: 600 },
  feed_main_img: { resizeMode: "cover", width: "100%", height: 300 },

  comment_top_bar: {
    paddingVertical: 10,
    paddingLeft: 15,
    width: 130,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "white"
  },
  comment_top_img: {
    width: 30,
    height: 30,
    marginRight: 15
  },

  comment_main: {
    width: "100%",
    paddingLeft: 15
  },
  like_comment_bar: {
    height: 35,
    display: "flex",
    flexDirection: "row",
    alignItems: "center"
  },
  like_comment_bar_img: {
    width: 25,
    height: 25,
    position: "absolute",
    borderRadius: 20
  },
  like_comment_bar_comment: {
    left: 46,
    display: "flex",
    flexDirection: "row",
    alignItems: "center"
  },
  comment_input: {
    width: "100%",
    position: "relative",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 8
  }
});

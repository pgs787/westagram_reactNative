import { StyleSheet } from "react-native";

export default StyleSheet.create({
  footer: {
    position: "absolute",
    bottom: 0,
    height: "10%",
    width: "100%",
    borderTopWidth: 0.8,
    borderColor: "#dddddd",
    display: "flex",
    justifyContent: "space-between",
    alignContent: "space-between",
    backgroundColor: "#FAFAFA",
    zIndex: 2
  },
  story_bar: { width: 1000 },
  footer_inner: {
    position: "relative",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around"
  },
  footer_icons: {
    resizeMode: "contain",
    width: 31,
    height: 30,
    top: 8,
    backgroundColor: "#FAFAFA"
  }
});

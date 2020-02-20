import { StyleSheet } from "react-native";

export default StyleSheet.create({
  story_bar: {
    position: "relative",
    borderBottomWidth: 0.7,
    borderColor: "#dddddd",
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center"
  },
  circle: {
    top: -10,
    width: 65,
    height: 65,
    marginHorizontal: 10,
    display: "flex",
    alignItems: "center"
  },
  story_img: {
    width: 55,
    height: 56,
    borderRadius: 40,
    marginTop: 4,
    marginHorizontal: 6,
    position: "absolute"
  },
  story_name: {
    position: "absolute",
    fontSize: 12,
    textAlign: "center",
    bottom: -20
  }
});

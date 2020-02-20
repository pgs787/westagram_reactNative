import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    position: "relative",
    backgroundColor: "white"
  },
  main_container: {
    width: 300
  },
  logindiv: {
    width: "100%",
    height: 40,
    backgroundColor: "#0084ff",
    opacity: 0.4,
    color: "white",
    display: "flex"
  },
  main_img: {
    marginBottom: 20,
    width: 200,
    height: 55,
    resizeMode: "cover"
  },
  textinput: {
    width: "100%",
    height: 40,
    backgroundColor: "#fafafa",
    marginBottom: 15,
    borderColor: "#efefef",
    borderRadius: 3,
    borderStyle: "solid",
    borderWidth: 1,
    paddingLeft: 15
  },
  losepwd_container: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 25,
    marginTop: 30
  },
  loseicon: {
    width: 25,
    height: 25
  },
  losepwd: {
    textAlign: "right",
    marginBottom: 15,
    fontSize: 12,
    fontWeight: "bold",
    color: "#006eff"
  },
  losetext: {
    marginLeft: 10,
    color: "#006eff",
    fontWeight: "bold"
  },
  borderdiv: {
    borderStyle: "solid",
    borderColor: "gray",
    borderTopWidth: 0.6,
    height: 1,
    width: "35%"
  },
  login_text: {
    color: "white",
    fontWeight: "bold"
  },
  or_container: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center"
  },
  or_text: {
    width: 60,
    textAlign: "center"
  },
  sign_text: {
    marginTop: 35,
    color: "#006eff",
    fontWeight: "bold"
  },
  bottom_container: {
    borderStyle: "solid",
    borderTopWidth: 0.5,
    borderColor: "gray",
    height: 50,
    width: "100%",
    position: "absolute",
    bottom: 20,
    borderColor: "gray",
    justifyContent: "center",
    alignItems: "center"
  },
  bottom_text: { fontWeight: "bold", fontSize: 16, opacity: 0.5 }
});

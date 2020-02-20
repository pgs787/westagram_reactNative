import React, { useRef } from "react";
import {
  Text,
  TextInput,
  View,
  Image,
  TouchableOpacity,
  KeyboardAvoidingView
} from "react-native";
import { Linking } from "expo";
import loginstlyes from "./loginstyles";
import AwesomeAlert from "react-native-awesome-alerts";

function Login({ navigation }) {
  const [id, setId] = React.useState("");
  const [pwd, setPwd] = React.useState("");
  const [success, setSuccess] = React.useState(false);
  const [fail, setFail] = React.useState(false);
  const inputRef = useRef(null);

  componentDidMount = () => {};
  logsuc = () => {
    setSuccess(true);
  };
  logfail = () => {
    setFail(true);
  };

  hideAlert = () => {
    setSuccess(false);
    setFail(false);
  };
  handleLoginSuc = async () => {
    await fetch("https://pgs787.github.io/westagram_react_json/login.json")
      .then(res => res.json())
      .then(res => {
        if (res[0].id === id && res[0].pwd === pwd) {
          logsuc();
          inputRef.current.blur();
        } else {
          logfail();
        }
      });
  };

  return (
    <View style={loginstlyes.container}>
      <Image
        style={loginstlyes.main_img}
        source={require("../../../assets/title.png")}
      />
      <KeyboardAvoidingView behavior="padding" enabled>
        <View style={loginstlyes.main_container}>
          <TextInput
            style={loginstlyes.textinput}
            value={id}
            onChangeText={text => {
              setId(text);
            }}
            placeholder="전화번호, 사용자 이름 또는 이메일"
          ></TextInput>
          <TextInput
            secureTextEntry={true}
            passwordRules={true}
            style={loginstlyes.textinput}
            value={pwd}
            onChangeText={text => {
              setPwd(text);
            }}
            ref={inputRef}
            placeholder="비밃번호"
          ></TextInput>

          <View>
            <Text
              style={loginstlyes.losepwd}
              onPress={() => {
                Linking.openURL(
                  "https://m.facebook.com/?refsrc=https%3A%2F%2Fm.facebook.com%2F&_rdr"
                );
              }}
            >
              비밀번호를 잊으셨나요?
            </Text>
            <TouchableOpacity
              onPress={() => {
                handleLoginSuc();
              }}
              style={{
                width: "100%",
                height: 40,
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                backgroundColor: id && pwd ? "#006eff" : "#C3E0FA"
              }}
            >
              <Text style={loginstlyes.login_text}>로그인</Text>
            </TouchableOpacity>
          </View>
        </View>
      </KeyboardAvoidingView>
      <View style={loginstlyes.losepwd_container}>
        <Image
          style={loginstlyes.loseicon}
          source={require("../../../assets/Facebook_icon-icons.com_66805.png")}
        ></Image>
        <Text style={loginstlyes.losetext}>박기성(으)로 계속</Text>
      </View>
      <View style={loginstlyes.or_container}>
        <View style={loginstlyes.borderdiv}></View>
        <Text style={loginstlyes.or_text}>또는</Text>
        <View style={loginstlyes.borderdiv}></View>
      </View>
      <View style={{ flexDirection: "row" }}>
        <Text style={{ marginTop: 35, marginRight: 5 }}>
          계정이 없으신가요?
        </Text>
        <Text style={loginstlyes.sign_text}>가입하기.</Text>
      </View>

      <View style={loginstlyes.bottom_container}>
        <Text style={{ opacity: 0.5 }}>from</Text>
        <Text style={loginstlyes.bottom_text}>FACEBOOK</Text>
      </View>

      <AwesomeAlert
        show={success}
        showProgress={false}
        title="Success"
        message="로그인 성공"
        closeOnTouchOutside={true}
        showConfirmButton={true}
        confirmText="OK"
        confirmButtonColor="#AEDEF4"
        onConfirmPressed={() => {
          hideAlert();
          navigation.navigate("MainRoute");
        }}
      />
      <AwesomeAlert
        show={fail}
        showProgress={false}
        title="Fail!"
        message="정보가 일치하지 않습니다. 다시 시도해주세요"
        closeOnTouchOutside={true}
        showConfirmButton={true}
        confirmText="OK"
        confirmButtonColor="#DD6B55"
        onConfirmPressed={() => {
          hideAlert();
        }}
      />
    </View>
  );
}

export default Login;

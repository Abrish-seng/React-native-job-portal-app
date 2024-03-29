import React from "react";
import { useState } from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { BG_COLOR } from "../../utils/color";
import CustomTextInput from "../../common/CustomTextInput";
import CustomSolidBtn from "../../common/CustomSolidBtn";
import CustomBorderBtn from "../../common/CustomBorderBtn";
import { useNavigation } from "@react-navigation/native";

export default function LoginForCompany() {
  const navigation = useNavigation();
  const [email, setEmail] = useState("");
  const [badEmail, setBadEmail] = useState("");

  const [password, setpassword] = useState("");
  const [badPassword, setBadPassword] = useState("");
  const validate = () => {
    let validEmail = true;
    let validPass = true;

    //user Email validation
    //.............................................................
    let emailRegax = /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/;
    if (email == "") {
      validEmail = false;
      setBadEmail("Please Enter Email");
    } else if (email != "" && !email.toString().match(emailRegax)) {
      validEmail = false;
      setBadEmail("Enter valid Email");
    } else if (email != "" && !email.toString().match(emailRegax)) {
      validEmail = true;
      setBadEmail("");
    }

    //user password validation
    //.............................................................
    if (password == "") {
      validPass = false;
      setBadPassword(" Please Enter password ");
    } else if (password != "" && password.length < 6) {
      validPass = false;
      setBadPassword("Password must be atleast 6 character");
    } else if (password != "" && password.length >= 6) {
      validPass = true;
      setBadPassword("");
    }
    return validEmail && validPass;
  };
  return (
    <SafeAreaView style={styles.coantainer}>
      <Image
        source={require("../../../assets/images/job.png")}
        style={styles.logo}
      />
      <Text style={styles.title}>Login</Text>
      <CustomTextInput
        value={email}
        onChangeText={(txt) => {
          setEmail(txt);
        }}
        title={"Email"}
        placeholder={"Abrish123@gmail.com"}
        bad={badEmail != "" ? true : false}
      />
      {badEmail != "" && <Text style={styles.errorMsg}>{badEmail}</Text>}

      <CustomTextInput
        value={password}
        onChangeText={(txt) => {
          setpassword(txt);
        }}
        title={"Password"}
        placeholder={"********"}
        bad={badPassword != "" ? true : false}
      />
      {badPassword != "" && <Text style={styles.errorMsg}>{badPassword}</Text>}
      <Text style={styles.forgetPassword}>Forget Password</Text>
      <CustomSolidBtn title={"Login"} onClick={() => {
        if (validate()){

        }
      }} />
      <CustomBorderBtn
        onClick={() => {
          navigation.navigate("SignupForCompany");
        }}
        title={"Create Account"}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  coantainer: {
    flex: 1,
    backgroundColor: BG_COLOR,
  },
  logo: {
    width: 80,
    height: 80,
    alignSelf: "center",
    marginTop: 40,
  },
  title: {
    fontSize: 25,
    alignSelf: "center",
    fontWeight: "600",
    marginTop: 50,
  },
  forgetPassword: {
    alignSelf: "flex-end",
    marginTop: 10,
    fontWeight: "500",
    fontSize: 16,
    marginRight: 20,
  },
  errorMsg: {
    marginLeft: 25,
    color: "red",
  },
});

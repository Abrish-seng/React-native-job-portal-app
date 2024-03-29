import React, { useState } from "react";
import { Image, ScrollView, StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { BG_COLOR } from "../../utils/color";
import CustomTextInput from "../../common/CustomTextInput";
import CustomSolidBtn from "../../common/CustomSolidBtn";
import CustomBorderBtn from "../../common/CustomBorderBtn";
import { useNavigation } from "@react-navigation/native";

export default function SignupForCompany() {
  const navigation = useNavigation();
  const [name, setName] = useState("");
  const [badName, setBadName] = useState("");

  const [email, setEmail] = useState("");
  const [badEmail, setBadEmail] = useState("");

  const [contact, setContact] = useState("");
  const [badContact, setBadContact] = useState("");

  const [address, setAddress] = useState("");
  const [badAddress, setBadAddress] = useState("");

  const [companyName, setcompanyName] = useState("");
  const [BadCompany, setBadCompanyName] = useState("");

  const [password, setpassword] = useState("");
  const [badPassword, setBadPassword] = useState("");

  const validate = () => {
    let nameRegax = /^[A-Za-z]+$/;
    let validEmail = true;
    let validName = true;
    let validContact = true;
    let validAddress = true;
    let validPass = true;
    let validCompany = true;
    // user name validation
    //................................................

    if (name == "") {
      validName = false;
      setBadName("please Enter Name");
    } else if (name != "" && name.length < 3) {
      validName = false;
      setBadName("please Enter valid name");
    } else if (name != "" && name.length > 3) {
      validName = true;
      setBadName("");
    }

    if (name == "") {
      validName = false;
      setBadName("please Enter Name");
    } else if (name != "" && name.length < 3) {
      validName = false;
      setBadName("please Enter valid name");
    } else if (
      name != "" &&
      name.length >= 3 &&
      !name.toString().match(nameRegax)
    ) {
      validName = false;
      setBadName("please Enter valid name");
    } else if (
      name != "" &&
      name.length >= 3 &&
      name.toString().match(nameRegax)
    ) {
      validName = true;
      setBadName("");
    }

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
    //user contact validation
    //.............................................................
    let contactReg = /^\d+$/;
    if (contact == "") {
      validContact = false;
      setBadContact("Enter contact number");
    } else if (contact != "" && contact.length < 10) {
      validContact = false;
      setBadContact("Enter Valid contact number");
    } else if (
      contact != "" &&
      contact.length >= 10 &&
      !contact.match(contactReg)
    ) {
      validContact = false;
      setBadContact("Enter Valid contact number");
    } else if (
      contact != "" &&
      contact.length >= 10 &&
      contact.match(contactReg)
    ) {
      validContact = true;
      setBadContact("");
    }
    //user company name validation
    //.............................................................
    if (companyName == "") {
      validCompany = false;
      setBadCompanyName("Enter company name");
    } else if (companyName != "") {
      validCompany = true;
      setBadCompanyName("");
    }

    //user name validation
    //.............................................................
    if (address == "") {
      validAddress = false;
      setBadAddress("Enter Address name");
    } else if (address != "") {
      validAddress = true;
      setBadAddress("");
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
    return (
      validName &&
      validEmail &&
      validAddress &&
      validCompany &&
      validContact &&
      validPass
    );
  };

  return (
    <SafeAreaView style={styles.coantainer}>
      <ScrollView>
        <Image
          source={require("../../../assets/images/job.png")}
          style={styles.logo}
        />
        <Text style={styles.title}>Create Account</Text>
        <CustomTextInput
          value={name}
          onChangeText={(txt) => {
            setName(txt);
          }}
          title={"Name"}
          placeholder={"abrish"}
          bad={badName != "" ? true : false}
        />
        {badName != "" && <Text style={styles.errorMsg}>{badName}</Text>}

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
          value={contact}
          onChangeText={(txt) => {
            setContact(txt);
          }}
          title={"Contact"}
          placeholder={"932124433"}
          bad={badContact != "" ? true : false}
        />
        {badContact != "" && <Text style={styles.errorMsg}>{badContact}</Text>}

        <CustomTextInput
          value={companyName}
          onChangeText={(txt) => {
            setCompanyName(txt);
          }}
          title={"Company name"}
          placeholder={"Ex. Google"}
          bad={BadCompany != "" ? true : false}
        />

        {BadCompany != "" && <Text style={styles.errorMsg}>{BadCompany}</Text>}

        <CustomTextInput
          value={address}
          onChangeText={(txt) => {
            setAddress(txt);
          }}
          title={"Address"}
          placeholder={"Ethiopia"}
          bad={badAddress != "" ? true : false}
        />
        {badAddress != "" && <Text style={styles.errorMsg}>{badAddress}</Text>}

        <CustomTextInput
          value={password}
          onChangeText={(txt) => {
            setpassword(txt);
          }}
          title={"Password"}
          placeholder={"********"}
          bad={badPassword != "" ? true : false}
        />
        {badPassword != "" && (
          <Text style={styles.errorMsg}>{badPassword}</Text>
        )}

        <CustomSolidBtn
          title={"Sign up"}
          onClick={() => {
            if (validate()) {
            }
          }}
        />
        <CustomBorderBtn
          title={"Login"}
          onClick={() => {
            navigation.goBack();
          }}
        />
      </ScrollView>
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

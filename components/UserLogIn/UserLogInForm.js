import React, { useContext, useEffect, useState } from "react";
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  Button,
  Alert,
  Pressable,
} from "react-native";
import SignUp from "./SignUp";
import Checkbox from "expo-checkbox";
import { TouchableOpacity } from "react-native-web";
import { useNavigate } from "react-router-dom";
import { main } from "../ContextApi";
import axios from "axios";
import axiosInstance from "../Service/AxiosInstance";

export default function UserLogInForm() {
  const auth = useContext(main);
  const [signIn, setSignIn] = useState(true);
  const handleSignIn = () => {
    setSignIn(true);
  };
  const handleSignUp = () => {
    setSignIn(false);
  };
  const formStyle = StyleSheet.create({
    button: {
      color: "white",
      height: "40px",
      borderRadius: 4,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    },
  });

  const [agree, setAgree] = useState(false);

  // =======form-set-value=======
  const navigate = useNavigate();
  const [userName, setUserName] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const [userPassword, setUserPassword] = useState("");
  const handleSubmit = () => {
    auth.isUserLogIn(userName, userPassword);
  };
  const handleExit = () => {
    navigate("/");
  };
  useEffect(() => {
    axiosInstance("/school/", { method: "GET" })
      .then((res) => console.log(res.data))
      .catch((err) => console.log(err));
  }, []);
  return (
    <View style={style.container}>
      <Text style={style.socialMedia}>Social Media</Text>
      <View style={style.signsignup}>
        <Text
          onPress={handleSignIn}
          style={signIn && { color: "blue", fontWeight: "600" }}>
          Sign in
        </Text>
        <Text
          onPress={handleSignUp}
          style={!signIn && { color: "blue", fontWeight: "600" }}>
          Sign up
        </Text>
      </View>
      {signIn ? (
        <View style={style.form}>
          <Text style={form.label}>Enter your name</Text>
          <TextInput
            style={form.input}
            onChangeText={(actualData) => setUserName(actualData)}
          />
          <Text style={form.label}>Enter your email</Text>
          <TextInput
            style={form.input}
            onChangeText={(actualData) => setUserEmail(actualData)}
          />
          <Text style={form.label}>Enter your password</Text>
          <TextInput
            style={form.input}
            secureTextEntry='true'
            onChangeText={(actualData) => setUserPassword(actualData)}
          />
          <View style={form.wrapper}>
            <Checkbox value={agree} onValueChange={() => setAgree(!agree)} />
            <Text>Agree to all terms and condtions</Text>
          </View>
          <View style={form.button}>
            <TouchableOpacity
              onPress={() => handleSubmit()}
              disabled={!agree}
              style={[{ backgroundColor: agree ? "blue" : "grey" }]}>
              <Text style={[formStyle.button]}>Sign In </Text>
            </TouchableOpacity>
          </View>

          <Pressable style={style.exitButton} onPress={handleExit}>
            <Text style={style.exitText}>Back to home</Text>
          </Pressable>
        </View>
      ) : (
        <SignUp />
      )}
    </View>
  );
}
const style = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: "50%",
    // borderWidth: 1,
    // padding: "20px",
    //width: "70%",
    width: "90%",
    margin: "auto",
    borderRadius: 10,
    borderColor: "grey",
    // backgroundColor: "rgb(220,220,220)",
  },
  socialMedia: {
    fontSize: "20px",
    fontWeight: "600",
  },
  form: {
    flexDirection: "column",
    width: "90%",
  },
  input: {
    height: "40px",
    borderBottomWidth: 1,
  },
  loginbutton: {
    marginTop: 15,
  },
  signsignup: {
    marginTop: "20px",
    flexDirection: "row",
    gap: "20px",
    marginBottom: 10,
  },
  exitButton: {
    backgroundColor: "red",
    textAlign: "center",
    height: 40,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 15,
    borderRadius: 4,
  },
  exitText: {
    color: "white",
  },
});
const form = StyleSheet.create({
  label: {
    textAlign: "left",
    marginBottom: 5,
  },
  input: {
    height: 40,
    borderWidth: 1,
    borderColor: "rgba(0,0,0,0.3)",
    paddingHorizontal: 15,
    paddingVertical: 7,
    borderRadius: 1,
    marginBottom: 20,
    borderRadius: 4,
    width: "100%",
  },
  wrapper: {
    flexDirection: "row",
    gap: "20px",
    marginBottom: 20,
  },

  buttondisble: {
    backgroundColor: "grey",
  },
});

import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useContext } from "react";
import {
  View,
  StyleSheet,
  Text,
  Image,
  Button,
  Touchable,
  TouchableOpacity,
} from "react-native";
import { Link } from "react-router-dom";
import { main } from "../ContextApi";
import HighLightOnProfile from "./HighLightOnProfile";

const UserProfile = () => {
  const auth = useContext(main);
  const handleLogOut = () => {
    auth.isUserLogOut();
  };
  return (
    <View>
      <View style={styles.userNameExit}>
        <Text style={styles.userName}>Jerald Jayakumar</Text>
        <Link to='/'>
          {" "}
          <FontAwesomeIcon icon={faArrowLeft} style={{ fontSize: 30 }} />
        </Link>
      </View>
      <View style={styles.profileImgPosts}>
        <Image
          source={{
            uri: "https://images.squarespace-cdn.com/content/v1/5d2346cbe7875300014eeb79/1631544357968-O8O8H4I2UTW5X3NPL355/jordan+barrett+copy.jpg?format=1000w",
          }}
          style={{ width: 100, height: 100, borderRadius: 50 }}
        />
        <View style={styles.postFollwersFollowing}>
          <View style={styles.posts}>
            <Text style={{ marginBottom: 10 }}>1023</Text>
            <Text>Posts</Text>
          </View>
          <View style={styles.posts}>
            <Text style={{ marginBottom: 10 }}>178</Text>
            <Text>Following</Text>
          </View>
          <View style={styles.posts}>
            <Text style={{ marginBottom: 10 }}>1.3M</Text>
            <Text>Follwers</Text>
          </View>
        </View>
      </View>
      <View style={styles.logoutmessage}>
        <TouchableOpacity
          style={{
            backgroundColor: "blue",
            borderRadius: 4,
            height: 34,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}>
          <Text onPress={handleLogOut} style={styles.logoutbuttonMessage}>
            LogOut{" "}
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            borderRadius: 4,

            backgroundColor: "red",
            height: 34,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}>
          <Text style={styles.logoutbuttonMessage}>Message</Text>
        </TouchableOpacity>
      </View>
      <View style={{ marginTop: 10 }}>
        <HighLightOnProfile />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  userNameExit: {
    flexDirection: "row",

    justifyContent: "space-between",
    margin: 20,
  },
  userName: {
    fontSize: 20,
    fontWeight: "600",
  },
  profileImgPosts: {
    flexDirection: "row",
    justifyContent: "space-between",
    margin: 10,
  },
  postFollwersFollowing: {
    flex: 2,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  posts: {
    width: "80px",
    flexDirection: "column",
    alignItems: "center",
  },
  logoutmessage: {
    flexDirection: "row",
    justifyContent: "flex-end",
    gap: 20,
    width: "90%",
  },
  logoutbuttonMessage: {
    width: "100px",
    textAlign: "center",
    color: "white",
  },
});

export default UserProfile;

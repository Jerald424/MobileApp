import React, { useContext } from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import { faMessage, faUser } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import { main } from "../ContextApi";

export default function HomeTopNav() {
  const auth = useContext(main);
  return (
    <View>
      <View style={homeStyle.top}>
        <Text style={{ fontSize: 20, fontWeight: "600" }}>Social Media</Text>
        <View style={homeStyle.topIcon}>
          {auth.userLogInStatus ? (
            <Link to='/userprofile'>
              <Image
                source={{
                  uri: "https://images.pexels.com/photos/35537/child-children-girl-happy.jpg?cs=srgb&dl=pexels-bess-hamiti-35537.jpg&fm=jpg",
                }}
                style={{ width: 40, height: 40, borderRadius: 30 }}
              />
            </Link>
          ) : (
            <Link to='/userlogin'>
              <FontAwesomeIcon icon={faUser} />
            </Link>
          )}

          <FontAwesomeIcon icon={faMessage} />
        </View>
      </View>
    </View>
  );
}
const homeStyle = StyleSheet.create({
  top: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    margin: 20,
  },
  topIcon: {
    flexDirection: "row",
    gap: "20px",
    alignItems: "center",
    justifyContent: "center",
  },
});

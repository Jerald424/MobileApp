import { faHeart, faMessage } from "@fortawesome/free-regular-svg-icons";
import { faMarker, faShare } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";
import HomeStatus from "./HomeStatus";
import HomeTopNav from "./HomeTopNav";
import SuggestedReels from "./SuggestedReels";

export default function Home() {
  return (
    <View>
      <HomeTopNav />
      <HomeStatus />
      <View style={{ marginTop: 30 }}>
        <View style={style.firstPostTitle}>
          <Image
            style={{ width: 40, height: 40, borderRadius: 40 }}
            source={{
              uri: "https://www.teahub.io/photos/full/108-1085401_simple-boy-pic-dp.jpg",
            }}
          />
          <View>
            <Text>Chef Damo</Text>
            <Text style={{ fontSize: "10px" }}>Sponsered</Text>
          </View>
        </View>
        <Image
          style={{ width: "100%", height: "300px" }}
          source={{
            uri: "https://static.scientificamerican.com/sciam/cache/file/7A715AD8-449D-4B5A-ABA2C5D92D9B5A21_source.png",
          }}
        />
        <View style={style.totalIcon}>
          <View style={style.firstPostIcon}>
            <FontAwesomeIcon icon={faHeart} />
            <FontAwesomeIcon icon={faMessage} />
            <FontAwesomeIcon icon={faShare} />
          </View>
          <FontAwesomeIcon icon={faMarker} />
        </View>
      </View>
      <SuggestedReels />
      <HomeTopNav />
      <HomeStatus />
      <View style={{ marginTop: 30 }}>
        <View style={style.firstPostTitle}>
          <Image
            style={{ width: 40, height: 40, borderRadius: 40 }}
            source={{
              uri: "https://www.teahub.io/photos/full/108-1085401_simple-boy-pic-dp.jpg",
            }}
          />
          <View>
            <Text>Chef Damo</Text>
            <Text style={{ fontSize: "10px" }}>Sponsered</Text>
          </View>
        </View>
        <Image
          style={{ width: "100%", height: "300px" }}
          source={{
            uri: "https://static.scientificamerican.com/sciam/cache/file/7A715AD8-449D-4B5A-ABA2C5D92D9B5A21_source.png",
          }}
        />
        <View style={style.totalIcon}>
          <View style={style.firstPostIcon}>
            <FontAwesomeIcon icon={faHeart} />
            <FontAwesomeIcon icon={faMessage} />
            <FontAwesomeIcon icon={faShare} />
          </View>
          <FontAwesomeIcon icon={faMarker} />
        </View>
      </View>
      <SuggestedReels />
    </View>
  );
}
const style = StyleSheet.create({
  firstPostTitle: {
    flexDirection: "row",
    width: "95%",
    marginLeft: "auto",
    marginBottom: 10,
  },
  totalIcon: {
    flexDirection: "row",
    padding: 10,
    justifyContent: "space-between",
    width: "95%",
    margin: "auto",
  },
  firstPostIcon: {
    flexDirection: "row",

    gap: 30,
  },
});

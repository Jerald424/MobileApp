import React from "react";
import { View, Image, Text, ScrollView, StyleSheet } from "react-native";

export default function SuggestedReels() {
  const images = [
    "https://images.unsplash.com/photo-1561653476-e4d0d852f86b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8Ym95JTIwbW9kZWx8ZW58MHx8MHx8&w=1000&q=80",
    "https://images.unsplash.com/photo-1519764622345-23439dd774f7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Ym95JTIwbW9kZWx8ZW58MHx8MHx8&w=1000&q=80",
    "https://images.unsplash.com/photo-1516446636564-c48e723868fc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fGJveSUyMG1vZGVsfGVufDB8fDB8fA%3D%3D&w=1000&q=80",
    "https://images.unsplash.com/photo-1532376783479-9b99134739a7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8NnwzMzEwOTAzfHxlbnwwfHx8fA%3D%3D&w=1000&q=80",
    "https://images.unsplash.com/photo-1597236318465-b54d9fef793a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE5fHx8ZW58MHx8fHw%3D&w=1000&q=80",
    "https://c1.wallpaperflare.com/preview/300/228/34/people-man-guy-standing.jpg",
    "https://w0.peakpx.com/wallpaper/433/434/HD-wallpaper-nature-love-alone-men-strong.jpg",
    "https://w0.peakpx.com/wallpaper/468/720/HD-wallpaper-sunset-alone-color-orange-strong-sunrise.jpg",
  ];
  return (
    <View>
      <Text style={{ marginBottom: 10 }}>helllo suggested reels</Text>

      <ScrollView
        horizontal={true}
        style={style.reelScroll}
        showsVerticalScrollIndicator={false}>
        {images.map((res) => {
          return (
            <>
              <Image source={{ uri: res }} style={style.reelThumbnail} />
            </>
          );
        })}
      </ScrollView>
    </View>
  );
}
const style = StyleSheet.create({
  reelThumbnail: {
    width: "120px",
    height: "180px",
    marginRight: "10px",
    borderRadius: "5px",
  },
  reelScroll: {
    width: "95%",
    margin: "auto",
  },
});

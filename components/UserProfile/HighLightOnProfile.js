import React from "react";
import { View, StyleSheet, Image, ScrollView } from "react-native";

const HighLightOnProfile = () => {
  const images = [
    "https://media.istockphoto.com/photos/mountain-landscape-picture-id517188688?k=20&m=517188688&s=612x612&w=0&h=i38qBm2P-6V4vZVEaMy_TaTEaoCMkYhvLCysE7yJQ5Q=",
    "https://images.unsplash.com/photo-1598755257130-c2aaca1f061c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8d2lsZCUyMGFuaW1hbHxlbnwwfHwwfHw%3D&w=1000&q=80",
    "https://st.depositphotos.com/2044631/2014/i/600/depositphotos_20146623-stock-photo-tigers-face.jpg",
    "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/cute-baby-animals-1558535060.jpg?crop=0.752xw:1.00xh;0.125xw,0&resize=640:*",
    "http://3.bp.blogspot.com/-XmEd5HOaOB0/TdDg9pVU9OI/AAAAAAAABDg/qWCn5ClbHes/s1600/Ajith+Will+look+young+in+%25E2%2580%2598Billa+2.jpg",
    "https://wallpaperaccess.com/full/502420.jpg",
    "https://wallpaperaccess.com/full/1502686.jpg",
    "https://media.gqindia.com/wp-content/uploads/2020/07/top-image-04.jpg",
  ];
  return (
    <ScrollView horizontal='true' showsHorizontalScrollIndicator={false}>
      {images.map((res) => {
        return (
          <>
            <Image
              source={{ uri: res }}
              style={{
                width: 100,
                height: 100,
                borderRadius: 100,
                marginRight: 15,
                borderWidth: 1,
                borderColor: "grey",
              }}
            />
          </>
        );
      })}
    </ScrollView>
  );
};

const styles = StyleSheet.create({});

export default HighLightOnProfile;

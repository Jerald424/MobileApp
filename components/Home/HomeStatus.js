import React from "react";
import { ScrollView, Text, View, StyleSheet, Image } from "react-native";

export default function HomeStatus() {
  const userDetails = [
    {
      name: "Jerald",
      img: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cGVyc29ufGVufDB8fDB8fA%3D%3D&w=1000&q=80",
    },
    {
      name: "Jaya",
      img: "https://images.unsplash.com/photo-1552374196-c4e7ffc6e126?ixlib=rb-1.2.1&w=1080&fit=max&q=80&fm=jpg&crop=entropy&cs=tinysrgb",
    },
    {
      name: "Saba",
      img: "https://media.hswstatic.com/eyJidWNrZXQiOiJjb250ZW50Lmhzd3N0YXRpYy5jb20iLCJrZXkiOiJnaWZcL3BsYXlcLzBiN2Y0ZTliLWY1OWMtNDAyNC05ZjA2LWIzZGMxMjg1MGFiNy0xOTIwLTEwODAuanBnIiwiZWRpdHMiOnsicmVzaXplIjp7IndpZHRoIjo4Mjh9fX0=",
    },
    {
      name: "Kittu",
      img: "https://media.istockphoto.com/photos/beautiful-young-woman-wearing-glasses-picture-id1171408770?k=20&m=1171408770&s=170667a&w=0&h=d3x-l2T5uSw3nQk0rdA1unB3hru1LpkMlRTbaoD3XpM=",
    },
    {
      name: "Thambi",
      img: "https://images.unsplash.com/photo-1567515004624-219c11d31f2e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NTR8fG1hbnxlbnwwfHwwfHw%3D&w=1000&q=80",
    },
    {
      name: "Kannan",
      img: "https://images.unsplash.com/photo-1566753323558-f4e0952af115?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8bWFsZXxlbnwwfHwwfHw%3D&w=1000&q=80",
    },
  ];
  return (
    <View>
      <ScrollView horizontal={true} showsVerticalScrollIndicator={false}>
        {userDetails.map((res) => {
          return (
            <>
              <View style={style.container}>
                <Image source={{ uri: res.img }} style={style.statusImg} />
                <Text style={{ textAlign: "center" }}>{res.name}</Text>
              </View>
            </>
          );
        })}
      </ScrollView>
    </View>
  );
}
const style = StyleSheet.create({
  statusImg: {
    height: 70,
    width: 70,
    borderRadius: 70,
    marginRight: 20,
  },
});

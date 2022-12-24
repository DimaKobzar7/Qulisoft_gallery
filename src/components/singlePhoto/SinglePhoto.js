import { useEffect, useState } from "react";

import { StyleSheet, Text, View, Post, Image, FlatList } from "react-native";

export const SinglePhoto = ({ props }) => {
  // const [photos, setPhotos] = useState([]);

  // console.log(props.urls.full);
  // console.log(props.user.name);
  // компонент подключен все ок
  // но ничего не выводится
  // console.log("ff");
  // показывает но только одну картинку
  return (
    <View>
      <Image style={styles.image} source={{ uri: props.urls.raw }} />
      <Text style={styles.imageText}>{props.user.name}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  imageWrap: {
    flex: 1,
    alignItems: "center",
    // width: '100%',
    // height: '100%',
  },

  image: {
    // flex: 1,
    width: "100%",
    // при высоте в 100 процентов накрывает текст картинка или все картинки просто перекрывапют друг друга
    // тоесть накладываются одна на одну
    // height: "100%",
    // width: 100,
    height: 100,
    backgroundColor: "red",
    // marginBottom: 16,
    // objectFit: 'contain'
    // resizeMode: "cover",
  },

  imageText: {
    textAlign: "center",
    fontSize: 14,
    color: "#000",
  },
});

import { useEffect, useState } from "react";

import { StyleSheet, Text, View, Post, Image, FlatList } from "react-native";
import { useSelector } from "react-redux";

export const SinglePhoto = ({ props }) => {
  // const [photos, setPhotos] = useState([]);
  const amount = useSelector((state) => state.amount);
  // console.log("gg");
  // console.log(amount.urls);
  // console.log(amount.map((item) => item.urls.raw));

  // console.log(props.urls.full);
  // console.log(props.user.name);
  // компонент подключен все ок
  // но ничего не выводится
  // console.log("ff");
  // показывает но только одну картинку
  return (
    <View style={styles.imageWrap}>
      <Image style={styles.image} source={{ uri: props.urls.regular }} />
      <Text style={styles.imageText}>Author: {props.user.name}</Text>
      {/* <Image
        style={styles.image}
        source={{ uri: amount.map((item) => item.urls.raw) }}
      />
      <Text style={styles.imageText}>{props.user.name}</Text> */}
    </View>
  );
};

const styles = StyleSheet.create({
  imageWrap: {
    flex: 1,
    // alignItems: "center",
    // width: '100%',
    // height: '100%',
    // marginTop: 16,
    // marginBottom: 48,
    marginVertical: 24,
    borderStyle: "solid",
    borderBottomWidth: 2,
    borderBottomColor: "#3949ab",
  },

  image: {
    // flex: 1,
    // width: "100%",
    // при высоте в 100 процентов накрывает текст картинка или все картинки просто перекрывапют друг друга
    // тоесть накладываются одна на одну
    // height: "100%",
    // width: 100,
    // не много ли метса я под фото дал и стоит ли использовать высоту для этого?
    // высота меньше приводит к плохому отображению картинок
    height: 200,
    backgroundColor: "red",
    marginBottom: 16,

    // objectFit: 'contain'
    // resizeMode: "cover",
  },

  imageText: {
    textAlign: "center",
    fontSize: 14,
    color: "#000",
    marginBottom: 8,
  },
});

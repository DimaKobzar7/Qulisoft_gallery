import { useEffect, useState } from "react";

import {
  StyleSheet,
  Text,
  View,
  Post,
  Image,
  FlatList,
  TouchableOpacity,
} from "react-native";
import { useSelector } from "react-redux";

export const SinglePhoto = ({ props, test, showOnePhoto }) => {
  // const [photos, setPhotos] = useState([]);
  const amount = useSelector((state) => state.amount);

  return (
    <View style={styles.imageWrap}>
      <TouchableOpacity onPress={() => test(props.id)}>
        <Image style={styles.image} source={{ uri: props.urls.regular }} />
      </TouchableOpacity>

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

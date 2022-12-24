// import { useState } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { StyleSheet, Text, View, Post, Image } from "react-native";
import { actions } from "../../features/photos";

export const Gallery = () => {
  const dispatch = useDispatch();

  const add = () => dispatch(actions.add(4));
  const touchTest = () => {
    // работает
    console.log("It`s work!");
  };
  // add();
  const amount = useSelector((state) => state.amount);
  // console.log(amount);
  return (
    // извлеки в стейт или сразу редакс используй
    // const response = fetch(
    //   `https://api.unsplash.com/photos/?client_id=cf49c08b444ff4cb9e4d126b7e9f7513ba1ee58de7906e4360afc1a33d1bf4c0`
    // );
    // const json = response.json();
    // response.then((item) => console.log(item));
    // console.log(response);
    // console.log(img)
    <View style={styles.container}>
      <View style={styles.imageWrap}>
        <Text style={styles.imageText} onPress={add}>
          Author name {amount}
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    // margin: '100px auto',
    // maxWidth: '1440px',
    // marginHorizontal: 'auto',
    // alignItems: "center"
    paddingVertical: 48,
    paddingHorizontal: 16,
  },

  imageWrap: {
    alignItems: "center",
    // width: '100%',
    // height: '100%',
  },

  image: {
    width: "100%",
    height: "100%",
    backgroundColor: "red",
    marginBottom: "16px",
    // objectFit: 'contain'
    resizeMode: "cover",
  },

  //  imageText: {
  //   textAlign: 'center'
  //  }
});

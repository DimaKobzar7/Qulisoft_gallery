import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

export const Navbar = ({ textChange, setSelectedPhoto }) => {
  // console.log(textChange);
  // кнопка только внизу нажимается и это наверное из за шапки андроида и там проста не кликабельная зона
  const backToGallery = () => {
    console.log("t");
    setSelectedPhoto(null);
  };
  return (
    <View style={!textChange ? styles.navbar : styles.navbarOnePhoto}>
      {!textChange ? null : (
        <TouchableOpacity style={styles.button} onPress={backToGallery}>
          <Text>gg</Text>
        </TouchableOpacity>
      )}
      <Text style={styles.text}>
        {!textChange ? "Awesome gallery" : "Back to gallery"}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  navbar: {
    // flex: 1,
    // width: "100%",
    // flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-end",
    backgroundColor: "#3949ab",
    paddingBottom: 24,
    // marginBottom: 16,
    height: 80,
  },

  // надо разобратся как относительно стейта менять стили в одном классе а не создавать новые стили
  // и вщзможно библиоткеа класс нейм тут понадобится
  navbarOnePhoto: {
    paddingHorizontal: 16,
    alignItems: "center",
    // justifyContent: "flex-end",
    backgroundColor: "#3949ab",
    // paddingBottom: 24,
    paddingTop: 16,
    flexDirection: "row",
    height: 80,
  },

  text: {
    color: "white",
    // padding: 4,
    // textAlign: "center",
  },

  // опять же костыль, надо через 1 класс это провернуть
  // textOnePhoto: {
  //   color: "white",
  //   transform: [{ translateX: -55 }],
  //   // padding: 4,
  //   // textAlign: "center",
  // },

  // компонент кнопка не подерживает атрибут стайл поэтому нужен костыль через
  // тачопасити
  button: {
    marginRight: 24,
    backgroundColor: "red",
  },
});

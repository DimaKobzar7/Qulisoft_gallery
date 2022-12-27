import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";

export const Navbar = ({ textChange, setSelectedPhoto }) => {
  const backToGallery = () => {
    // console.log("t");
    setSelectedPhoto(null);
  };

  return (
    // <View style={!textChange ? styles.navbar : styles.navbarOnePhoto}>
    //   {!textChange ? null : (
    //     <TouchableOpacity style={styles.button} onPress={backToGallery}>
    //       <Text>gg</Text>
    //       <Image
    //         style={styles.arrow}
    //         source={require("../../images/svg/back-arrow_icon-icons.com_72866.svg")}
    //       />
    //     </TouchableOpacity>
    //   )}
    //   <Text style={styles.text}>
    //     {!textChange ? "Awesome gallery" : "Back to gallery"}
    //   </Text>
    // </View>
    <>
      {!textChange ? (
        <View style={styles.navbar}>
          <Text style={styles.text}>Awesome gallery</Text>
        </View>
      ) : (
        <View style={styles.navbarOnePhoto}>
          <TouchableOpacity style={styles.button} onPress={backToGallery}>
            <Text>gg</Text>
            <Image
              style={styles.arrow}
              source={require("../../images/svg/back-arrow_icon-icons.com_72866.svg")}
            />
          </TouchableOpacity>

          <Text style={styles.text}>Back to gallery</Text>
        </View>
      )}
    </>

    // <View style={!textChange ? styles.navbar : styles.navbarOnePhoto}>
    //   {!textChange ? null : (
    //     <TouchableOpacity style={styles.button} onPress={backToGallery}>
    //       <Text>gg</Text>
    //       <Image
    //         style={styles.arrow}
    //         source={require("../../images/svg/back-arrow_icon-icons.com_72866.svg")}
    //       />
    //     </TouchableOpacity>
    //   )}
    //   <Text style={styles.text}>
    //     {!textChange ? "Awesome gallery" : "Back to gallery"}
    //   </Text>
    // </View>
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

  arrow: {
    height: 24,
    width: 24,
  },
});

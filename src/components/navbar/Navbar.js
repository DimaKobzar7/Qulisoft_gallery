import { View, Text, StyleSheet } from "react-native";

export const Navbar = () => {
  return (
    <View style={styles.navbar}>
      <Text style={styles.text}>Awesome gallery</Text>
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

  text: {
    color: "white",
  },
});

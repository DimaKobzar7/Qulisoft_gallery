// import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Post, Image } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      {/* <Text>Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" />

     <script src="http://192.168.1.121:8097"></script> */}
     <View>
        <Image
          source={{uri: "https://bipbap.ru/wp-content/uploads/2017/04/0_7c779_5df17311_orig.jpg"}}
          style={styles.image}
        />
        <Text style={styles.imageText}>Author name</Text>
     </View>
    </View>

  );


}

const styles = StyleSheet.create({
  container: {
    // margin: '100px auto',
    maxWidth: '1440px',
    marginHorizontal: 'auto'
  },

 image: {
  width: '100px',
  height: '100px',
  backgroundColor: 'red',
  marginBottom: '16px',
 },

 imageText: {
  textAlign: 'center'
 }

});

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },

//   testTest: {
//     color: "red"
//   }
// });

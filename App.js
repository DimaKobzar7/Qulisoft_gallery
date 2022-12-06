// import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View, Post, Image } from 'react-native';

// let test = [1, 2, 3]

let test = [
  {
    "title": "Inception",
    "description": "Follows the lives of eight very different couples in dealing with their love lives in various loosely interrelated tales all set during a frantic month before Christmas in London, England.",
    "imgUrl": "https://m.media-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_SX300.jpg",
    "imdbUrl": "https://www.imdb.com/title/tt1375666",
    "imdbId": "tt1375666"
  },
  {
    "title": "Love Actually",
    "description": "A thief who steals corporate secrets through the use of dream-sharing technology is given the inverse task of planting an idea into the mind of a C.E.O.",
    "imgUrl": "https://m.media-amazon.com/images/M/MV5BMTY4NjQ5NDc0Nl5BMl5BanBnXkFtZTYwNjk5NDM3._V1_.jpg",
    "imdbUrl": "https://www.imdb.com/title/tt0314331",
    "imdbId": "tt0314331"
  },
  {
    "title": "The Day After Tomorrow",
    "description": "Jack Hall, paleoclimatologist, must make a daring trek from Washington, D.C. to New York City to reach his son, trapped in the cross-hairs of a sudden international storm which plunges the planet into a new Ice Age.",
    "imgUrl": "https://m.media-amazon.com/images/M/MV5BMTY4YWMzMTMtZjUyOS00OGY1LTljMGUtOWU5ZjYzMjc2ZTMwXkEyXkFqcGdeQXVyMTYzMDM0NTU@._V1_SY1000_CR0,0,701,1000_AL_.jpg",
    "imdbUrl": "https://www.imdb.com/title/tt0319262",
    "imdbId": "tt0319262"
  },
  {
    "title": "Rogue One",
    "description": "The daughter of an Imperial scientist joins the Rebel Alliance in a risky move to steal the Death Star plans.",
    "imgUrl": "https://m.media-amazon.com/images/M/MV5BMjEwMzMxODIzOV5BMl5BanBnXkFtZTgwNzg3OTAzMDI@._V1_SY1000_SX675_AL_.jpg",
    "imdbUrl": "https://www.imdb.com/title/tt3748528",
    "imdbId": "tt3748528"
  },
  {
    "title": "The Holiday",
    "description": "Two women troubled with guy-problems swap homes in each other's countries, where they each meet a local guy and fall in love.",
    "imgUrl": "https://m.media-amazon.com/images/M/MV5BMTI1MDk4MzA2OF5BMl5BanBnXkFtZTYwMjQ3NDc3._V1_.jpg",
    "imdbUrl": "https://www.imdb.com/title/tt0457939",
    "imdbId": "tt0457939"
  }
]

export default function App() {
  // console.log(test.filter(a => a.title.includes('L')))
  const [img, setImg] = useState(test)

  // console.log(img)
  return (
    <View style={styles.container}>
      {/* <Text>Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" />

     <script src="http://192.168.1.121:8097"></script> */}
     <View style={styles.imageWrap}>
       {img.map(item => {
        return (
        <>
          <Image
            source={{uri: item.imgUrl}}
            style={styles.image}
          />
          <Text >{item.title}</Text>
        </>)
      
       })}
        {/* <Image
          source={{uri: "https://bipbap.ru/wp-content/uploads/2017/04/0_7c779_5df17311_orig.jpg"}}
          style={styles.image}
        /> */}
        {/* <Image
          source={{uri: "https://m.media-amazon.com/images/M/MV5BMTI1MDk4MzA2OF5BMl5BanBnXkFtZTYwMjQ3NDc3._V1_.jpg"}}
          style={styles.image}
        /> */}
        {/* <Text style={styles.imageText}>Author name</Text> */}
     </View>
    </View>

  );


}

const styles = StyleSheet.create({
  container: {
    // margin: '100px auto',
    // maxWidth: '1440px',
    // marginHorizontal: 'auto',
    // alignItems: "center"
    paddingVertical: 48,
    paddingHorizontal: 16
    
  },

  imageWrap: {
    alignItems: "center"
  },

 image: {
  width: '100%',
  height: '100%',
  backgroundColor: 'red',
  marginBottom: '16px',
 },

//  imageText: {
//   textAlign: 'center'
//  }

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

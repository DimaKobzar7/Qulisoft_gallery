import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { StyleSheet, Text, View, Post, Image, FlatList } from "react-native";
import { actions } from "../../features/photos";
// import { FlatList } from "react-native-web";
import { SinglePhoto } from "../singlePhoto/SinglePhoto";

export const Gallery = () => {
  const dispatch = useDispatch();
  const [photos, setPhotos] = useState([]);

  // это показывает инфломацию по такому айди
  useEffect(() => {
    fetch(
      "https://api.unsplash.com/photos/?client_id=ab3411e4ac868c2646c0ed488dfd919ef612b04c264f3374c97fff98ed253dc9"
    )
      .then((response) => response.json())
      .then((json) => setPhotos(json));
  }, []);

  // console.log(data);

  // тут мне надо из апи кидать в редах инфу с картинками
  const add = () => dispatch(actions.add(4));

  // rest instruction
  // "urls": {
  //   "raw": "https://images.unsplash.com/photo-1417325384643-aac51acc9e5d",
  //   "full": "https://images.unsplash.com/photo-1417325384643-aac51acc9e5d?q=75&fm=jpg",
  //   "regular": "https://images.unsplash.com/photo-1417325384643-aac51acc9e5d?q=75&fm=jpg&w=1080&fit=max",
  //   "small": "https://images.unsplash.com/photo-1417325384643-aac51acc9e5d?q=75&fm=jpg&w=400&fit=max",
  //   "thumb": "https://images.unsplash.com/photo-1417325384643-aac51acc9e5d?q=75&fm=jpg&w=200&fit=max"
  // },
  //  {data.map((item) => console.log(item.urls.raw))}
  const amount = useSelector((state) => state.amount);
  // console.log(amount);
  // console.log(photos);
  // const renderItem = ({ item }) => (
  //   <View style={styles.renderItem} key={item.urls.regular}>
  //     <Image style={styles.img} source={{ uri: item.urls.regular }} />
  //     {/* <Text>By {item.user.username}</Text> */}
  //   </View>
  // );

  return (
    // извлеки в стейт или сразу редакс используй
    // const json = response.json();
    // response.then((item) => console.log(item));
    // console.log(response);
    // console.log(img)
    <View style={styles.container}>
      <View style={styles.imageWrap}>
        <Text style={styles.imageText} onPress={add}>
          Author name {amount}
        </Text>
        {/* <View>
          <FlatList data={photos} renderItem={renderItem} />
        </View> */}
        <FlatList
          data={photos}
          keyExtractor={(item) => item.id.toString()}
          // можно будет передать айтем как пропс и в другом компоненете его посмотреть
          // renderItem={({ item }) => (
          //   <Image style={styles.image} source={{ uri: item.urls.raw }} />
          // )}
          renderItem={({ item }) => <SinglePhoto props={item} />}
          // renderItem={({ item }) => console.log(item.urls.raw)}
          // renderItem={({ item }) =>
          //   console.log(item.map((t) => console.log(t)))
          // }
          // renderItem={(item) => (
          //   <Image style={styles.image} source={{ uri: item.urls.regular }} />
          // )}
        />
        {/* {photos.map((item) => {
          return (
            <Image
              style={styles.image}
              key={item.id}
              source={{ uri: item.urls.regular }}
            />
          );
        })} */}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // margin: '100px auto',
    // maxWidth: '1440px',
    // marginHorizontal: 'auto',
    // alignItems: "center"
    paddingVertical: 48,
    paddingHorizontal: 16,
  },

  imageWrap: {
    flex: 1,
    alignItems: "center",
    // width: '100%',
    // height: '100%',
  },

  image: {
    width: "100%",
    height: "100%",
    // width: 100,
    // height: 100,
    // backgroundColor: "red",
    // marginBottom: "16px",
    // objectFit: 'contain'
    // resizeMode: "cover",
  },

  //  imageText: {
  //   textAlign: 'center'
  //  }
});

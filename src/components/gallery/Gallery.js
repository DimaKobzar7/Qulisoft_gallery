import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { StyleSheet, Text, View, Post, Image, FlatList } from "react-native";
import { actions } from "../../features/photos";
// import { FlatList } from "react-native-web";
import { SinglePhoto } from "../singlePhoto/SinglePhoto";
import { photoData } from "../../API/photosApi";
import { Navbar } from "../navbar/Navbar";

// async function test(params) {
//   let data = await fetch(
//     "https://api.unsplash.com/photos/?client_id=ab3411e4ac868c2646c0ed488dfd919ef612b04c264f3374c97fff98ed253dc9"
//   );

//   console.log(data);
// }

// т=ут еще и фотки с одного ключа меняються переодически и это вызывает баг что картинки не отображаются
export const Gallery = () => {
  const dispatch = useDispatch();

  // console.log(photoData());
  // console.log("gg");
  // const [photos, setPhotos] = useState([]);
  // нужна чтобы получить данные из фетча и эта функция кидает все в редакс
  const add = (value) => dispatch(actions.add(value));

  // это работает!!!
  useEffect(() => {
    // async function getData() {
    //   try {
    //     let response = await fetch(
    //       "https://api.unsplash.com/photos/?client_id=ab3411e4ac868c2646c0ed488dfd919ef612b04c264f3374c97fff98ed253dc9"
    //     );
    //     response = await response.json();

    //     dispatch(actions.add(response));
    //     (async () => {

    //     } )();
    //   } catch (error) {
    //     console.log(error);
    //   }
    // }

    // getData();

    (async () => {
      try {
        let response = await fetch(
          "https://api.unsplash.com/photos/?client_id=ab3411e4ac868c2646c0ed488dfd919ef612b04c264f3374c97fff98ed253dc9"
        );
        response = await response.json();

        dispatch(actions.add(response));
      } catch (error) {
        console.log(error);
      }
    })();
  }, []);

  // useEffect(() => {
  //   // хотел полученые даные задиспатчить но они выглядят так что я не использовал метод для преобразавания из json
  //   // console.log(photoData().then((item) => item));
  //   // консолит норм а результат возвращае т абракадабру
  //   console.log(photoData());
  //   // console.log("gg");
  // }, []);

  // console.log(photos);

  // тут мне надо из апи кидать в редах инфу с картинками
  // const add = () => dispatch(actions.add(4));
  //  {data.map((item) => console.log(item.urls.raw))}
  const amount = useSelector((state) => state.amount);
  // console.log(amount);

  return (
    <>
      <Navbar />
      <View style={styles.container}>
        {/* <Navbar /> */}
        <View style={styles.imageWrap}>
          {/* <Text style={styles.imageText} onPress={add}>
          Author name
        
        </Text> */}
          {/* <View>
          <FlatList data={photos} renderItem={renderItem} />
        </View> */}
          <FlatList
            // data={photos}
            data={amount}
            keyExtractor={(item) => item.id.toString()}
            // хоть я и использовал редакс но этот тег все равно требует передачи пропсов
            // только теперь эти пропсы тянутся с редакса
            renderItem={({ item }) => <SinglePhoto props={item} />}
            // // можно будет передать айтем как пропс и в другом компоненете его посмотреть
            // renderItem={({ item }) => (
            //   <Image style={styles.image} source={{ uri: item.urls.raw }} />
            // )}
            // неясно почему не через компонент не работает сразу тут!!!!????
            // renderItem={({ item }) => <SinglePhoto props={item} />}
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
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // width: "100%",
    // margin: '100px auto',
    // maxWidth: '1440px',
    // marginHorizontal: 'auto',
    // alignItems: "center"
    // paddingVertical: 48,
    paddingHorizontal: 16,
  },

  imageWrap: {
    // marginTop: 16,
    // flex: 1,
    // alignItems: "center",
    // width: '100%',
    // height: '100%',
  },
});

// rest instruction
// "urls": {
//   "raw": "https://images.unsplash.com/photo-1417325384643-aac51acc9e5d",
//   "full": "https://images.unsplash.com/photo-1417325384643-aac51acc9e5d?q=75&fm=jpg",
//   "regular": "https://images.unsplash.com/photo-1417325384643-aac51acc9e5d?q=75&fm=jpg&w=1080&fit=max",
//   "small": "https://images.unsplash.com/photo-1417325384643-aac51acc9e5d?q=75&fm=jpg&w=400&fit=max",
//   "thumb": "https://images.unsplash.com/photo-1417325384643-aac51acc9e5d?q=75&fm=jpg&w=200&fit=max"
// },

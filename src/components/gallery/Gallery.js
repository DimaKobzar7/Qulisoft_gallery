import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { StyleSheet, Text, View, Post, Image, FlatList } from "react-native";
import { actions } from "../../features/photos";
// import { FlatList } from "react-native-web";
import { SinglePhoto } from "../singlePhoto/SinglePhoto";
import { photoData } from "../../API/photosApi";
import { Navbar } from "../navbar/Navbar";
import { SelectedPhoto } from "../selectedPhoto/SelectedPhoto";

// т=ут еще и фотки с одного ключа меняються переодически и это вызывает баг что картинки не отображаются
export const Gallery = () => {
  const dispatch = useDispatch();

  // console.log(photoData());
  // console.log("gg");
  // const [photos, setPhotos] = useState([]);
  // нужна чтобы получить данные из фетча и эта функция кидает все в редакс
  const add = (value) => dispatch(actions.add(value));

  // // это работает!!!
  // useEffect(() => {

  //   (async () => {
  //     try {
  //       let response = await fetch(
  //         "https://api.unsplash.com/photos/?client_id=ab3411e4ac868c2646c0ed488dfd919ef612b04c264f3374c97fff98ed253dc9"
  //       );
  //       response = await response.json();

  //       dispatch(actions.add(response));
  //     } catch (error) {
  //       console.log(error);
  //     }
  //   })();
  // }, []);

  // тут надо диспатчить а в юз ефекте просто вызывать функцию
  // сделай лоудер на белом экране пока картинка грузится
  // а сами фото в через контейнер и в нем обджект фит выровняй по центру
  const testData = async () => {
    const result = await photoData();

    // console.log(result);
    dispatch(actions.add(result));
    return result;
  };

  useEffect(() => {
    // хотел полученые даные задиспатчить но они выглядят так что я не использовал метод для преобразавания из json
    // console.log(photoData().then((item) => item));
    // консолит норм а результат возвращае т абракадабру
    // console.log(photoData());
    testData();
  }, []);

  const amount = useSelector((state) => state.amount);
  // console.log(amount);
  const [selectedPhoto, setSelectedPhoto] = useState(null);
  const [fullPhoto, setFullPhoto] = useState(false);
  // console.log(selectedPhoto);
  const showFullPhoto = (id) => {
    setSelectedPhoto(id);
  };
  return (
    <>
      <Navbar textChange={selectedPhoto} setSelectedPhoto={setSelectedPhoto} />
      {!selectedPhoto ? (
        <>
          <View style={styles.container}>
            <View style={styles.imageWrap}>
              <FlatList
                data={amount}
                keyExtractor={(item) => item.id.toString()}
                renderItem={({ item }) => (
                  <SinglePhoto
                    props={item}
                    test={showFullPhoto}
                    showOnePhoto={setFullPhoto}
                  />
                )}
              />
            </View>
          </View>
        </>
      ) : (
        // <Text>here must be photo</Text>
        <SelectedPhoto selectedPhoto={selectedPhoto} />
      )}
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

import { Image, StyleSheet } from "react-native";
import { View } from "react-native";
import { useSelector } from "react-redux";

export const SelectedPhoto = ({ selectedPhoto }) => {
  const currentPhoto = useSelector((state) => state.amount);
  // вроде что то по айди находит, значения в конце консоли меняются при нажати на разные картинки значит что то меняет
  // console.log(currentPhoto.find((item) => item.id === selectedPhoto));
  let choosenPhoto = currentPhoto.find((item) => item.id === selectedPhoto);
  console.log(choosenPhoto.urls);
  // так показывает по символьно буквы из старта адресса то есть http
  // console.log(currentPhoto.map((item) => item.urls.full[1]));
  // console.log(selectedPhoto);
  return (
    <>
      <Image
        style={styles.image}
        // работает но долго грузит и картинки выглядят не очень при полном экране
        source={{
          uri: choosenPhoto.urls.full,
          // uri: "https://images.unsplash.com/photo-1664575196044-195f135295df?crop=entropy&cs=tinysrgb&fm=jpg&ixid=MnwzNDQ1M3wxfDF8YWxsfDF8fHx8fHwyfHwxNjcxOTk1Nzg4&ixlib=rb-4.0.3&q=80",
        }}
      />
    </>
  );
  // return <Image source={{ uri: currentPhoto.map((item) => item.urls.full) }} />;
};

// <Image source={{ uri: currentPhoto.urls.regular }} />

const styles = StyleSheet.create({
  image: {
    // не много ли метса я под фото дал и стоит ли использовать высоту для этого?
    // высота меньше приводит к плохому отображению картинок
    // height: 200,
    height: "100%",
    backgroundColor: "red",
    marginBottom: 16,
    // marginHorizontal: 16,

    // objectFit: 'contain'
    // resizeMode: "cover",
  },
  block: {
    height: 70,
  },
});

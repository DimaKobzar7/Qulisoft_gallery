// import { actions } from "../features/photos";
// import { useDispatch } from "react-redux";

export const photoData = async () => {
  try {
    let response = await fetch(
      "https://api.unsplash.com/photos/?client_id=ab3411e4ac868c2646c0ed488dfd919ef612b04c264f3374c97fff98ed253dc9"
    );
    // response = await response.json();

    let normData = await response.json();

    // dispatch(actions.add(response));
    // console.log(response);
    console.log(normData);
    // return response;
    return normData;
  } catch (error) {
    console.log(error);
  }
};

// это показывает инфломацию по такому айди
// useEffect(() => {
//   fetch(
//     "https://api.unsplash.com/photos/?client_id=ab3411e4ac868c2646c0ed488dfd919ef612b04c264f3374c97fff98ed253dc9"
//   )
//     .then((response) => response.json())
//     // .then((json) => setPhotos(json));
//     .then((json) => dispatch(actions.add(json)))
//     .catch((error) => {
//       console.log(error);
//     });
// }, []);

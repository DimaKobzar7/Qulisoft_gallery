// import { configureStore } from "@reduxjs/toolkit";

// const store = configureStore({
//   reducer: {
//     amount: amountReducer,
//     goods: goodsReducer,
//     position: positionReducer,
//   },
// });

// export default store;

// npm i redux @types/redux
// import { composeWithDevTools } from "redux-devtools-extension";
import { combineReducers, createStore } from "redux";
import amountReducer from "../features/photos";

const reducer = combineReducers({
  amount: amountReducer,
});

const store = createStore(reducer);

// console.log(store.getState());

export default store;

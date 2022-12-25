import { configureStore } from "@reduxjs/toolkit";
import amountReducer from "../features/photos";

const store = configureStore({
  reducer: {
    amount: amountReducer,
  },
});

// // console.log(store.getState());

export default store;

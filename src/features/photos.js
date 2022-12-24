// import { createSlice, PayloadAction } from "@reduxjs/toolkit";

// const amountSlice = createSlice({
//   name: 'photos',
//   initialState: 0,
//   reducers: {
//     add: (value, action) => value + action.payload,
//     take: (value, action) => value - action.payload,
//     clear: () => 0,
//   },

//   extraReducers: (builder) => {
//     builder.addCase(moveLeft.type, (value) => value + 1)
//   }
// })

// export const { actions } = amountSlice;

// export default amountSlice.reducer;
const add = (value) => ({
  type: "amount/ADD",
  payload: value,
});

const amountReducer = (amount = 0, action) => {
  switch (action.type) {
    case "amount/ADD":
      return amount + action.payload;

    default:
      return amount;
  }
};

export const actions = { add };

export default amountReducer;

import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const amountSlice = createSlice({
  name: "amount",
  initialState: 0,
  reducers: {
    // когда буду делать массив с данными из апи то можно туту делать и с мутациями
    // так как тулкит сам делает копию и я по сути тут и работаю с копией
    // если я с add верну что то то оно у бидет новым стейтом
    add: (value, action) => value + action.payload,
  },
});

export const { actions } = amountSlice;

// actions включает в себя все редюсеры то есть наш add там будет и не надо теперь их по одному импортить

export default amountSlice.reducer;

// export default amountSlice.reducer;
// const add = (value) => ({
//   type: "amount/ADD",
//   payload: value,
// });

// const amountReducer = (amount = 0, action) => {
//   switch (action.type) {
//     case "amount/ADD":
//       return amount + action.payload;

//     default:
//       return amount;
//   }
// };

// export const actions = { add };

// export default amountReducer;

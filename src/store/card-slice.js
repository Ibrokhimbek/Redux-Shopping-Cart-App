import { createSlice } from "@reduxjs/toolkit";

const cardSlice = createSlice({
  name: "card",
  initialState: {
    itemsList: [],
    totalQuantity: 0,
    showCart: false,
    totalPrice: 0,
  },
  reducers: {
    addToCard(state, action) {
      const newItem = action.payload;

      const existingItem = state.itemsList.find(
        (item) => item.id === newItem.id
      );

      if (existingItem) {
        existingItem.quantity++;
        existingItem.totalPrice += newItem.price;
        state.totalPrice += newItem.price;
      } else {
        state.itemsList.push({
          id: newItem.id,
          price: newItem.price,
          quantity: 1,
          totalPrice: newItem.price,
          name: newItem.name,
        });
        state.totalQuantity++;
        state.totalPrice += newItem.price;
      }
    },
    removeFromCart(state, action) {},
    showCard(state, action) {
      state.showCart = !state.showCart;
    },
  },
});

export const { addToCard, showCard, removeFromCart } = cardSlice.actions;

export default cardSlice;

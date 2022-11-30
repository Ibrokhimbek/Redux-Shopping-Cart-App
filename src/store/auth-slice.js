import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
  name: "auth",
  initialState: { isLoggedIn: false },
  reducers: {
    login(state, action) {
      const password = 123;
      const login = "Hello";
      // eslint-disable-next-line eqeqeq
      if (login === action.payload.username && password == action.payload.pass) {
        state.isLoggedIn = true;
      } else {
        console.log("error");
      }
    },
    logout(state, action) {
      state.isLoggedIn = false;
    },
  },
});

export const { login, logout } = authSlice.actions;

export default authSlice;

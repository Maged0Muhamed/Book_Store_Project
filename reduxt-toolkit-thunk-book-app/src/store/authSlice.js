import { createSlice } from "@reduxjs/toolkit";
const authSlice = createSlice({
  name: "authSlice",
  initialState: { isLoggedIn: false, name: "kareem nour" },
  reducers: {
    logInOut: (state, action) => {
      state.isLoggedIn = !state.isLoggedIn;
    },
  },
});
export default authSlice.reducer;
export const { logInOut } = authSlice.actions;

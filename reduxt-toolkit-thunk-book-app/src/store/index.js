import { configureStore } from "@reduxjs/toolkit";
import books from "./bookSlice";
import auth from "./authSlice";
import report from "./reportSlice";
const store = configureStore({ reducer: { books, auth, report } });
export default store;

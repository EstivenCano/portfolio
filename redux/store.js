import { configureStore } from "@reduxjs/toolkit";
import { themeReducer } from "./features/theme.slice";

const reducer = {
  theme: themeReducer,
};

const store = configureStore({
  reducer,
});

export default store;

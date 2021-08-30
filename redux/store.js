import { configureStore } from "@reduxjs/toolkit";
import { themeReducer } from "./features/theme.slice";
import { dataReducer } from "./features/data.slice";

const reducer = {
  theme: themeReducer,
  data: dataReducer,
};

const store = configureStore({
  reducer,
});

export default store;

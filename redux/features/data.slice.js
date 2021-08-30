import { createSlice } from "@reduxjs/toolkit";
import englishData from "../../public/data/english.json";
import spanishData from "../../public/data/español.json";

const dataSlice = createSlice({
  name: "data",
  initialState: {
    language: "English",
    data: englishData,
  },
  reducers: {
    setLanguage: (state) => {
      state.language = state.language === "English" ? "Español" : "English";
    },
    setData: (state) => {
      state.data = state.language === "English" ? englishData : spanishData;
    },
  },
});

export const dataReducer = dataSlice.reducer;

export const { setLanguage, setData } = dataSlice.actions;

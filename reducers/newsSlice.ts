import { Post } from "@/models";
import { Title } from "@/models";
import { createSlice } from "@reduxjs/toolkit";

interface NewsState {
  news: Post[];
  titles: Title[];
}

const initialState: NewsState = {
  news: [],
  titles: [],
};

const NewsSlice = createSlice({
  name: "News",
  initialState,
  reducers: {
    myNews: (state, action) => {
      state.news = action.payload;
    },
    myTitles: (state, action) => {
      state.titles = action.payload;
    },
  },
});

export const { myNews, myTitles } = NewsSlice.actions;

export default NewsSlice.reducer;

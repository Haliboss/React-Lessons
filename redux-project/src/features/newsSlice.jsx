import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  name: [],
  loading: false,
  error: false,
};

export const getNews = createAsyncThunk(
  "getNews",
  async (thunk, { rejectWithValue }) => {
    const API_KEY = "9c9d2f8aaa164bce8e499ab00ac40e1";
    const url = `https://newsapi.org/v2/top-headlines?country=us&apiKey=${API_KEY}`;
    try {
      const { data } = await axios(url);
      return data.articles;
    } catch (error) {
      console.log(error);
      return rejectWithValue("something went wrong...");
    }
  }
);

const newsSlice = createSlice({
  name: "news",
  initialState,
  reducers: {
    clearNewsList: (state) => {
      state.newsList = [];
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getNews.pending, (state) => {
        state.loading = true;
      })
      .addCase(getNews.fulfilled, (state, { payload }) => {
        state.newsList = payload;
        state.loading = false;
      })
      .addCase(getNews.rejected, (state) => {
        state.loading = false;
        state.error = true;
      });
  },
});

export const { clearNewsList } = newsSlice.actions;

export default newsSlice.reducer;

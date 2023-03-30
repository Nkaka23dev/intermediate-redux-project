import { configureStore, createSlice } from "@reduxjs/toolkit";
import { articleApi } from "./apiService";

const initialState = {
  onPageArticles: [],
  publishers: [],
  filteredArticles: [],
  articleDetails: [],
  searched: ""
}

const useSlice = createSlice({
  name: "articles",
  initialState,
  reducers: {
    setOnPageArticles: (state, action) => {
      state.onPageArticles = action.payload;
    },
    setArticleDetails: (state, action) => {
      state.onPageArticles = action.payload;
    },
    setPublisher: (state, action) => {
      state.publishers = action.payload;
    },

    setSearched: (state, action) => {
      state.searched = action.payload;
    },
    setFilteredArticles: (state, action) => {
      state.filteredArticles = action.payload
    }
  }
})

export const {
  setOnPageArticles,
  setSearched,
  setFilteredArticles,
  setArticleDetails,
  setPublisher
} = useSlice.actions;

export const store = configureStore({
  reducer: {
    articles: useSlice.reducer,
    [articleApi.reducerPath]: articleApi.reducer,
  },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(articleApi.middleware),
})
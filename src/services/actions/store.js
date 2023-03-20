import { configureStore, createSlice } from "@reduxjs/toolkit";
import { articleApi } from "./apiService";

const initialState = {
  onPageArticles: [],
  filteredArticles: [],
  searched: ""
}

const useSlice = createSlice({
  name: "articles",
  initialState,
  reducers: {
    setOnPageArticles: (state, action) => {
      state.onPageArticles = action.payload;
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
  setFilteredArticles
} = useSlice.actions;

export const store = configureStore({
  reducer: {
    articles: useSlice.reducer,
    [articleApi.reducerPath]: articleApi.reducer,
  },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(articleApi.middleware),
})
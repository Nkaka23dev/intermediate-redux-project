import { configureStore, createSlice } from "@reduxjs/toolkit";
import { articleApi } from "./apiService";

const initialState = {
  publisherId: "",
  searched: "",
  showPopUp: false
}
const useSlice = createSlice({
  name: "articles",
  initialState,
  reducers: {
    setPublisherId: (state, action) => {
      state.publisherId = action.payload;
    },
    setSearched: (state, action) => {
      state.searched = action.payload;
    },
    setShowPopUp: (state, action) => {
      state.showPopUp = action.payload.showPopUp;
    }
  }
})
export const {
  publisherId,
  setPublisherId,
  searched,
  setSearched,
  setShowPopUp
} = useSlice.actions;

export const store = configureStore({
  reducer: {
    articles: useSlice.reducer,
    [articleApi.reducerPath]: articleApi.reducer,
  },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(articleApi.middleware),
})
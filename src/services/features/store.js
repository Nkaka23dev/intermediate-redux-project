import { configureStore, createSlice } from "@reduxjs/toolkit";
import { articleApi } from "./apiService";

const initialState = {
  publisherId: "",
  searched: null,
  showPopUp: false,
  showModal: false,
  searchResult: null
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
    setSearchResult: (state, action) => {
      state.searchResult = action.payload;
    },
    setShowPopUp: (state, action) => {
      state.showPopUp = action.payload.showPopUp;
    },
    setShowModal: (state, action) => {
      state.showModal = action.payload.showModal
    }
  }
})
export const {
  publisherId,
  setPublisherId,
  searched,
  setSearched,
  setSearchResult,
  setShowPopUp,
  setShowModal
} = useSlice.actions;

export const store = configureStore({
  reducer: {
    articles: useSlice.reducer,
    [articleApi.reducerPath]: articleApi.reducer,
  },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(articleApi.middleware),
})
import { configureStore, createReducer, createSlice } from "@reduxjs/toolkit";
import { getPosts } from "./api/postsApi";

const postsSlice = createSlice({
  name: "posts",
  initialState: {
    loading: false,
    error: false,
    posts: [],
  },
  reducers: {
    postsLoading: (state, action) => {
      state.loading = true;
      state.error = false;
    },
    postsReceived: (state, action) => {
      state.loading = false;
      state.posts = action.payload;
    },
    postsError: (state, action) => {
      state.loading = false;
      state.error = true;
    },
    updatePostTitle: (state, action) => {
      let post = state.posts.find((p) => p.id === action.payload.id);
      post.title = action.payload.title;
    },
    deletePost: (state, action) => {
      state.posts = state.posts.filter((p) => p.id !== action.payload.id);
    },
  },
});

export const {
  postsLoading,
  postsReceived,
  postsError,
  updatePostTitle,
  deletePost,
} = postsSlice.actions;

export const store = configureStore({
  reducer: postsSlice.reducer,
});

export const fetchPosts = () => async (dispatch) => {
  try {
    dispatch(postsLoading());
    const posts = await getPosts();
    dispatch(postsReceived(posts));
  } catch (e) {
    console.log("ERROR", e);
    dispatch(postsError());
  }
};

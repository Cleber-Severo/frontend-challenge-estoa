import { configureStore } from "@reduxjs/toolkit";
import characters from "./reducers/characters";
import searchSlice from './reducers/search'

export const store = configureStore({
  reducer: {
    characters: characters,
    search: searchSlice
  },
});

export default store;

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;

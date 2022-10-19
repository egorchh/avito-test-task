import { combineReducers } from "redux";
import postsReducer from "./postsReducer";
import commentsReducer from "./postsReducer";

export const rootReducer = combineReducers({
  posts: postsReducer,
  comments: commentsReducer
})
export interface IPost {
  title: string;
  score: number;
  by: string;
  id: number;
  kids: number[];
  time: number;
  descendants: number;
  url: string;
}

export interface PostsState {
  posts: IPost[];
  post: IPost | null;
  loading: boolean;
  error: null | string;
}

export enum PostsActionTypes {
  FETCH_POSTS = "FETCH_POSTS",
  FETCH_POSTS_SUCCESS = "FETCH_POSTS_SUCCESS",
  FETCH_POSTS_ERROR = "FETCH_POSTS_ERROR",
  FETCH_ONE_POST = "FETCH_ONE_POST",
  FETCH_ONE_POST_SUCCESS = "FETCH_ONE_POST_SUCCESS",
  FETCH_ONE_POST_ERROR = "FETCH_ONE_POST_ERROR",
}

export interface FetchPostsAction {
  type: PostsActionTypes.FETCH_POSTS;
}

export interface FetchPostsSuccessAction {
  type: PostsActionTypes.FETCH_POSTS_SUCCESS;
  payload: IPost[];
}

export interface FetchPostsErrorAction {
  type: PostsActionTypes.FETCH_POSTS_ERROR;
  payload: string;
}

export interface FetchOnePostAction {
  type: PostsActionTypes.FETCH_ONE_POST;
}

export interface FetchOnePostSuccessAction {
  type: PostsActionTypes.FETCH_ONE_POST_SUCCESS;
  payload: IPost;
}

export interface FetchOnePostErrorAction {
  type: PostsActionTypes.FETCH_ONE_POST_ERROR;
  payload: string;
}

export type PostsAction = FetchPostsAction | FetchPostsSuccessAction | FetchPostsErrorAction | FetchOnePostAction | FetchOnePostSuccessAction | FetchOnePostErrorAction
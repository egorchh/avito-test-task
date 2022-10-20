export interface PostsState {
  posts: any[];
  post: Record<string, any>;
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
  payload: any[];
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
  payload: object;
}

export interface FetchOnePostErrorAction {
  type: PostsActionTypes.FETCH_ONE_POST_ERROR;
  payload: string;
}

export type PostsAction = FetchPostsAction | FetchPostsSuccessAction | FetchPostsErrorAction | FetchOnePostAction | FetchOnePostSuccessAction | FetchOnePostErrorAction
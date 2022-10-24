export interface CommentsState {
  comments: any[];
  loading: boolean;
  error: null | string;
}

export enum CommentsActionTypes {
  FETCH_COMMENTS = "FETCH_COMMENTS",
  FETCH_COMMENTS_SUCCESS = "FETCH_COMMENTS_SUCCESS",
  FETCH_COMMENTS_ERROR = "FETCH_COMMENTS_ERROR",
}

export interface FetchCommentsAction {
  type: CommentsActionTypes.FETCH_COMMENTS;
}

export interface FetchCommentsSuccessAction {
  type: CommentsActionTypes.FETCH_COMMENTS_SUCCESS;
  payload: any[];
}

export interface FetchCommentsErrorAction {
  type: CommentsActionTypes.FETCH_COMMENTS_ERROR;
  payload: string;
}


export type CommentsAction = FetchCommentsAction | FetchCommentsSuccessAction | FetchCommentsErrorAction
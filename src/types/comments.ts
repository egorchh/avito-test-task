export interface IComment {
  by: string;
  id: number;
  kids: number[];
  text: string;
  time: number;
}

export interface CommentsState {
  comments: IComment[];
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
  payload: IComment[];
}

export interface FetchCommentsErrorAction {
  type: CommentsActionTypes.FETCH_COMMENTS_ERROR;
  payload: string;
}


export type CommentsAction = FetchCommentsAction | FetchCommentsSuccessAction | FetchCommentsErrorAction
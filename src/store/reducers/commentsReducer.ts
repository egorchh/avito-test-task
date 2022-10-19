import { CommentsAction, CommentsActionTypes, CommentsState } from "../../types/comments";

const initialState: CommentsState = {
  comments: [],
  loading: false,
  error: null
};

const commentsReducer = (state = initialState, action: CommentsAction): CommentsState => {
  switch (action.type) {
    case CommentsActionTypes.FETCH_COMMENTS:
      return {loading: true, error: null, comments: []}
    case CommentsActionTypes.FETCH_COMMENTS_SUCCESS:
      return {loading: false, error: null, comments: action.payload}
    case CommentsActionTypes.FETCH_COMMENTS_ERROR:
      return {loading: false, error: action.payload, comments: []}
    default:
      return state;
  }
};

export default commentsReducer;

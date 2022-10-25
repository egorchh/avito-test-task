import { PostsAction, PostsActionTypes, PostsState } from "../../types/posts";

const initialState: PostsState = {
  posts: [],
  post: null,
  loading: false,
  error: null
};

const postsReducer = (state = initialState, action: PostsAction): PostsState => {
  switch (action.type) {
    case PostsActionTypes.FETCH_POSTS:
      return {...state, loading: true, error: null, posts: []}
    case PostsActionTypes.FETCH_POSTS_SUCCESS:
      return {...state, loading: false, error: null, posts: action.payload}
    case PostsActionTypes.FETCH_POSTS_ERROR:
      return {...state, loading: false, error: action.payload, posts: []}
    case PostsActionTypes.FETCH_ONE_POST:
      return {...state, loading: true, error: null}
    case PostsActionTypes.FETCH_ONE_POST_SUCCESS:
      return {...state, loading: false, error: null, post: action.payload}
    case PostsActionTypes.FETCH_ONE_POST_ERROR:
      return {...state, loading: false, error: action.payload}
    default:
      return state;
  }
};

export default postsReducer;

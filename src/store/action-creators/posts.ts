import { Dispatch } from "redux"
import { getPost, getPostIds } from "../../services/postsAPI";
import { PostsAction, PostsActionTypes } from "../../types/posts"

export const fetchPosts = () => {
  return async (dispatch: Dispatch<PostsAction>) => {
    try {
      dispatch({type: PostsActionTypes.FETCH_POSTS});
      const postIds = await getPostIds()
      const posts = await Promise.all(postIds.slice(0, 100).map(id => {
        return getPost(id)
      }))
      dispatch({type: PostsActionTypes.FETCH_POSTS_SUCCESS, payload: posts})
    } catch (error) {
      dispatch({
        type: PostsActionTypes.FETCH_POSTS_ERROR, 
        payload: 'Произошла ошибка при получении новостей'
      })
    }
  }
}

export const fetchOnePost = (id: number) => {
  return async (dispatch: Dispatch<PostsAction>) => {
    try {
      dispatch({type: PostsActionTypes.FETCH_ONE_POST});
      const post = await getPost(id);
      dispatch({type: PostsActionTypes.FETCH_ONE_POST_SUCCESS, payload: post})
    } catch (error) {
      dispatch({type: PostsActionTypes.FETCH_ONE_POST_ERROR, payload: 'Произошла ошибка при получении данной новости'})
    }
  }
}
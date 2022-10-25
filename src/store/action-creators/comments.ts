import { Dispatch } from "redux"
import { getComment } from "../../services/commentsAPI";
import { CommentsAction, CommentsActionTypes, IComment } from "../../types/comments"

export const fetchComments = (commentsIds: number[]) => {
  return async (dispatch: Dispatch<CommentsAction>) => {
    try {
      dispatch({type: CommentsActionTypes.FETCH_COMMENTS});

      const comments: IComment[] = await Promise.all(commentsIds.map(id => {
        return getComment(id)
      }))

      dispatch({type: CommentsActionTypes.FETCH_COMMENTS_SUCCESS, payload: comments})
    } catch (error) {
      dispatch({
        type: CommentsActionTypes.FETCH_COMMENTS_ERROR, 
        payload: 'Произошла ошибка при получении комментариев'
      })
    }
  }
}
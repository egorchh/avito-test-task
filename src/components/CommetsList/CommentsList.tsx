import React from 'react';

import './commentsList.css'

import { useEffect } from 'react';
import { useActions } from '../../hooks/useAction';
import type {} from 'redux-thunk/extend-redux';
import { useTypedSelector } from '../../hooks/useTypedSelector';

interface CommentsListProps {
  commentsIds: number[]
}

const CommentsList:React.FC<CommentsListProps> = ({commentsIds}) => {
  const {comments, loading, error} = useTypedSelector(state => state.comments);
  const { fetchComments } = useActions();

  // console.log(commentsIds)

  // useEffect(() => {
  //   fetchComments(commentsIds)
  //   // eslint-disable-next-line
  // }, [])

  // console.log(comments)


  return (
    <div>
      {/* {comments.map(comment => {
        return comment.text
      })} */}
    </div>
  );
};

export default CommentsList;
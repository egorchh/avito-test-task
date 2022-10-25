import React from 'react';

import { useEffect } from 'react';
import { useActions } from '../../hooks/useAction';
import type {} from 'redux-thunk/extend-redux';
import { useTypedSelector } from '../../hooks/useTypedSelector';

import CommentsItem from '../CommentsItem/CommentsItem';
import ErrorMessage from '../ErrorMessage/ErrorMessage';
import Skeleton from '../ui/Skeleton/Skeleton';

import './commentsList.css'


interface CommentsListProps {
  commentsIds: number[];
}

const CommentsList:React.FC<CommentsListProps> = ({commentsIds}) => {
  const {comments, loading, error} = useTypedSelector(state => state.comments);
  const { fetchComments } = useActions();
  

  useEffect(() => {
    fetchComments(commentsIds)
    
    // eslint-disable-next-line
  }, [commentsIds])

  const renderCommentsList = () => {
    const items = comments.map(({id, text, by, time, kids}) => {
      const commentWidth = 75;

      return (
        <CommentsItem
          key={id}
          kids={kids}
          text={text}
          by={by}
          time={time}
          commentWidth={commentWidth}
        />
      )
    })

    return (
        <ul className='comments-list'>
          {items}
        </ul>
    );
  };

  if (commentsIds === undefined) {
    return (
      <div className="comments">
        <p className='comments-absence'>
          There are no comments for this news yet.
        </p>
      </div>
    );
  }

  return (
    <div className='comments'>
      {loading ? 
        <>
          <Skeleton />
        </>
        : renderCommentsList()
      }
      {error ?  <ErrorMessage /> : null}
    </div>
  );
};

export default CommentsList;
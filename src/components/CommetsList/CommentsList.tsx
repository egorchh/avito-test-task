import React from 'react';

import { useEffect } from 'react';
import { useActions } from '../../hooks/useAction';
import type {} from 'redux-thunk/extend-redux';
import { useTypedSelector } from '../../hooks/useTypedSelector';

import CommentsItem from '../CommentsItem/CommentsItem';
import ErrorMessage from '../ErrorMessage/ErrorMessage';

import './commentsList.css'
import Skeleton from '../ui/Skeleton/Skeleton';
import RefreshButton from '../ui/RefreshButton/RefreshButton';

interface CommentsListProps {
  commentsIds: number[];
  descendants: number;
}

const CommentsList:React.FC<CommentsListProps> = ({commentsIds, descendants}) => {
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

  const refreshHandler = () => {
    fetchComments(commentsIds);
  }

  if (descendants === 0) {
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
      <div className="comments-toolkit">
        <div className="comments-toolkit__counter">
          <p className="comments-toolkit__counter-text">
          Total
        </p>
        <div className='comments-toolkit__counter-value'>
          {descendants}
        </div>
        <p className="comments-toolkit__counter-text">
          comments
        </p>
        </div>
        <RefreshButton refreshHandler={refreshHandler} />
      </div>
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
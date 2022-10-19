import React, { useEffect, useMemo } from 'react';
import { useTypedSelector } from '../../hooks/useTypedSelector';
import type {} from 'redux-thunk/extend-redux'

import './postsList.css'
import { useActions } from '../../hooks/useAction';
import PostItem from '../PostItem/PostItem';

const PostsList: React.FC = () => {
  const {posts, loading, error} = useTypedSelector(state => state.posts);
  const {fetchPosts} = useActions();

  useEffect(() => {
    fetchPosts()
    // eslint-disable-next-line
  }, [])

  const renderPostsList = () => {
    const news = posts.map(({id, title, score, by, time}) => {
      return (
        <PostItem
          key={id}
          title={title}
          score={score}
          by={by}
          time={time}
        />
      )
    })

    return <ul>{news}</ul>
  }

  if (loading) {
    return <h3>Идет загрузка</h3>
  }

  if (error) {
    return <h3>Произошла ошибка</h3>
  }

  return (
    <div>
      {renderPostsList()}
    </div>
  );
};

export default PostsList;
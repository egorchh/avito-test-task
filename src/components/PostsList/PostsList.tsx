import React, { useEffect } from 'react';
import { useTypedSelector } from '../../hooks/useTypedSelector';
import { useActions } from '../../hooks/useAction';
import type {} from 'redux-thunk/extend-redux'

import PostsItem from '../PostItem/PostsItem';
import Spinner from '../Spinner/Spinner';

import './postsList.css'

const PostsList: React.FC = () => {
  const {posts, loading, error} = useTypedSelector(state => state.posts);
  const {fetchPosts} = useActions();

  useEffect(() => {
    fetchPosts()
    // const timerId = setInterval(fetchPosts, 60000);

    // return () => {
    //   clearInterval(timerId);
    // };
    // eslint-disable-next-line
  }, []);

  const renderPostsList = () => {
    const news = posts.map(({id, title, score, by, time}) => {
      return (
        <PostsItem
          key={id}
          title={title}
          score={score}
          by={by}
          time={time}
        />
      )
    })

    return <ul className='posts-list'>{news}</ul>
  }

  // if (loading) {
  //   return (
  //     <Spinner size={150} />
  //   )
  // }

  if (error) {
    return <h3>Произошла ошибка</h3>
  }

  return (
    <div className='posts'>
      {
        loading ? <Spinner size={200} /> : renderPostsList()
      }
    </div>
  );
};

export default PostsList;
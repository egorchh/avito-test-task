import React, { useEffect } from 'react';
import { useTypedSelector } from '../../hooks/useTypedSelector';
import { useActions } from '../../hooks/useAction';
import type {} from 'redux-thunk/extend-redux'

import PostsItem from '../PostItem/PostsItem';
import Spinner from '../Spinner/Spinner';

import './postsList.css'
import { Link } from 'react-router-dom';
import ErrorMessage from '../ErrorMessage/ErrorMessage';

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
        <Link 
          key={id} 
          className='posts-link' to={`/posts/${id}`}
        >
          <PostsItem
            title={title}
            score={score}
            by={by}
            time={time}
          />
        </Link>
      )
    })

    return <ul className='posts-list'>{news}</ul>
  }

  if (error) {
    return <ErrorMessage />
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
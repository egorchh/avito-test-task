import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useActions } from '../../hooks/useAction';
import type {} from 'redux-thunk/extend-redux';
import { useTypedSelector } from '../../hooks/useTypedSelector';
import './postPage.css'
import { covertTimeToDate } from '../../utils/converTime';

import linkSVG from '../../assets/images/link.svg'
import CommentsList from '../../components/CommetsList/CommentsList';
import BackLink from '../../components/ui/BackLink/BackLink';

import { Helmet } from "react-helmet";
import ErrorMessage from '../../components/ErrorMessage/ErrorMessage';
import Skeleton from '../../components/ui/Skeleton/Skeleton';



const PostPage: React.FC = () => {
  const {post, loading, error} = useTypedSelector(state => state.posts);
  const {fetchOnePost} = useActions();

  const { id } = useParams<{id?: string}>()

  const numericId = Number(id)

  useEffect(() => {
    fetchOnePost(numericId);
    // eslint-disable-next-line
  }, [])

  if (error) {
    return <ErrorMessage />
  }

  return (
    <div className='post-page'>
      <Helmet>
        <meta name="description" content="News title" />
        <title>{post.title}</title>
      </Helmet>
      <BackLink />
      {loading ? <Skeleton /> :
        <>
          <a 
            rel="noreferrer" 
            target="_blank" 
            href={post.url} 
            className="post-page__link"
          >
            <h1 className='post-page__title'>
              {post.title}
            </h1>
            <img className="post-page__link-img" src={linkSVG} alt="Ссылка на источник новости" />
          </a>
          <div 
            className='post-page__descr-wrapper'
          >
            <p className='post-page__descr-author'>
              {post.by}
            </p>
            <p className='post-page__descr-date'>
              {covertTimeToDate(post.time)}
            </p>
          </div>
        </>
      }
      <CommentsList commentsIds={post.kids} descendants={post.descendants} />
    </div>
  );
};

export default PostPage;
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
import CommentsTools from '../../components/ui/CommentsTools/CommentsTools';



const PostPage: React.FC = () => {
  const {post, loading, error} = useTypedSelector(state => state.posts);
  const { fetchOnePost, fetchComments } = useActions();

  const { id } = useParams<{id?: string}>()

  const numericId = Number(id)

  useEffect(() => {
    fetchOnePost(numericId);
    // eslint-disable-next-line
  }, [])

  
  const refreshHandler = () => {
    fetchComments(post ? post.kids : []);
  }

  if (error) {
    return <ErrorMessage />
  }

  return (
    <div className='post-page'>
      <Helmet>
        <meta name="description" content="News title" />
        <title>{post ? post.title : ''}</title>
      </Helmet>
      <BackLink />
      {loading ? <Skeleton /> :
        <>
          <a 
            rel="noreferrer" 
            target="_blank" 
            href={post ? post.url : ''} 
            className="post-page__link"
          >
            <h1 className='post-page__title'>
              {post ? post.title : ''}
            </h1>
            <img className="post-page__link-img" src={linkSVG} alt="Ссылка на источник новости" />
          </a>
          <div 
            className='post-page__descr-wrapper'
          >
            <p className='post-page__descr-author'>
              {post ? post.by : ''}
            </p>
            <p className='post-page__descr-date'>
              {covertTimeToDate(post ? post.time : 0)}
            </p>
          </div>
          <CommentsTools refreshHandler={refreshHandler} descendants={post ? post.descendants : 0} />
        </>
      }
      <CommentsList commentsIds={post ? post.kids : []} />
    </div>
  );
};

export default PostPage;
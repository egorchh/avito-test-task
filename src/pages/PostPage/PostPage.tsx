import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useActions } from '../../hooks/useAction';
import type {} from 'redux-thunk/extend-redux';
import { useTypedSelector } from '../../hooks/useTypedSelector';
import './postPage.css'



const PostPage: React.FC = () => {
  const {post, loading, error} = useTypedSelector(state => state.posts);

  // console.log(post?.title);

  const {fetchOnePost} = useActions();

  const { id } = useParams<{id?: string}>()

  console.log(id)

  const numericId = Number(id)

  useEffect(() => {
    fetchOnePost(numericId);
    // eslint-disable-next-line
  }, [])
  
  return (
    <div>
      <p>{post.title}</p>
    </div>
  );
};

export default PostPage;
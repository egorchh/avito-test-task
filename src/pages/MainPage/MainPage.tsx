import PostsList from '../../components/PostsList/PostsList';
import { useActions } from '../../hooks/useAction';
import { Helmet } from "react-helmet";
import RefreshButton from '../../components/ui/RefreshButton/RefreshButton';

import './mainPage.css'

const MainPage = () => {
  const {fetchPosts} = useActions();

  const refreshHandler = () => {
    fetchPosts();
  }
  
  return (
    <div className='main-page'>
      <Helmet>
        <meta name="description" content="Hacker News" />
        <title>Hacker News</title>
      </Helmet>
      <div className="headline">
        <h1 className='headline-title'>
          Hacker News:
        </h1>
        <RefreshButton refreshHandler={refreshHandler} />
      </div>
      <PostsList />
    </div>
  );
};

export default MainPage;
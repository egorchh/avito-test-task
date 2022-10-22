import PostsList from '../../components/PostsList/PostsList';
import { useActions } from '../../hooks/useAction';
import { Helmet } from "react-helmet";

import './mainPage.css'

import refreshSVG from '../../assets/images/refresh.svg'

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
        <button 
          onClick={refreshHandler} 
          className='headline-button'
        >
          <img className='headline-button__img' src={refreshSVG} alt="Кнопка обновления списка новостей" />
        </button>
      </div>
      <PostsList />
    </div>
  );
};

export default MainPage;
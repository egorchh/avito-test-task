import PostsList from '../../components/PostsList/PostsList';

import './mainPage.css'

import refreshSVG from '../../assets/images/refresh.svg'

const MainPage = () => {
  return (
    <div className='main-page'>
      <div className="headline">
        <h1 className='headline-title'>
          Hacker News:
        </h1>
        <button className='headline-button'>
          <img className='headline-button__img' src={refreshSVG} alt="" />
        </button>
      </div>
      <PostsList />
    </div>
  );
};

export default MainPage;
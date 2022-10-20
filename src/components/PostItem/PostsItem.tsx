import React from 'react';

import './postsItem.css';

import likeSVG from '../../assets/images/like.svg'

interface PostItemProps {
  title: string;
  score: number;
  by: string;
  time: number
}

const PostItem: React.FC<PostItemProps> = ({title, score, by, time}) => {  
  function covertTimeToDate(time: number): string {
    let date = new Date(time * 1000);
    return date.toLocaleDateString("ru-RU").split('.').join(' ');
  }

  return (
    <li className='posts-item'>
      <div className="posts-item__headline-wrapper">
        <h3 className='posts-item__title'>
          {title}
        </h3>
        <div className='posts-item__score-wrapper'>
          <p className='posts-item__score-value'>{score}</p>
          <img className='posts-item__score-img' src={likeSVG} alt="Изображение лайка" />
        </div>
      </div>
      <div className='posts-item__descr-wrapper'>
        <p className='posts-item__descr-author'>
          {by}
        </p>
        <p className='posts-item__descr-date'>
          {covertTimeToDate(time)}
        </p>
      </div>
    </li>
  );
};

export default PostItem;
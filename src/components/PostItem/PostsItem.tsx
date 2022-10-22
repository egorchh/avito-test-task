import React from 'react';

import { covertTimeToDate } from '../../utils/converTime';

import './postsItem.css';

import likeSVG from '../../assets/images/like.svg'

interface PostsItemProps {
  title: string;
  score: number;
  by: string;
  time: number
}

const PostItem: React.FC<PostsItemProps> = ({title, score, by, time}) => {
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
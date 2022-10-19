import React from 'react';

import './postItem.css'

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
    <li>
      <h3>{title}</h3>
      <div>
        <p>{score}</p>
        <img src="" alt="" />
      </div>
      <div>
        <p>{by}</p>
        <p>{covertTimeToDate(time)}</p>
      </div>
    </li>
  );
};

export default PostItem;
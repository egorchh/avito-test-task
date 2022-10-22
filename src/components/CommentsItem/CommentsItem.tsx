import React from 'react';

import { covertTimeToDate } from '../../utils/converTime'

import './commentsItem.css'

import avatar from '../../assets/images/avatar.svg'

interface CommentsItemProps {
  text: string;
  by: string;
  time: number;
}


const CommentsItem: React.FC<CommentsItemProps> = ({text, by, time}) => {
  return (
    <div className='comments-item'>
      <div className="comments-item__wrapper">
        <div className="comments-item__user-info">
          <img className="comments-item__user-avatar" src={avatar} alt="Аватар пользователя" />
          <p className="comments-item__user-nikname">
            {by ? by : 'Hidden user'}
          </p>
        </div>
        <p className="comments-item__date">{covertTimeToDate(time)}</p>
      </div>
      <p className='comments-item__text'>{text ? text : 'Hidden text'}</p>
    </div>
  );
};

export default CommentsItem;
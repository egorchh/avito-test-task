import React, { useEffect, useState } from 'react';
import { covertTimeToDate } from '../../utils/converTime'

import './commentsItem.css'

import avatar from '../../assets/images/avatar.svg'
import { getNestedComments } from '../../services/commentsAPI';
import ExpandButton from '../ui/ExpandButton/ExpandButton';


interface CommentsItemProps {
  text: string;
  by: string;
  time: number;
  kids: number[] | undefined;
  commentWidth: number;
}

interface INestedComments {
  text: string,
  by: string,
  id: number
  kids: number[]
  time: number;
}

const CommentsItem: React.FC<CommentsItemProps> = ({text, by, time, kids, commentWidth}) => {
  const [nestedComments, setNestedComments] = useState<INestedComments[]>([])
  const [showNestedComments, setShowNestedComments] = useState<boolean>(false)

  useEffect(() => {
    if (kids !== undefined) {
      getNestedComments(kids).then(data => setNestedComments(data))
    }

    // eslint-disable-next-line
  }, [])

  const showNestedCommenHandler = () => {
    setShowNestedComments(state => !state)
  }

  const renderNestedComments = (comments: INestedComments[]) => {
    const items = comments.map(({id, text, by, time, kids}) => {
      return (
        <CommentsItem
          commentWidth={commentWidth - 3}
          key={id}
          kids={kids}
          text={text}
          by={by}
          time={time}
        />
      )
    })

    return (
        <ul className='comments-list'>
          {items}
        </ul>
    );
  };

  const nestedContent = showNestedComments ? renderNestedComments(nestedComments) : null

  return (
    <>
      <div 
        className='comments-item'
        style={ {
          width: `calc(${commentWidth}vw - 40px)`,
        }}
      >
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
        {
          nestedComments.length > 0 ?
          <ExpandButton 
            showNestedCommenHandler={showNestedCommenHandler}
            showNestedComments={showNestedComments}
          /> : null
        }
      </div>
      { nestedContent }
    </>
  );
};

export default CommentsItem;
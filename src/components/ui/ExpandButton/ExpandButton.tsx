import React from 'react';

import arrowDownSVG from '../../../assets/images/arrow-down.svg'

import './expandButton.css'

interface ExpandButtonProps {
  showNestedCommenHandler: () => void;
  showNestedComments: boolean;
}

const ExpandButton: React.FC<ExpandButtonProps> = ({showNestedCommenHandler, showNestedComments}) => {

  const showButtonClazz = showNestedComments ? 'expand-button show' : 'expand-button'

  return (
    <button
      onClick={showNestedCommenHandler}
      className={showButtonClazz}
    >
      <img className="expand-button__img" src={arrowDownSVG} alt="Кнопка для открытия вложенных комментариев" />
    </button>
  );
};

export default ExpandButton;
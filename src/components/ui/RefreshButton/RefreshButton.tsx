import React from 'react';

import './refreshButton.css';

import refreshSVG from '../../../assets/images/refresh.svg';

interface RefreshButtonProps {
  refreshHandler: () => void;
}

const RefreshButton: React.FC<RefreshButtonProps> = ({refreshHandler}) => {
  return (
    <button 
      className="refresh-button"
      onClick={refreshHandler}
    >
      <img 
        className="refresh-button__img" 
        src={refreshSVG} 
        alt={"Кнопка обновления списка комментариев"}
      />
    </button>
  );
};

export default RefreshButton;
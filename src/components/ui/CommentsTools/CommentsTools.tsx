import React from 'react';
import RefreshButton from '../RefreshButton/RefreshButton';

import './commentTools.css'

interface CommentsToolsProps {
  refreshHandler: () => void;
  descendants: number;
}

const CommentsTools: React.FC<CommentsToolsProps> = ({
    refreshHandler,
    descendants
  }) => {
  return (
    <div className="comments-toolkit">
      <div className="comments-toolkit__counter">
        <p className="comments-toolkit__counter-text">
        Total
      </p>
      <div className='comments-toolkit__counter-value'>
        {descendants}
      </div>
      <p className="comments-toolkit__counter-text">
        comments
      </p>
      </div>
      <RefreshButton refreshHandler={refreshHandler} />
    </div>
  );
};

export default CommentsTools;
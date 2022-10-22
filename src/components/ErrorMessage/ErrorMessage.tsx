import React from 'react';

import './error.css'

const ErrorMessage: React.FC = () => {
  return (
    <div className='error'>
      <h3 className='error__message'>
        A download error has occurred...
      </h3>
      <p className='error__advice'>
        Try reloading the page or check your internet connection
      </p>
    </div>
  );
};

export default ErrorMessage;
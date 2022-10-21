import React from 'react';

import { Link } from 'react-router-dom';

import './backLink.css';

import back from '../../assets/images/back.svg';

const BackLink: React.FC = () => {
  return (
    <div>
      <Link 
        to="/" 
        className='back__link'
      >
        <img className='back__link-img' src={back} alt="Ссылка для перехода к главной странице" />
        <p className='back__link-text'>
          Back to main page
        </p>
      </Link>
    </div>
  );
};

export default BackLink;
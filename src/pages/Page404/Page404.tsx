import React from 'react';

import BackLink from '../../components/ui/BackLink/BackLink';

import './page404.css'

const Page404: React.FC = () => {
  return (
    <div className='page404'>
      <h1 className='page404__title'>404</h1>
      <p className='page404__description'>
        Sorry, we couldn't find that page ;(
      </p>
      <BackLink />
    </div>
  );
};

export default Page404;
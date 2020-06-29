/* eslint-disable jsx-a11y/anchor-has-content */
import React from 'react';

const Article = ({ bgImage, title, url }) => {
  return (
    <div className='article' style={{ backgroundImage: `url(${bgImage})` }}>
      <a
        href={url}
        className='link'
        target='_blank'
        rel='noopener noreferrer'
      ></a>
      <p className='article-title'>{title}</p>
    </div>
  );
};

export default Article;
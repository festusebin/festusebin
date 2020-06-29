import React, { Component } from 'react';
import Article from '../Article/Article';

class Blog extends Component {
  constructor() {
    super();

    this.state = {
      blog: [
        {
          imageSrc: 'https://',
          name: 'Is it wrong if i make mistake?',
          url: 'https://medium'
        }
      ]
    }
  }

  render() {
    const myBlog = this.state.blog.map(({ imageSrc, name, url }) => (
      <Article bgImage={imageSrc} title={name} url={url} />
    ))
    return (
      <section id='blog'>
        <h1><span>02.</span>Blog</h1>

        <div className='blog'>{myBlog}</div>
      </section>
    )
  }
};

export default Blog;
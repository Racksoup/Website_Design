import React from 'react';
import './blogs.scss';

import HeaderBG from '../../../images/HeaderBG.png';

const Blogs = ({ Ref }) => {
  return (
    <div className='Blogs' ref={Ref}>
      <div className='Title'>BLOGS</div>
      <div className='Contents'>
        <BlogCard
          Title='GAME DEV'
          Blog={{
            img: HeaderBG,
            title: 'Title',
            date: '02/20/2022',
            text: 'fdsfds fdsfds fdsfds fdsfds fdsfds fdsfds fdsfds fdsfds fdsfds fdsfds fdsfds fdsfds fdsfds fdsfds fdsfds fdsfds fdsfds fdsfdsfdsfds fdsfds fdsfds fdsfds fdsfds fdsfds fdsfds fdsfds fdsfds fdsfds fdsfds fdsfds fdsfdsfdsfds fdsfds fdsfds fdsfds fdsfds fdsfds fdsfds fdsfds fdsfds fdsfds fdsfds fdsfds fdsfds fdsfds fdsfds fdsfds fdsfds fdsfds fdsfds fdsfds fdsfds fdsfds fdsfdsx',
          }}
        />
        <BlogCard
          Title='HISTORY'
          Blog={{
            img: HeaderBG,
            title: 'Title',
            date: '02/20/2022',
            text: 'fdsfds fdsfds fdsfds fdsfds fdsfds fdsfds fdsfds fdsfds fdsfds fdsfds fdsfds fdsfds fdsfds fdsfds fdsfds fdsfds fdsfds fdsfdsfdsfds fdsfds fdsfds fdsfds fdsfds fdsfds fdsfds fdsfds fdsfds fdsfds fdsfds fdsfds fdsfds fdsfds fdsfds fdsfds fdsfdsfdsfds fdsfds fdsfds fdsfds fdsfds fdsfds fdsfds fdsfds fdsfds fdsfds fdsfds fdsfds fdsfds fdsfds fdsfds fdsfds fdsfds fdsfds fdsfdsx',
          }}
        />
      </div>
    </div>
  );
};

const BlogCard = ({ Title, Blog }) => {
  return (
    <div className='BlogCard'>
      <div className='Title'>{Title}</div>
      <div className='Blog'>
        <img className='BlogImg' src={Blog.img} />
        <div className='BlogTitle'>{Blog.title}</div>
        <div className='BlogDate'>{Blog.date}</div>
        <div className='BlogText'>{Blog.text}</div>
      </div>
    </div>
  );
};

export default Blogs;

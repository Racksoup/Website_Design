import React from 'react';
import './services.scss';

const Services = ({ Ref }) => {
  return (
    <div className='Services' ref={Ref}>
      <div className='Title'>SERVICES</div>
      <div className='TitleDesc'>
        Whether you need a large ecommerce website that grabs customers and handles orders, or just
        a simple 1-3 page business website.
      </div>
      <div className='Content'>
        <div className='Box-Red'>
          <div className='BoxTitle'>BASIC</div>
          <div className='BoxPrice'>STARTING PRICE: $200</div>
          <div className='BoxBenifits'>Benefitis: Business Website, 3 Pages, Mobile</div>
          <div className='BoxText'>
            Basic Website. Static content. This is very good for those who need a business /
            personal website. Mobile and Desktop.
          </div>
        </div>
        <div className='Box-Blue'>
          <div className='BoxTitle'>FULL</div>
          <div className='BoxPrice'>STARTING PRICE: $500</div>
          <div className='BoxBenifits'>
            Benefitis: Blogs, Newsletter, Customize Content, Ecommerce, Order-Book, Admin Dashboard,
            Authentication
          </div>
          <div className='BoxText'>
            Full Website with Backend Database. Admin's are given control over the content on the
            website through the admin dashboard. Ecommerce and Gallery websites.
          </div>
        </div>
        <div className='Box-Green'>
          <div className='BoxTitle'>FULL + MAINTENANCE</div>
          <div className='BoxPrice'>STARTING PRICE: $500 + $15/m</div>
          <div className='BoxBenifits'>
            Benefitis: Fully Handled Website Management, Blogs, Newsletter, Customize Content,
            Ecommerce, Order-Book, Admin Dashboard, Authentication
          </div>
          <div className='BoxText'>
            Full Website with Maintenance. All the benefits and customaizability of a full website,
            with maintenance to add to and handle all changes needed for your website!
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;

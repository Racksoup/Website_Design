import React, { useState } from 'react';
import './contact.scss';

import { send } from 'emailjs-com';

const Contact = ({ Ref }) => {
  const [form, setForm] = useState({
    name: '',
    subject: '',
    email: '',
    message: '',
  });
  const { name, subject, email, message } = form;
  const [showContacts, toggleShowContacts] = useState(false);

  const submit = () => {
    send('service_oyteiuz', 'template_srze9zo', form, 'user_mAV5lf9i0he1cOe6oPCgj').then(
      (result) => {
        console.log('Success', result.status, result.text);
      },
      (error) => {
        console.log('Failed', error);
      }
    );
  };

  const onChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  return (
    <div className='Contact' ref={Ref}>
      <div className='TopTitle'>Get In Touch</div>
      <div className='Title'>CONTACT</div>
      <div className='Contents'>
        <div className='Form'>
          <div className='Line1'>
            <input
              className='Name'
              name='name'
              value={name}
              placeholder='Name'
              onChange={(e) => onChange(e)}
              autoComplete='off'
            />
            <input
              className='Subject'
              name='subject'
              value={subject}
              placeholder='Subject'
              onChange={(e) => onChange(e)}
              autoComplete='off'
            />
          </div>
          <input
            className='Email'
            name='email'
            value={email}
            placeholder='E-Mail'
            onChange={(e) => onChange(e)}
            autoComplete='off'
          />
          <textarea
            className='Message'
            name='message'
            value={message}
            placeholder='Message'
            onChange={(e) => onChange(e)}
            autoComplete='off'
          />
          <div className='Btn' onClick={() => submit()}>
            SEND MESSAGE
          </div>
        </div>
        <div className='Details'>
          <div className='Title'>NEED TO KNOW MORE DETAILS? GET IN TOUCH</div>
          <div className='Text'>
            Not sure what kind of website you need? Send me and email or give me a call to discuss
            what kind of plan/package you will need. I will personally make sure that your website
            is customized perfectly for your business.
          </div>
          <div className='Btn' onClick={() => toggleShowContacts(!showContacts)}>
            GET STARTED
          </div>
          {showContacts && (
            <div className='Contacts'>
              <div className='Email'>TranquilGorge@Outlook.com</div>
              <div className='Phone'>1-613-869-2343</div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Contact;

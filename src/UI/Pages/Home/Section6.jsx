import React, { useState } from 'react';
import './Section6.scss';

import Cloud from '../../../images/CloudNeubrutalism.png';
import { send } from 'emailjs-com';

const Modal = ({ text }) => {
  if (text == 'Message Sent') {
    return (
      <div className='Modal Modal-Success'>
        <p>{text}</p>
      </div>
    );
  } else {
    return (
      <div className='Modal'>
        <p>{text}</p>
      </div>
    );
  }
};

const Section6 = () => {
  const [modalText, setModalText] = useState('');
  const [showModal, toggleShowModal] = useState(false);
  const [canSend, toggleCanSend] = useState(true);
  const [form, setForm] = useState({
    name: '',
    email: '',
    message: '',
  });

  const textOptions = {
    sending: 'Sending Message',
    success: 'Message Sent',
    failure: 'Failed to Send Message',
    invalid: 'Invalid E-mail',
  };

  const inputChanged = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const submitForm = () => {
    if (form.name !== '' && form.message !== '' && form.email !== '' && canSend) {
      toggleCanSend(false);
      setModalText(textOptions.sending);
      toggleShowModal(true);

      const emailRegex = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
      if (emailRegex.test(form.email)) {
        send(
          process.env.EMAILJS_SERVICE,
          process.env.EMAILJS_TEMPLATE,
          form,
          process.env.EMAILJS_USER
        ).then(
          (result) => {
            console.log('Success', result.status, result.text);
            setModalText(textOptions.success);
            setTimeout(() => {
              toggleShowModal(false);
              toggleCanSend(true);
            }, 5000);
          },
          (error) => {
            console.log('Failed', error);
            setModalText(textOptions.failure);
            setTimeout(() => {
              toggleShowModal(false);
              toggleCanSend(true);
            }, 2000);
          }
        );
      } else {
        setModalText(textOptions.invalid);
        setTimeout(() => {
          toggleShowModal(false);
          toggleCanSend(true);
        }, 2000);
      }
    }
  };

  return (
    <div className='Section6' id='section6'>
      {showModal && <Modal text={modalText} />}
      <div className='HeaderBox'>
        <h2>Contact</h2>
      </div>
      <div className='Content'>
        <div className='Left'>
          <h4>get in touch</h4>
          <form
            className='Form'
            onSubmit={(e) => {
              e.preventDefault;
            }}
          >
            <input
              type='text'
              className='TextLine Text'
              placeholder='Name'
              name='name'
              onChange={(e) => inputChanged(e)}
            />
            <input
              type='text'
              className='TextLine Text'
              placeholder='E-Mail'
              name='email'
              onChange={(e) => inputChanged(e)}
            />
            <textarea
              type='text'
              className='TextBox Text'
              placeholder='Message'
              name='message'
              onChange={(e) => inputChanged(e)}
            />
          </form>

          <button className='TiltBtn TiltBtn-1 TiltBtn-Purple' onClick={() => submitForm()}>
            <p>Send message</p>
          </button>
        </div>
        <div className='Right'>
          <img src={Cloud} alt='Blotch' />
          <h3>need to know more details?</h3>
          <h4>get in touch!</h4>

          {window.innerWidth >= 750 && (
            <div className='TextBox'>
              <p className='Text'>
                Have any questions about your project you aren't sure about? Give me a shout and we
                can figure out the right package and website for your needs.
              </p>
              <p className='Text'>
                The website packages I offer are designed to give you the website you need without
                any unnessecary features.
              </p>
              {window.innerWidth >= 1500 && (
                <p className='Text'>
                  Not sure what style will work best for to connect with your customers? I can help
                  you pick the best theme the represent your business.
                </p>
              )}
            </div>
          )}

          {window.innerWidth >= 750 && (
            <button className='TiltBtn'>
              <p>Get started</p>
            </button>
          )}

          {window.innerWidth < 750 && (
            <div className='ContactInfo'>
              <p>613-869-2343</p>
              <p>Tranquilgorge@outlook.com</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Section6;

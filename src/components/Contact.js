import React from 'react';
import { ContactContainer, Form } from '../styles/ContactStyles';

const Contact = () => {
  return (
    <ContactContainer>
      <div>
        <div className='heading'>
          <div className='c-header'>
            <h2>Contact Us</h2>
            <p>Home / Contact us</p>
          </div>
        </div>
        <div class="text">Feel Free To Drop Us A Line</div>
        <div className='form-style'>
          <Form>
            <input type="text" placeholder="Name" />
            <input type="email" placeholder="Email" />
            <textarea placeholder="Your Message"></textarea>
            <button type="submit">Send Message</button>
          </Form>
        </div>
      </div>
    </ContactContainer>
  );
};

export default Contact;

import React from 'react';
import { BookingContainer, Form } from '../styles/BookingStyles';

const Booking = () => {
  return (
    <BookingContainer>
      <div>
        <div className='heading'>
          <div className='b-header'>
            <h2>Book Your Appointment Now</h2>
            <p>Home / How to Book a Service</p>
          </div>
        </div>
        <div className='form-style'>
          <Form >
            <input type="text" placeholder="Name" />
            <input type="email" placeholder="Email" />
            <input type="date" placeholder="Date" />
            <textarea placeholder="Additional Notes"></textarea>
            <button type="submit">Book Now</button>
          </Form>
        </div>
      </div>
    </BookingContainer>
  );
};

export default Booking;

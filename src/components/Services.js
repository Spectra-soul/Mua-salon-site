import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ServicesContainer, ServiceItem, ServicesWrapper, PrevButton, NextButton } from '../styles/ServicesStyles';

const services = [
  { id: 1, header: 'Facial Treatments', text: 'Revitalize your skin with our expert facial treatments.' },
  { id: 2, header: 'Hair Care', text: 'Get professional haircuts, styling, and treatments.' },
  { id: 3, header: 'Nail Services', text: 'Indulge in our luxurious nail care services.' },
  { id: 4, header: 'Massage Therapy', text: 'Relax with our therapeutic massage services.' },
];

const Services = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrevClick = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? services.length - 1 : prevIndex - 1));
  };

  const handleNextClick = () => {
    setCurrentIndex((prevIndex) => (prevIndex === services.length - 1 ? 0 : prevIndex + 1));
  };

  return (
    <ServicesContainer>
      <div>
        <div className='heading'>
          <div className='b-header'>
            <h2>Our Services</h2>
            <p>Home / Our Services</p>
          </div>
        </div>
      </div>
      
      <div className='wrap-positioning'>
        <div className='wrapping'>
          <ServicesWrapper currentIndex={currentIndex}>
            {services.map(service => (
              <ServiceItem key={service.id}>
                <h3>{service.header}</h3>
                <p>{service.text}</p>
                <button><Link to="/Booking">Book Now</Link></button>
              </ServiceItem>
            ))}
          </ServicesWrapper>
        </div>
      </div>
      <div className='scroll-btns'>
        <PrevButton onClick={handlePrevClick}>Prev</PrevButton>
        <NextButton onClick={handleNextClick}>Next</NextButton>
      </div>
    </ServicesContainer>
  );
};

export default Services;


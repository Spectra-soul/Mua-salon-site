import React from 'react';
import { Link } from 'react-router-dom';
import { AboutContainer, Content } from '../styles/AboutStyles';

const About = () => {
  return (
    <AboutContainer>
      <div>
        <div className='heading'>
          <div className='b-header'>
            <h2>About</h2>
            <p>Home / about</p>
          </div>
        </div>
      </div>
      <div className='about-bg'>
        <div className='about-container'>
          <Content>
            <h3>Hi There</h3>
            <h1>About Me</h1>
            <p>As Artists, we have the power to create a masterpiece. We also have the power to impact a person’s life in a positive way. We all have the right to feel beautiful and empowered. Feeling beautiful leads to greater confidence. Greater confidence leads to self-respect. Self-respect leads to personal power. Not just for you, but for everyone around you. Beauty can be a powerful thing! The moment you look in the mirror and smile at your transformation – it’s just priceless. At Priyanka’s beauty box , I live in that moment – I live my passion. I love what I do and it shows. I make real connections with my brides, and with every client that sits in my chair. Those authentic relationships are what allow me to fulfill my mission of illuminating the beauty within, one face at a time.</p>
          </Content>
          <Content>
            <div className='about-banner'>
              <h4> My Story</h4>
              <p>Established in early 2016, Priyanks’s Beauty Box is a makeover studio where you get best bridal makeup artist in Kolkata for all of your makeup and hair styling requirements in Bridal Makeup, Reception makeup and Party makeup. My passion is fueled by my desire to help a woman’s inner beauty shine on the outside.</p>
              <h6><Link to="/Gallery">Check out my works</Link></h6>
            </div>
          </Content>
        </div>
      </div>
    </AboutContainer>
  );
};

export default About;

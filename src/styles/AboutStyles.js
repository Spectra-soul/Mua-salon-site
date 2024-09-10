import styled from 'styled-components';

export const AboutContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  background-image: url('/images/about-image.jpg');
  background-size: cover;
  background-position: center;
  padding-top: 60px;
  text-align: center;
  position: relative;
  z-index: 1;

  .b-header{
    padding: 30px;
    background-color: #696a6a;
  }

  h2 {
    color: #fff;
    font-family: 'fantasy';
    font-size: 35px;
  }
  
  p {
    color: #fff;
    font-family: 'fantasy';
    font-size: 16px;
  }

  .about-bg {
    background: linear-gradient(rgba(250, 250, 250, 0.8),
                rgba(250, 250, 250, 0.8), rgba(250, 250, 250, 0.8)), 
                url('/images/home-banner.jpeg');
    height: auto;
    position: relative;
    z-index: 1;
    padding-bottom: 60px
  }

  .about-container {
    margin: 10% 10%;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 1170px) {
  .about-container {
    grid-template-columns: 1fr;
    margin: 5% 0%; /* Center the container */
    padding: 0 5%;
  }
}

  @media (max-width: 525px) {
  .about-container {
    grid-template-columns: 1fr;
    margin: 5% 0%; /* Center the container */
    padding: 0 5%;
  }
}
`;

export const Content = styled.div`
  max-width: 600px;
  text-align: left;
  align-item: center;
  justify-content: center;
  z-index: 1;
  margin: 0 auto; 

  h3 {
    color: black;
    font-size: 40px;
  }
  h3:hover {
    color: #ad7719;
  }
  
  h1 {
    color: #ad7719;
    font-size: 60px;
    margin-bottom: 20px;
    font-weight: 900;
  }
  h1:hover {
    color: black;
  }

  p {
    color: black;
    font-size: 16px;
  }

  .about-banner {
    text-align: center;
    padding: 50px;
    margin: 0 auto; 
    height: 400px;
    width: 400px;
    background-color: #f4bd5fe8;
  }

  .about-banner h4 {
    color: #ad7719;
    font-size: 26px;
  }

  .about-banner h6 {
    color: black;
    font-size: 17px;
  }

@media (max-width: 1170px) {
  max-width: 90%; 

  .about-banner { 
  }
}

@media (max-width: 525px) {
  max-width: 70%;

   .about-banner {
    padding: 20px;
    height: 100%;
    width: 100%;
    
  }
  .about-banner p {
    font-size: 10px;
  }


}
  
`;

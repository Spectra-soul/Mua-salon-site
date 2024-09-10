import styled from 'styled-components';

export const ReviewsContainer = styled.div`
  padding: 60px 0px;
  text-align: center;

  .heading {
    padding-bottom: 60px;
  }

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
  
  .review-bg{
    background: linear-gradient(rgba(0,0,0,0.6),
                    rgba(0,0,0,0.9), rgba(0,0,0,0.6)), 
                    url('/images/home-banner.jpeg');
    height: 500px;
    
  }

  button {
    padding: 15px 25px;
    font-size: 18px;
    background-color: #f4bd5fe8;
    color: #111;
    border: none;
    cursor: pointer;
    margin-top: 50px;
  }

  button:hover {
    background-color: #fff;
  }  
  
  @media (max-width: 600px) {
  button {
    font-size: 16px;
    padding: 15px 22px;
  }
}
`;

export const ReviewItem = styled.div`
  padding-top: 120px;
  padding-bottom: 200px;
  max-width: 100%;
  max-height: 100%;
  padding-left: 15%;
  padding-right: 15%;
  position: relative;
  overflow: hidden;

  p {
    display: flex;
    font-size: 19px;
    color: #fff;
    font-style: italic;
  }
  .text {
    justify-content: center;
    display: flex;
  }   
  .text p {
    font-size: 16px;
    color: #f4bd5fe8;
    font-style: italic;
    font-family: 'fantasy';
  }

  @media (max-width: 600px) {
  p {
    font-size: 16px;
  }

  .text p {
    font-size: 13px;
  }
}
`;

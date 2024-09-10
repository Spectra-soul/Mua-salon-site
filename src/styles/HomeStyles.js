import styled from 'styled-components';

export const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-image: url('/images/home-banner.jpg');
  background-size: cover;
  background-position: center;
  color: #fff;
`;

export const Banner = styled.div`
  text-align: center;

  h1 {
    font-size: 48px;
    margin-bottom: 20px;
  }

  p {
    font-size: 24px;
    margin-bottom: 30px;
  }
`;

export const Button = styled.a`
  background-color: #ff66b3;
  padding: 15px 30px;
  color: white;
  text-decoration: none;
  border-radius: 5px;
  font-size: 20px;
  font-weight: bold;

  &:hover {
    background-color: #ff4da6;
  }
`;


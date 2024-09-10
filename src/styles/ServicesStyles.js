import styled from 'styled-components';

export const ServicesContainer = styled.div`
  padding: 60px 0px;
  background-size: cover;
  text-align: center;
  position: relative; 

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

  .wrap-positioning {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .wrapping {
    justify-content: center;
    position: relative; 
    display: flex;
    width: 800px;
    overflow: hidden;
  }

  .scroll-btns {
    margin-top: 20px;
    justify-content: center;
    align-items: center;
  }
`;

export const ServicesWrapper = styled.div`
  display: flex;
  width: 800px; /* Ensures the wrapper takes up the full width */
  position: relative;
  transition: transform 0.5s ease-in-out;
  transform: translateX(${props => props.currentIndex * -100}%);
`;

export const ServiceItem = styled.div`
  overflow: hidden;
  flex: 0 0 100%; /* Ensures each item takes up full width of the wrapper */
  background: #fbf5ea;;
  padding: 100px;
  box-sizing: border-box;
  width: 100%;
  margin: 0 auto; /* Centers the item horizontally */
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);

  FontAwesomeIcon {
    color: black;
  }

  h3 {
    font-size: 36px;
    color: #111;
    margin-bottom: 10px;
  }

  p {
    font-size: 18px;
    color: #333;
  }

  button {
    padding: 10px 30px;
    border-radius: 5px;
    border: none;
    background-color: #d4a05ce8;
    color: #111;
    cursor: pointer;
    font-size: 16px;
    transition: background-color 0.3s ease;
    margin: 10px;
  }
  
  Link:hover {
    color: white;
  }

  button:hover {
    background-color: #ad7719;
    color: #fff;
  }
`;

export const NavigationButton = styled.button`
  padding: 5px 10px;
  border: none;
  background-color: #d4a05ce8;
  color: black;
  border-radius: 5px;
  cursor: pointer;
  font-size: 16px;
  transition: background-color 0.3s ease;
  margin: 100px;

  &:hover {
    background-color: #ad7719;
  }

  position: relative; 
  top: 50%;
  transform: translateY(-50%);
`;

export const PrevButton = styled(NavigationButton)`
  left: 10px; 
  margin: 50px 20px;
`;

export const NextButton = styled(NavigationButton)`
  right: 10px; 
  margin: 20px;
`;

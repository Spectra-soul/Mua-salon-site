import styled from 'styled-components';

export const NavbarContainer = styled.nav`
  display: flex;
  height: 60px;
  background-color: #111;
  color: white;
  position: fixed;
  width: 100%;
  top: 0;
  z-index: 10;
  padding: 0;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);

  img {
    margin-left: 15px;
    width: 60px;
    height: 60px;
  }

  button {
    color: white;
    background-color: #fff;
    border: none;
    border-radius: 5px;
    margin: 10px;
    padding: 5px;
  }

  ul {
    background-color: #111;
  }

`;


export const NavItem = styled.li`
  .nav-link {
    font-family: "Roboto", sans-serif;
    font-weight: 500;
    font-size: larger;
    padding: 10px 20px;
    color: #ddd;
    text-decoration: none;

    &:hover {
      color: #ad7719;
      border-bottom: 2px solid #ad7719;
    }
  }
`;


import styled from 'styled-components';

export const GalleryContainer = styled.div`
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

  .makeup-types {
    display: flex;
    flex-wrap: wrap;
    font-family: 'fantasy';
    font-size: 14px;
    padding: 30px;
    display: flex;
    justify-content: center;
    gap: 20px;
  }

  .filters {
    padding-right: 10px;
    font-size: 14px;
    text-transform: uppercase;
    border-right : 2px solid #ad7719 ;
    background-color: #fff0d4;
    cursor: pointer;
    transition: all 0.3s ease;
    font-weight: bold;
    box-shadow: 0px 5px 25px rgba(68, 47, 10, 0.2);

    &:hover {
      color: #f4bd5fe8;
    }

    &.active {
      color: #ad7719;
    }
  }

  .gallery-grid {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;color in rgb
    gap: 10px;
    padding: 20px;
  }

`;

export const GalleryItem = styled.div`
  display: inline-block;
  margin: 1px;
  position: relative;
  
  img {
    width: 300px;
    height: 300px;
    border-radius: 5px;
    transition: transform 0.3s ease, box-shadow 0.3s ease;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);

    &:hover {
      transform: scale(1.05);
      box-shadow: 0 8px 20px rgba(0, 0, 0, 0.2);
    }
  }

  @media (max-width: 620px) {
  img {
    width: 200px;
    height: 200px;
  }
}

 @media (max-width: 480px) {
  img {
    width: 300px;
    height: 300px;
    margin: 10px;
  }
}

@media (max-width: 350px) {
  img {
    width: 200px;
    height: 200px;
    margin: 10px;
  }
}
`;

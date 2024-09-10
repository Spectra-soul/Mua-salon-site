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
    font-family: 'fantasy';
    font-size: 14px;
    padding: 30px;
    display: flex;
    justify-content: center;
  }

  .filters {
    width: 20%
    display: flex;
    flex-wrap: wrap;
    margin: 10px;
    overflow: ;

  }
`;

export const GalleryItem = styled.div`
  display: inline-block;
  margin: 1px;
  position: relative;
  
  img {
    width: 300px;
    height: 300px;
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
